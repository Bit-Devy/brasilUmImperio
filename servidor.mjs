// importa as funções nativas com nomes locais em português
import { createServer as criarServidor } from 'node:http';
import { readFile as lerArquivo, stat as obterInformacoesArquivo } from 'node:fs/promises';
import { dirname as obterPasta, extname as obterExtensao, resolve as resolverCaminho, sep as separadorCaminho } from 'node:path';
import { fileURLToPath as converterEnderecoParaCaminho } from 'node:url';

// usa a pasta deste arquivo como raiz do servidor local
const pastaProjeto = obterPasta(converterEnderecoParaCaminho(import.meta.url));

// aceita a opção em português e mantém a opção usada na versão anterior
const posicaoOpcaoPorta = process.argv.findIndex((argumento) => argumento === '--porta' || argumento === '--port');
const porta = Number(posicaoOpcaoPorta >= 0 ? process.argv[posicaoOpcaoPorta + 1] : process.env.PORT || 5173);

// informa ao navegador o formato correto de cada arquivo estático
const tiposArquivos = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
};

// entrega os arquivos do projeto sem banco de dados ou dependências externas
const servidor = criarServidor(async (requisicao, resposta) => {
  try {
    const caminhoSolicitado = decodeURIComponent(new URL(requisicao.url, 'http://localhost').pathname);
    const arquivoSolicitado = resolverCaminho(pastaProjeto, '.' + (caminhoSolicitado === '/' ? '/index.html' : caminhoSolicitado));

    // impede o acesso fora da pasta e aos arquivos internos do desenvolvimento
    if (!arquivoSolicitado.startsWith(pastaProjeto + separadorCaminho) || /(?:^|\/)(?:\.|servidor\.mjs|gerarSite\.mjs|package\.json|package-lock\.json|work(?:\/|$))/.test(caminhoSolicitado)) {
      resposta.writeHead(403);
      resposta.end('Acesso indisponível.');
      return;
    }

    // permite apenas arquivos e desativa o cache durante a edição local
    if (!(await obterInformacoesArquivo(arquivoSolicitado)).isFile()) throw new Error('O caminho não é um arquivo');
    resposta.writeHead(200, {
      'Content-Type': (tiposArquivos[obterExtensao(arquivoSolicitado)] || 'application/octet-stream') + '; charset=utf-8',
      'Cache-Control': 'no-cache',
    });
    resposta.end(await lerArquivo(arquivoSolicitado));
  // apresenta uma resposta simples quando o arquivo solicitado não existe
  } catch {
    resposta.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    resposta.end('Página não encontrada.');
  }
});

// inicia o servidor na porta escolhida e mostra o endereço do site
servidor.listen(porta, '127.0.0.1', () => console.log(`Brasil Império disponível em http://localhost:${porta}`));

// informa erros de inicialização e sinaliza a falha ao terminal
servidor.on('error', (erro) => {
  console.error(erro.message);
  process.exitCode = 1;
});
