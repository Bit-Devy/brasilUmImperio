// carrega o conteúdo histórico preservado e os desenhos dos ícones
import { acontecimentos, artigosHistoricos, fontesHistoricas, periodosHistoricos, obterPeriodo } from './dadosHistoricos.js';
import { montarIcone, desenharIcone, obterIconeAcontecimento } from './icones.js';

// localiza os elementos da página pelos identificadores em português
const obterElemento = (identificador) => document.getElementById(identificador);
const aplicacao = obterElemento('aplicacao');
const janelaLeitura = obterElemento('janelaLeitura');
const janelaRetorno = obterElemento('janelaRetorno');
const botaoIniciarMapa = obterElemento('botaoIniciarMapa');
const areaTabuleiro = obterElemento('areaTabuleiro');
const espacoTabuleiro = obterElemento('espacoTabuleiro');
const desenhoTabuleiro = obterElemento('desenhoTabuleiro');
const personagem = obterElemento('personagem');
const seletorAno = obterElemento('seletorAno');
const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');
// define as medidas do tabuleiro e as distâncias entre casas e anotações
const enderecoSvg = 'http://www.w3.org/2000/svg';
const quantidadeLinhas = 8;
const alturaLinha = 360;
const limiteEsquerdo = 205;
const limiteDireito = 1355;
const posicaoInicialY = 220;
const raioCurva = alturaLinha / 2;
const larguraTabuleiro = 1620;
const meiaLarguraTrajeto = 46;
const distanciaMarco = 112;
const tamanhoMarco = 52;
const distanciaAno = 78;
const alturaTabuleiro = posicaoInicialY + (quantidadeLinhas - 1) * alturaLinha + 240;
// guarda o estado da navegação da câmera das animações e do foco
let indiceAtual = 0;
let percursoIniciado = false;
let percursoIniciando = false;
let trajeto;
let comprimentoTrajeto = 0;
let paradas = [];
let distanciaAtual = 0;
let identificadorAnimacao = 0;
let camera = { x: 0, y: 0 };
let temporizadorTamanho;
let ultimoFoco = null;
let temporizadorInicio;
let ultimoDeslize = 0;
let focoRetorno = null;
const casas = [];
const marcos = [];
// protege os textos antes de montar a marcação da página
const escaparTexto = (texto = '') => String(texto).replace(/[&<>"']/g, (caractere) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[caractere]));

// cria os elementos vetoriais com os atributos exigidos pelo navegador
function criarElementoSvg(nome, atributos = {}, elementoPai) {
  const elemento = document.createElementNS(enderecoSvg, nome);
  for (const [chave, valor] of Object.entries(atributos)) elemento.setAttribute(chave, valor);
  if (elementoPai) elementoPai.appendChild(elemento);
  return elemento;
}

// desenha o trajeto distribui as casas e prepara a posição inicial do personagem
function montarTabuleiro() {
  desenhoTabuleiro.setAttribute('width', larguraTabuleiro);
  desenhoTabuleiro.setAttribute('height', alturaTabuleiro);
  desenhoTabuleiro.setAttribute('viewBox', `0 0 ${larguraTabuleiro} ${alturaTabuleiro}`);
  espacoTabuleiro.style.width = `${larguraTabuleiro}px`;
  espacoTabuleiro.style.height = `${alturaTabuleiro}px`;
  // forma um caminho contínuo com linhas alternadas e curvas semicirculares
  let descricaoTrajeto = `M ${limiteEsquerdo} ${posicaoInicialY}`;
  for (let linha = 0; linha < quantidadeLinhas; linha++) {
    const posicaoY = posicaoInicialY + linha * alturaLinha;
    const extremidadeFinal = linha % 2 === 0 ? limiteDireito : limiteEsquerdo;
    descricaoTrajeto += ` L ${extremidadeFinal} ${posicaoY}`;
    if (linha < quantidadeLinhas - 1) {
      const sentidoCurva = linha % 2 === 0 ? 1 : 0;
      descricaoTrajeto += ` A ${raioCurva} ${raioCurva} 0 0 ${sentidoCurva} ${extremidadeFinal} ${posicaoY + alturaLinha}`;
    }
  }
  criarElementoSvg('path', { d: descricaoTrajeto, class: 'contornoTrajeto' }, obterElemento('camadaTrajeto'));
  trajeto = criarElementoSvg('path', { d: descricaoTrajeto, class: 'superficieTrajeto', 'aria-hidden': 'true' }, obterElemento('camadaTrajeto'));
  comprimentoTrajeto = trajeto.getTotalLength();
  const espacamento = comprimentoTrajeto / (acontecimentos.length - 1);
  paradas = acontecimentos.map((evento, indice) => ({ distancia: indice * espacamento, ...obterPontoTrajeto(indice * espacamento) }));

  // cria as casas numeradas e vincula cada uma ao seu acontecimento
  acontecimentos.forEach((evento, indice) => {
    const parada = paradas[indice];
    const distanciaInicial = indice === 0 ? 0 : parada.distancia - espacamento / 2;
    const distanciaFinal = indice === acontecimentos.length - 1 ? comprimentoTrajeto : parada.distancia + espacamento / 2;
    const grupoCasa = criarElementoSvg('g', { class: 'casa', 'data-indice': indice, role: 'button', tabindex: '-1', 'aria-label': `${indice + 1}. ${evento.ano}: ${evento.titulo}` }, obterElemento('camadaCasas'));
    const titulo = criarElementoSvg('title', {}, grupoCasa); titulo.textContent = `${evento.ano} — ${evento.titulo}`;
    criarElementoSvg('path', { d: desenharFaixa(distanciaInicial, distanciaFinal, meiaLarguraTrajeto, indice === 0, indice === acontecimentos.length - 1), class: 'preenchimentoCasa' }, grupoCasa);
    if (indice > 0) {
      const pontoBorda = obterPontoTrajeto(distanciaInicial);
      criarElementoSvg('line', { x1: pontoBorda.x - pontoBorda.normalX * meiaLarguraTrajeto, y1: pontoBorda.y - pontoBorda.normalY * meiaLarguraTrajeto, x2: pontoBorda.x + pontoBorda.normalX * meiaLarguraTrajeto, y2: pontoBorda.y + pontoBorda.normalY * meiaLarguraTrajeto, class: 'divisorCasa' }, grupoCasa);
    }
    const numero = criarElementoSvg('text', { x: parada.x, y: parada.y + 5, 'text-anchor': 'middle', class: 'numeroCasa' }, grupoCasa);
    numero.textContent = String(indice + 1).padStart(2, '0');

    // posiciona o ano ao lado da borda correta nas partes curvas do tabuleiro
    const anotacoes = posicionarAnotacoes(parada);
    const ano = criarElementoSvg('text', { x: anotacoes.ano.x, y: anotacoes.ano.y + 4, 'text-anchor': 'middle', class: 'anoCasa' }, grupoCasa);
    ano.textContent = evento.ano;
    grupoCasa.addEventListener('click', () => { if (percursoIniciado && performance.now() - ultimoDeslize > 350) selecionarCasa(indice); });
    grupoCasa.addEventListener('keydown', (evento) => {
      if (evento.key === 'Enter' || evento.key === ' ') {
        evento.preventDefault(); selecionarCasa(indice); abrirArtigo();
      }
    });
    casas.push(grupoCasa);
    if (evento.icone) adicionarMarco(evento, indice, parada);
  });
  personagem.parentNode.appendChild(personagem);
  seletorAno.min = '1822'; seletorAno.max = '1889'; seletorAno.value = '1822';
  desenhoTabuleiro.setAttribute('aria-hidden', 'true');
  atualizarAcontecimento();
  posicionarImediatamente(0);
}

// calcula um ponto do trajeto e as direções usadas para desenhar suas bordas
function obterPontoTrajeto(distancia) {
  const distanciaLimitada = Math.max(0, Math.min(comprimentoTrajeto, distancia));
  const ponto = trajeto.getPointAtLength(distanciaLimitada);
  const pontoAnterior = trajeto.getPointAtLength(Math.max(0, distanciaLimitada - 1));
  const pontoSeguinte = trajeto.getPointAtLength(Math.min(comprimentoTrajeto, distanciaLimitada + 1));
  const magnitude = Math.hypot(pontoSeguinte.x - pontoAnterior.x, pontoSeguinte.y - pontoAnterior.y) || 1;
  const direcaoX = (pontoSeguinte.x - pontoAnterior.x) / magnitude;
  const direcaoY = (pontoSeguinte.y - pontoAnterior.y) / magnitude;
  return { x: ponto.x, y: ponto.y, normalX: -direcaoY, normalY: direcaoX, direcaoX, direcaoY };
}

// forma cada casa acompanhando as curvas e arredonda as pontas do percurso
function desenharFaixa(distanciaInicial, distanciaFinal, meiaLargura, arredondarInicio = false, arredondarFim = false) {
  const bordas = [[], []];
  const divisoes = Math.max(6, Math.ceil((distanciaFinal - distanciaInicial) / 12));
  for (let divisao = 0; divisao <= divisoes; divisao++) {
    const pontoBorda = obterPontoTrajeto(distanciaInicial + (distanciaFinal - distanciaInicial) * divisao / divisoes);
    bordas[0].push(`${pontoBorda.x + pontoBorda.normalX * meiaLargura},${pontoBorda.y + pontoBorda.normalY * meiaLargura}`);
    bordas[1].push(`${pontoBorda.x - pontoBorda.normalX * meiaLargura},${pontoBorda.y - pontoBorda.normalY * meiaLargura}`);
  }
  const bordaInvertida = bordas[1].reverse();
  const extremidadeFinal = arredondarFim ? `A${meiaLargura} ${meiaLargura} 0 0 0 ${bordaInvertida[0]}` : `L${bordaInvertida[0]}`;
  const fechamentoInicial = arredondarInicio ? `A${meiaLargura} ${meiaLargura} 0 0 0 ${bordas[0][0]}` : '';
  return `M${bordas[0].join(' L')} ${extremidadeFinal} L${bordaInvertida.slice(1).join(' L')} ${fechamentoInicial} Z`;
}

// coloca os ícones do lado externo das curvas e mantém os anos legíveis
function posicionarAnotacoes(pontoTrajeto) {
  const ficaNaCurva = pontoTrajeto.x < limiteEsquerdo - .25 || pontoTrajeto.x > limiteDireito + .25;
  let direcaoExterna = { x: 0, y: -1 };
  if (ficaNaCurva) {
    const linha = Math.max(0, Math.min(quantidadeLinhas - 2, Math.floor((pontoTrajeto.y - posicaoInicialY) / alturaLinha)));
    const centro = { x: pontoTrajeto.x > limiteDireito ? limiteDireito : limiteEsquerdo, y: posicaoInicialY + (linha + .5) * alturaLinha };
    const diferencaX = pontoTrajeto.x - centro.x;
    const diferencaY = pontoTrajeto.y - centro.y;
    const comprimento = Math.hypot(diferencaX, diferencaY) || 1;
    direcaoExterna = { x: diferencaX / comprimento, y: diferencaY / comprimento };
  }
  const direcaoAno = ficaNaCurva ? { x: -direcaoExterna.x, y: -direcaoExterna.y } : { x: 0, y: 1 };
  return {
    direcaoExterna,
    icone: { x: pontoTrajeto.x + direcaoExterna.x * distanciaMarco, y: pontoTrajeto.y + direcaoExterna.y * distanciaMarco },
    ano: { x: pontoTrajeto.x + direcaoAno.x * distanciaAno, y: pontoTrajeto.y + direcaoAno.y * distanciaAno },
  };
}

// reserva espaço para o personagem o ícone e o ano da casa atual
function calcularLimitesAnotacoes(pontoTrajeto) {
  const posicionamento = posicionarAnotacoes(pontoTrajeto);
  const possuiIcone = Boolean(acontecimentos[indiceAtual].icone);
  const meioIcone = tamanhoMarco / 2;
  const iconeX = posicionamento.icone.x - pontoTrajeto.x;
  const iconeY = posicionamento.icone.y - pontoTrajeto.y;
  const anoX = posicionamento.ano.x - pontoTrajeto.x;
  const anoY = posicionamento.ano.y - pontoTrajeto.y;
  return {
    superior: Math.max(60, possuiIcone ? meioIcone - iconeY : 0, 10 - anoY),
    inferior: Math.max(50, possuiIcone ? meioIcone + iconeY : 0, anoY + 10),
    esquerdo: Math.max(50, possuiIcone ? meioIcone - iconeX : 0, 20 - anoX),
    direito: Math.max(50, possuiIcone ? meioIcone + iconeX : 0, 20 + anoX),
  };
}

// desenha o ícone a ligação e o ano do acontecimento ao lado da casa
function adicionarMarco(evento, indice, parada) {
  const marco = criarElementoSvg('g', { class: 'marco', 'data-indice': indice, 'aria-hidden': 'true' }, obterElemento('camadaMarcos'));
  const { direcaoExterna, icone: centro } = posicionarAnotacoes(parada);
  const inicioLigacao = meiaLarguraTrajeto + 7;
  const fimLigacao = distanciaMarco - tamanhoMarco / 2 - 8;
  criarElementoSvg('line', { x1: parada.x + direcaoExterna.x * inicioLigacao, y1: parada.y + direcaoExterna.y * inicioLigacao, x2: parada.x + direcaoExterna.x * fimLigacao, y2: parada.y + direcaoExterna.y * fimLigacao, class: 'ligacaoMarco' }, marco);
  const metade = tamanhoMarco / 2;
  const icone = criarElementoSvg('g', { transform: `translate(${centro.x - metade} ${centro.y - metade}) scale(${tamanhoMarco / 32})`, class: 'simboloMarco' }, marco);
  icone.innerHTML = desenharIcone(obterIconeAcontecimento(evento));
  const ficaAEsquerda = direcaoExterna.x < -.25;
  const rotuloX = centro.x + (ficaAEsquerda ? -40 : 40);
  // mostra somente o ano para evitar repetir o título do acontecimento
  const rotulo = criarElementoSvg('text', { x: rotuloX, y: centro.y + 4, 'text-anchor': ficaAEsquerda ? 'end' : 'start', class: 'nomeMarco' }, marco);
  const ano = criarElementoSvg('tspan', { x: rotuloX, dy: 0, class: 'legendaMarco' }, rotulo);
  ano.textContent = String(evento.ano);
  marcos.push({ elemento: marco, indice });
}

// mantém a casa atual entre a leitura e os controles sem cortar suas anotações
function calcularAncoraTela(pontoTrajeto) {
  const telaPequena = window.innerWidth <= 760;
  const altura = areaTabuleiro.clientHeight;
  if (!percursoIniciado) return { x: areaTabuleiro.clientWidth * (telaPequena ? .59 : .75), y: altura * (telaPequena ? .71 : .61) };
  const direcao = pontoTrajeto.direcaoX >= 0 ? 1 : -1;
  const acontecimento = obterElemento('acontecimentoAtual');
  const fimTextoAcontecimento = acontecimento.offsetTop + acontecimento.offsetHeight;
  const limites = calcularLimitesAnotacoes(pontoTrajeto);
  const inicioRodape = document.querySelector('.rodapePercurso').offsetTop;
  const minimoY = fimTextoAcontecimento + limites.superior + 22;
  const maximoY = inicioRodape - limites.inferior - 22;
  const posicaoPreferidaX = telaPequena ? areaTabuleiro.clientWidth * .47 : areaTabuleiro.clientWidth * (direcao > 0 ? .32 : .66);
  const minimoX = limites.esquerdo + 24;
  const maximoX = areaTabuleiro.clientWidth - limites.direito - 24;
  return {
    x: Math.max(minimoX, Math.min(posicaoPreferidaX, maximoX)),
    y: Math.max(minimoY, Math.min(altura * (telaPequena ? .73 : .70), maximoY)),
  };
}

// aumenta o espaço disponível quando o texto e o tabuleiro precisam de mais altura
function ajustarEspacoLeitura() {
  if (!percursoIniciado) { aplicacao.style.minHeight = ''; return; }
  const acontecimento = obterElemento('acontecimentoAtual');
  const alturaCabecalho = document.querySelector('.cabecalhoSite').offsetHeight;
  const limites = calcularLimitesAnotacoes(paradas[indiceAtual]);
  const espacoRodape = areaTabuleiro.clientHeight - document.querySelector('.rodapePercurso').offsetTop;
  const espacoTabuleiroLivre = Math.max(340, limites.superior + limites.inferior + 44 + espacoRodape);
  aplicacao.style.minHeight = `${Math.ceil(alturaCabecalho + acontecimento.offsetTop + acontecimento.offsetHeight + espacoTabuleiroLivre)}px`;
}

// desloca a câmera e posiciona o personagem sobre o trajeto
function posicionarTabuleiro(pontoTrajeto, suavizarCamera = false) {
  const ancora = calcularAncoraTela(pontoTrajeto);
  const destino = { x: ancora.x - pontoTrajeto.x, y: ancora.y - pontoTrajeto.y };
  if (suavizarCamera) {
    camera.x += (destino.x - camera.x) * .11;
    camera.y += (destino.y - camera.y) * .11;
  } else camera = destino;
  espacoTabuleiro.style.transform = `translate3d(${camera.x}px,${camera.y}px,0)`;
  personagem.setAttribute('transform', `translate(${pontoTrajeto.x} ${pontoTrajeto.y - 2})`);
}

// interrompe a animação e posiciona o personagem diretamente na casa escolhida
function posicionarImediatamente(indice) {
  cancelAnimationFrame(identificadorAnimacao);
  distanciaAtual = paradas[indice].distancia;
  posicionarTabuleiro(obterPontoTrajeto(distanciaAtual));
  personagem.classList.remove('caminhando');
}

// anima o deslocamento até a casa escolhida respeitando a preferência por movimento reduzido
function moverParaCasa(indice, imediato = false) {
  cancelAnimationFrame(identificadorAnimacao);
  if (movimentoReduzido.matches || imediato) { posicionarImediatamente(indice); return; }
  const distanciaInicial = distanciaAtual;
  const distanciaFinal = paradas[indice].distancia;
  const duracao = Math.min(1050, Math.max(600, Math.abs(distanciaFinal - distanciaInicial) * 1.9));
  const inicio = performance.now();
  personagem.classList.add('caminhando');
  // aplica a suavização do movimento a cada quadro
  function animarQuadro(agora) {
    const fracaoDecorrida = Math.min(1, (agora - inicio) / duracao);
    const suavizacao = fracaoDecorrida < .5 ? 4 * fracaoDecorrida ** 3 : 1 - (-2 * fracaoDecorrida + 2) ** 3 / 2;
    distanciaAtual = distanciaInicial + (distanciaFinal - distanciaInicial) * suavizacao;
    posicionarTabuleiro(obterPontoTrajeto(distanciaAtual), true);
    if (fracaoDecorrida < 1) identificadorAnimacao = requestAnimationFrame(animarQuadro);
    else {
      personagem.classList.remove('caminhando');
      estabilizarCamera();
    }
  }
  identificadorAnimacao = requestAnimationFrame(animarQuadro);
}

// finaliza o movimento suave da câmera depois que o personagem chega à casa
function estabilizarCamera() {
  let quadros = 0;
  const pontoTrajeto = obterPontoTrajeto(distanciaAtual);
  const ancora = calcularAncoraTela(pontoTrajeto);
  // aproxima a câmera da posição final até concluir a animação
  function animarQuadro() {
    posicionarTabuleiro(pontoTrajeto, true);
    quadros++;
    if (quadros < 45 && Math.hypot(ancora.x - pontoTrajeto.x - camera.x, ancora.y - pontoTrajeto.y - camera.y) > .3) {
      identificadorAnimacao = requestAnimationFrame(animarQuadro);
    } else posicionarTabuleiro(pontoTrajeto);
  }
  identificadorAnimacao = requestAnimationFrame(animarQuadro);
}

// atualiza o texto o ano o progresso e os estados das casas do percurso
function atualizarAcontecimento(animar = false) {
  const evento = acontecimentos[indiceAtual];
  const periodo = obterPeriodo(evento);
  obterElemento('rotuloPeriodo').textContent = periodosHistoricos[periodo].rotulo.toUpperCase();
  obterElemento('anoAtual').textContent = evento.ano;
  obterElemento('tituloAtual').textContent = evento.titulo;
  obterElemento('resumoAtual').textContent = evento.resumo;
  obterElemento('categoriaAcontecimento').textContent = (evento.categoria || 'Vida política e sociedade').toUpperCase();
  obterElemento('contadorCasas').textContent = `${String(indiceAtual + 1).padStart(2, '0')} / ${acontecimentos.length}`;
  obterElemento('posicaoPercurso').textContent = String(indiceAtual + 1).padStart(2, '0');
  obterElemento('botaoCasaAnterior').disabled = indiceAtual === 0;
  obterElemento('botaoProximaCasa').disabled = indiceAtual === acontecimentos.length - 1;
  obterElemento('botaoLerMais').innerHTML = `${evento.artigo ? 'Explorar este acontecimento' : 'Contexto e fontes'} <span aria-hidden="true">↗</span>`;
  ajustarEspacoLeitura();
  // converte o ano atual em progresso visual e texto acessível
  const porcentagem = (evento.ano - 1822) / (1889 - 1822) * 100;
  obterElemento('rotuloProgresso').textContent = `${Math.round(porcentagem)}% · ${evento.ano}`;
  seletorAno.value = evento.ano;
  seletorAno.style.setProperty('--progresso', `${porcentagem}%`);
  seletorAno.setAttribute('aria-valuetext', `${evento.ano}, ${evento.titulo}`);
  // realça o período atual e informa a posição para leitores de tela
  document.querySelectorAll('[data-periodo]').forEach((elemento) => {
    elemento.classList.toggle('ativo', elemento.dataset.periodo === periodo);
    elemento.setAttribute('aria-current', elemento.dataset.periodo === periodo ? 'true' : 'false');
  });
  // marca as casas atuais e concluídas e ajusta a navegação por foco
  casas.forEach((casa, indiceCasa) => {
    casa.classList.toggle('ativo', indiceCasa === indiceAtual);
    casa.classList.toggle('concluido', indiceCasa < indiceAtual);
    casa.setAttribute('tabindex', percursoIniciado && Math.abs(indiceCasa - indiceAtual) <= 2 ? '0' : '-1');
    if (indiceCasa === indiceAtual) casa.setAttribute('aria-current', 'step');
    else casa.removeAttribute('aria-current');
  });
  // realça os ícones atuais e os marcos que já foram visitados
  marcos.forEach(({ elemento, indice }) => {
    elemento.classList.toggle('ativo', indice === indiceAtual);
    elemento.classList.toggle('concluido', indice < indiceAtual);
  });
  document.querySelector('.dicaControles > span:last-child').innerHTML = indiceAtual === acontecimentos.length - 1 ? 'Percurso concluído.<br>1822 — 1889.' : 'Avance uma casa.<br>Descubra uma história.';
  if (animar && !movimentoReduzido.matches) {
    obterElemento('acontecimentoAtual').classList.remove('atualizandoAcontecimento');
    void obterElemento('acontecimentoAtual').offsetWidth;
    obterElemento('acontecimentoAtual').classList.add('atualizandoAcontecimento');
  }
}

// gira o tabuleiro apresenta os controles e inicia a navegação histórica
function iniciarPercurso() {
  if (percursoIniciado || percursoIniciando || janelaLeitura.open || janelaRetorno.open) return;
  percursoIniciado = true; percursoIniciando = true;
  obterElemento('percurso').hidden = false;
  botaoIniciarMapa.hidden = true;
  obterElemento('botaoVoltarAbertura').hidden = false;
  desenhoTabuleiro.removeAttribute('aria-hidden');
  obterElemento('abertura').inert = true;
  aplicacao.classList.add('iniciandoPercurso');
  // inicia a transição visual no próximo quadro de desenho
  requestAnimationFrame(() => {
    aplicacao.classList.add('percorrendoHistoria');
    atualizarAcontecimento();
    moverParaCasa(indiceAtual);
  });
  clearTimeout(temporizadorInicio);
  temporizadorInicio = setTimeout(() => {
    obterElemento('abertura').hidden = true;
    percursoIniciando = false;
    obterElemento('tituloAtual').focus({ preventScroll: true });
  }, movimentoReduzido.matches ? 0 : 1450);
}

// retorna à apresentação e reinicia o percurso na primeira casa
function mostrarAbertura() {
  clearTimeout(temporizadorInicio);
  cancelAnimationFrame(identificadorAnimacao);
  percursoIniciado = false; percursoIniciando = false; indiceAtual = 0;
  obterElemento('abertura').hidden = false; obterElemento('abertura').inert = false;
  obterElemento('percurso').hidden = true;
  botaoIniciarMapa.hidden = false;
  obterElemento('botaoVoltarAbertura').hidden = true;
  desenhoTabuleiro.setAttribute('aria-hidden', 'true');
  aplicacao.classList.remove('percorrendoHistoria', 'iniciandoPercurso');
  atualizarAcontecimento(); posicionarImediatamente(0);
  obterElemento('botaoIniciarPercurso').focus({ preventScroll: true });
}

// pede confirmação antes de retornar quando já houve avanço no percurso
function solicitarRetorno() {
  if (!percursoIniciado || janelaLeitura.open || janelaRetorno.open) return;
  if (indiceAtual === 0) { mostrarAbertura(); return; }
  focoRetorno = document.activeElement;
  cancelAnimationFrame(identificadorAnimacao);
  personagem.classList.remove('caminhando');
  obterElemento('descricaoRetorno').textContent = `Você está na casa ${indiceAtual + 1} de ${acontecimentos.length}. Ao voltar à página inicial, o percurso recomeça na primeira casa.`;
  janelaRetorno.returnValue = 'continuar';
  janelaRetorno.showModal();
  obterElemento('botaoContinuarPercurso').focus({ preventScroll: true });
}

// alterna as cores os ícones do botão e a preferência salva no navegador
function aplicarTema(tema, salvarPreferencia = false) {
  const temaEscuro = tema === 'escuro';
  document.documentElement.dataset.tema = temaEscuro ? 'escuro' : 'claro';
  obterElemento('botaoAlternarTema').setAttribute('aria-pressed', String(temaEscuro));
  obterElemento('botaoAlternarTema').setAttribute('aria-label', `Ativar tema ${temaEscuro ? 'claro' : 'escuro'}`);
  obterElemento('rotuloTema').textContent = temaEscuro ? 'Tema claro' : 'Tema escuro';
  obterElemento('iconeLuaTema').toggleAttribute('hidden', temaEscuro);
  obterElemento('iconeSolTema').toggleAttribute('hidden', !temaEscuro);
  document.querySelector('meta[name="theme-color"]').content = temaEscuro ? '#101411' : '#fafbf9';
  if (salvarPreferencia) {
    try { localStorage.setItem('temaPassosDoImperio', temaEscuro ? 'escuro' : 'claro'); }
    // mantém o tema aplicado quando o navegador não permite salvar a preferência
    catch {}
  }
}

// limita a navegação às casas existentes e sincroniza a leitura com o personagem
function selecionarCasa(indice, imediato = false) {
  if (!percursoIniciado || janelaLeitura.open || janelaRetorno.open) return;
  const destino = Math.max(0, Math.min(acontecimentos.length - 1, indice));
  if (destino === indiceAtual && !imediato) return;
  indiceAtual = destino;
  atualizarAcontecimento(true);
  moverParaCasa(indiceAtual, imediato);
}

// monta a lista de referências com títulos instituições e links preservados
function montarListaFontes(referencias, completa = false) {
  return `<ol class="listaFontes">${referencias.map((identificador, indice) => {
    const fonte = fontesHistoricas[identificador];
    return `<li id="fonte${escaparTexto(identificador.charAt(0).toUpperCase() + identificador.slice(1))}"><span class="numeroFonte">${String(indice + 1).padStart(2, '0')}</span><div>${completa ? `<span class="tipoFonte">${escaparTexto(fonte.tipo.toUpperCase())}</span>` : ''}<a href="${escaparTexto(fonte.endereco)}" target="_blank" rel="noopener noreferrer">${escaparTexto(fonte.titulo)} <span aria-hidden="true">↗</span></a><span class="descricaoFonte">${escaparTexto(fonte.instituicao)}</span></div></li>`;
  }).join('')}</ol>`;
}

// abre a leitura no início do conteúdo e guarda o foco para o fechamento
function abrirJanelaLeitura(conteudo) {
  ultimoFoco = document.activeElement;
  obterElemento('conteudoLeitura').innerHTML = conteudo;
  obterElemento('rolagemLeitura').scrollTop = 0;
  janelaLeitura.showModal();
  obterElemento('botaoFecharLeitura').focus({ preventScroll: true });
}

// reúne a leitura e suas citações ou apresenta o contexto da casa selecionada
function abrirArtigo() {
  const evento = acontecimentos[indiceAtual];
  const artigo = artigosHistoricos[evento.artigo];
  const referencias = [...new Set([...(evento.referencias || []), ...(artigo?.secoes.flatMap((secao) => secao.paragrafos.flatMap((paragrafo) => paragrafo.referencias)) || [])])];
  // numera os links de referência usados em cada parágrafo da leitura
  const montarCitacoes = (identificadores) => identificadores.map((identificador) => `<a class="citacaoParagrafo" href="${escaparTexto(fontesHistoricas[identificador].endereco)}" target="_blank" rel="noopener noreferrer" aria-label="Fonte ${referencias.indexOf(identificador) + 1}: ${escaparTexto(fontesHistoricas[identificador].titulo)}">[${referencias.indexOf(identificador) + 1}]</a>`).join('');
  const corpoLeitura = artigo
    ? artigo.secoes.map((secao) => `<section class="secaoLeitura"><h3>${escaparTexto(secao.titulo)}</h3>${secao.paragrafos.map((paragrafo) => `<p>${escaparTexto(paragrafo.texto)} ${montarCitacoes(paragrafo.referencias)}</p>`).join('')}</section>`).join('')
    : `<section class="secaoLeitura"><h3>No percurso do Império</h3><p>${escaparTexto(evento.resumo)} ${montarCitacoes(evento.referencias)}</p><p>Este ponto integra o período ${escaparTexto(periodosHistoricos[obterPeriodo(evento)].rotulo)}, de ${escaparTexto(periodosHistoricos[obterPeriodo(evento)].anos)}. As referências abaixo permitem consultar os documentos e a análise histórica que sustentam o texto.</p></section>`;
  abrirJanelaLeitura(`<p class="sobretituloLeitura">${escaparTexto(artigo?.data || evento.data || evento.ano)} · ${escaparTexto(artigo?.local || 'BRASIL IMPÉRIO')}</p><div class="iconeLeitura">${montarIcone(obterIconeAcontecimento(evento, artigo?.icone), 36)}</div><h2 id="tituloLeitura">${escaparTexto(artigo?.titulo || evento.titulo)}</h2><p class="introducaoLeitura">${escaparTexto(artigo?.introducao || evento.resumo)}</p>${corpoLeitura}${artigo?.observacao ? `<p class="observacaoHistorica">${escaparTexto(artigo.observacao)}</p>` : ''}<section class="fontesArtigo"><h3 class="tituloListaFontes">Fontes para esta leitura</h3>${montarListaFontes(referencias)}</section><button class="retornoLeitura" id="botaoVoltarTabuleiro">Voltar ao percurso <span aria-hidden="true">↗</span></button>`);
  obterElemento('botaoVoltarTabuleiro').addEventListener('click', fecharJanelaLeitura);
}

// apresenta a metodologia da pesquisa e a bibliografia completa
function abrirFontes() {
  const referencias = Object.keys(fontesHistoricas);
  abrirJanelaLeitura(`<p class="sobretituloLeitura">PESQUISA HISTÓRICA · 1822 — 1889</p><h2 id="tituloLeitura">A história e<br>suas fontes.</h2><p class="introducaoLeitura">Documentos, acervos e estudos para compreender um país em construção.</p><div class="numerosPesquisa"><span><strong>${acontecimentos.length}</strong>casas no percurso</span><span><strong>${Object.keys(artigosHistoricos).length}</strong>leituras ampliadas</span><span><strong>${referencias.length}</strong>referências</span></div><section class="secaoLeitura"><h3>Como ler este percurso</h3><p>Os textos são sínteses autorais de documentos legais, pesquisas institucionais, acervos e análises de historiadores. Cada casa possui referências; as leituras ampliadas vinculam fontes aos parágrafos. A seleção apresenta acontecimentos e processos centrais, sem pretender esgotar os 67 anos do Império.</p><p>As casas têm tamanhos iguais para facilitar a navegação, mas não representam intervalos de tempo iguais. A barra superior acompanha os anos. Quando um processo dura vários anos ou décadas, o texto indica esse recorte.</p></section><section class="secaoLeitura"><h3>Datas e interpretações</h3><p>A Independência continuou a ser disputada depois de setembro de 1822. A maioridade de D. Pedro II ocorreu em 1840; sua coroação, em 1841. A Guerra do Paraguai começou em 1864, e a Tríplice Aliança foi formada em 1865. As leis de 1871 e 1885 estabeleceram liberdades condicionadas; a abolição geral é de 1888.</p><p>As revoltas tinham composições e objetivos diferentes. O percurso apresenta conflitos e permanências, além de atos de governo. Números de mortos e explicações monocausais são evitados quando as fontes e a historiografia apresentam divergências.</p></section><p class="introducaoBibliografia">Referências reunidas em 7 de outubro de 2026. Alguns portais de acervos podem exigir verificação de acesso. Documentos primários devem ser lidos no contexto de sua época.</p><section class="fontesArtigo"><h3 class="tituloListaFontes">Bibliografia e documentação</h3>${montarListaFontes(referencias, true)}</section><button class="retornoLeitura" id="botaoVoltarTabuleiro">Voltar à experiência <span aria-hidden="true">↗</span></button>`);
  obterElemento('botaoVoltarTabuleiro').addEventListener('click', fecharJanelaLeitura);
}

// fecha a leitura para continuar a navegação no tabuleiro
function fecharJanelaLeitura() { janelaLeitura.close(); }
// devolve o foco ao controle que abriu a leitura
janelaLeitura.addEventListener('close', () => ultimoFoco?.focus({ preventScroll: true }));
// fecha a leitura quando o clique acontece fora da janela
janelaLeitura.addEventListener('click', (evento) => {
  const limites = janelaLeitura.getBoundingClientRect();
  if (evento.clientX < limites.left || evento.clientX > limites.right || evento.clientY < limites.top || evento.clientY > limites.bottom) fecharJanelaLeitura();
});

// conecta os botões da abertura o mapa o tema e os controles de retorno
obterElemento('botaoIniciarPercurso').addEventListener('click', iniciarPercurso);
botaoIniciarMapa.addEventListener('click', iniciarPercurso);
obterElemento('botaoPaginaInicial').addEventListener('click', solicitarRetorno);
obterElemento('botaoVoltarAbertura').addEventListener('click', solicitarRetorno);
obterElemento('botaoAlternarTema').addEventListener('click', () => aplicarTema(document.documentElement.dataset.tema === 'escuro' ? 'claro' : 'escuro', true));
obterElemento('botaoConfirmarRetorno').addEventListener('click', () => janelaRetorno.close('voltarAbertura'));
obterElemento('botaoContinuarPercurso').addEventListener('click', () => janelaRetorno.close('continuar'));
obterElemento('botaoFecharRetorno').addEventListener('click', () => janelaRetorno.close('continuar'));
// confirma o retorno ou retoma o movimento depois de cancelar a confirmação
janelaRetorno.addEventListener('close', () => {
  if (janelaRetorno.returnValue === 'voltarAbertura') mostrarAbertura();
  else {
    focoRetorno?.focus({ preventScroll: true });
    if (percursoIniciado) moverParaCasa(indiceAtual);
  }
});
// permite cancelar a confirmação clicando fora da janela
janelaRetorno.addEventListener('click', (evento) => {
  if (evento.target !== janelaRetorno) return;
  const limites = janelaRetorno.getBoundingClientRect();
  if (evento.clientX < limites.left || evento.clientX > limites.right || evento.clientY < limites.top || evento.clientY > limites.bottom) janelaRetorno.close('continuar');
});
// conecta os controles de casas leituras fontes e períodos históricos
obterElemento('botaoCasaAnterior').addEventListener('click', () => selecionarCasa(indiceAtual - 1));
obterElemento('botaoProximaCasa').addEventListener('click', () => selecionarCasa(indiceAtual + 1));
obterElemento('botaoReiniciarPercurso').addEventListener('click', () => selecionarCasa(0));
obterElemento('botaoLerMais').addEventListener('click', abrirArtigo);
obterElemento('botaoFontes').addEventListener('click', abrirFontes);
obterElemento('botaoFecharLeitura').addEventListener('click', fecharJanelaLeitura);
document.querySelectorAll('[data-periodo]').forEach((botao) => botao.addEventListener('click', () => selecionarCasa(acontecimentos.findIndex((evento) => obterPeriodo(evento) === botao.dataset.periodo))));
// escolhe a casa com o ano mais próximo do valor da barra
seletorAno.addEventListener('input', () => {
  const ano = Number(seletorAno.value);
  const indiceMaisProximo = acontecimentos.reduce((melhorIndice, evento, indice) => Math.abs(evento.ano - ano) < Math.abs(acontecimentos[melhorIndice].ano - ano) ? indice : melhorIndice, 0);
  selecionarCasa(indiceMaisProximo);
});
// permite navegar pelas setas sem interferir nos campos ou nas janelas abertas
document.addEventListener('keydown', (evento) => {
  if (janelaLeitura.open || janelaRetorno.open || !percursoIniciado || evento.altKey || evento.ctrlKey || evento.metaKey || /INPUT|TEXTAREA|SELECT/.test(evento.target.tagName)) return;
  if (['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(evento.key)) {
    evento.preventDefault();
    if (evento.key === 'Home') selecionarCasa(0);
    else if (evento.key === 'End') selecionarCasa(acontecimentos.length - 1);
    else selecionarCasa(indiceAtual + (evento.key === 'ArrowRight' || evento.key === 'ArrowDown' ? 1 : -1));
  } else if (evento.key === 'Enter' && !evento.target.closest('button,a,[role="button"]')) {
    evento.preventDefault(); abrirArtigo();
  }
});
// registra o início do toque para reconhecer deslizes horizontais
let inicioToque;
areaTabuleiro.addEventListener('pointerdown', (evento) => { if (evento.pointerType === 'touch') inicioToque = { x: evento.clientX, y: evento.clientY }; });
// avança ou volta uma casa quando o gesto horizontal supera a distância mínima
areaTabuleiro.addEventListener('pointerup', (evento) => {
  if (!inicioToque || evento.pointerType !== 'touch' || !percursoIniciado) return;
  const deslocamentoX = evento.clientX - inicioToque.x;
  const deslocamentoY = evento.clientY - inicioToque.y;
  inicioToque = null;
  if (Math.abs(deslocamentoX) > 50 && Math.abs(deslocamentoX) > Math.abs(deslocamentoY) * 1.2) {
    ultimoDeslize = performance.now();
    selecionarCasa(indiceAtual + (deslocamentoX < 0 ? 1 : -1));
  }
});
areaTabuleiro.addEventListener('pointercancel', () => { inicioToque = null; });
// recalcula a leitura e a câmera depois de uma mudança no tamanho da tela
window.addEventListener('resize', () => { clearTimeout(temporizadorTamanho); temporizadorTamanho = setTimeout(() => { ajustarEspacoLeitura(); posicionarImediatamente(indiceAtual); }, 100); });
movimentoReduzido.addEventListener('change', () => posicionarImediatamente(indiceAtual));

// aplica a preferência de tema e monta o tabuleiro ao carregar a página
aplicarTema(document.documentElement.dataset.tema);
try { montarTabuleiro(); }
// apresenta uma mensagem acessível caso o percurso não possa ser carregado
catch (erro) {
  obterElemento('erroCarregamento').hidden = false;
  obterElemento('erroCarregamento').textContent = 'Não foi possível carregar o percurso. Atualize a página para tentar novamente.';
  console.error(erro);
}
