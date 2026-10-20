// reúne os pictogramas vetoriais com cores adaptadas aos dois temas
const desenhosIcones = {
  // representa mudanças de regime e a independência com uma bandeira
  bandeira: `
    <path d="M7 28V4"/>
    <path d="M7 5c6-4 11 4 18 0v13c-7 4-12-4-18 0Z" fill="var(--verdeIcone)"/>
    <path d="M7 5c3-2 6-1 9 0v13c-3-1-6-2-9 0Z" fill="var(--verdeIconeClaro)" stroke="none"/>
    <path d="M7 5c6-4 11 4 18 0v13c-7 4-12-4-18 0ZM4 28h7"/>
    <circle cx="7" cy="3.5" r="1.5" fill="var(--douradoIcone)"/>
  `,
  // representa a monarquia e os acontecimentos ligados à coroa
  coroa: `
    <path d="m4 10 7 5 5-10 5 10 7-5-3 14H7Z" fill="var(--douradoIcone)"/>
    <path d="M8 21h16v6H8Z" fill="var(--verdeIcone)"/>
    <circle cx="4" cy="8" r="2" fill="var(--douradoIconeClaro)"/>
    <circle cx="16" cy="3.5" r="2" fill="var(--douradoIconeClaro)"/>
    <circle cx="28" cy="8" r="2" fill="var(--douradoIconeClaro)"/>
    <circle cx="16" cy="24" r="1.5" fill="var(--terracotaIcone)" stroke="none"/>
  `,
  // representa leis e documentos com uma folha escrita
  documento: `
    <path d="M21 3H7a2 2 0 0 0-2 2v23a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V9Z" fill="var(--papelIcone)"/>
    <path d="M21 3v6h6" fill="var(--verdeIconeClaro)"/>
    <path d="M10 12h11m-11 4h11m-11 4h6"/>
    <path d="m20 26-1 4 3-1 3 1-1-4" fill="var(--terracotaIconeClara)"/>
    <circle cx="22" cy="24" r="3" fill="var(--terracotaIcone)"/>
  `,
  // representa revoltas e mobilizações com mãos erguidas
  revolta: `
    <path d="M4 27V17l-2-2a1.5 1.5 0 0 1 2-2l1 1V11a1.4 1.4 0 0 1 2.8 0 1.4 1.4 0 0 1 2.8 0v8l-2 3v5" fill="var(--peleIconeEscura)"/>
    <path d="M3 24h7v6H3Z" fill="var(--azulIcone)"/>
    <path d="M13 23v-5l-4-4a2.2 2.2 0 0 1 3-3l1 1V7a2 2 0 0 1 4 0 2 2 0 0 1 4 0 2 2 0 0 1 4 0v7c0 4-2 6-4 8v1Z" fill="var(--peleIcone)"/>
    <path d="M17 8v5m4-5v5m-8-1 3 3a3 3 0 0 1 0 4"/>
    <path d="M12 23h11v7H12Z" fill="var(--verdeIcone)"/>
    <path d="m5 6-2-2m26 8 2-1M27 3l-1 2" stroke="var(--terracotaIcone)"/>
  `,
  // representa conflitos militares com espadas cruzadas
  espadas: `
    <path d="m5 3 5 2 15 18-3 3L5 8Z" fill="var(--azulIconeClaro)"/>
    <path d="m27 3-5 2L7 23l3 3L27 8Z" fill="var(--azulIcone)"/>
    <path d="m3 23 6 6m14 0 6-6" stroke="var(--douradoIcone)" stroke-width="3"/>
    <path d="m4 28-2 2m26-2 2 2" stroke-width="2.4"/>
  `,
  // representa disputas políticas e organização dos poderes
  balanca: `
    <path d="M16 5v21m-8 2h16"/>
    <path d="M6 9h20" stroke="var(--douradoIcone)" stroke-width="2.4"/>
    <circle cx="16" cy="5" r="2" fill="var(--douradoIcone)"/>
    <path d="m7 10-4 8h8Zm18 0-4 8h8Z" fill="var(--verdeIconeClaro)"/>
    <path d="M3 18q4 6 8 0m10 0q4 6 8 0" fill="var(--verdeIcone)"/>
    <path d="M12 25h8l2 3H10Z" fill="var(--douradoIcone)"/>
  `,
  // representa a população e a participação de diferentes grupos
  pessoas: `
    <circle cx="7" cy="10" r="3.5" fill="var(--peleIconeEscura)"/>
    <circle cx="25" cy="10" r="3.5" fill="var(--peleIconeClara)"/>
    <path d="M2 27v-7a5 5 0 0 1 10 0v7Zm18 0v-7a5 5 0 0 1 10 0v7Z" fill="var(--azulIcone)"/>
    <circle cx="16" cy="7" r="4.5" fill="var(--peleIcone)"/>
    <path d="M9 28v-7a7 7 0 0 1 14 0v7Z" fill="var(--verdeIcone)"/>
    <path d="M13 24v4m6-4v4"/>
  `,
  // representa o desenvolvimento das ferrovias
  trem: `
    <path d="M12 5V2h8v3" fill="var(--douradoIcone)"/>
    <rect x="7" y="5" width="18" height="20" rx="4" fill="var(--verdeIcone)"/>
    <path d="M10 9h12v7H10Z" fill="var(--azulIconeClaro)"/>
    <path d="M16 9v7M10 25l-4 5m16-5 4 5M8 28h16"/>
    <circle cx="11" cy="21" r="2" fill="var(--douradoIconeClaro)"/>
    <circle cx="21" cy="21" r="2" fill="var(--douradoIconeClaro)"/>
  `,
  // representa temas ligados ao ambiente e à terra
  folha: `
    <path d="M16 27V15"/>
    <path d="M16 18C5 19 2 11 4 6c8-1 14 4 12 12Z" fill="var(--verdeIconeClaro)"/>
    <path d="M16 15C15 5 24 2 28 4c1 8-4 13-12 11Z" fill="var(--verdeIcone)"/>
    <path d="m8 10 8 8m0-3 8-7M11 28h10"/>
  `,
  // representa a cafeicultura com folhas e frutos de café
  cafe: `
    <path d="M16 29V8"/>
    <path d="M15 13C5 14 3 8 4 5c7-1 12 2 11 8Zm2-5c0-6 6-8 11-6 0 6-6 10-11 6Z" fill="var(--verdeIcone)"/>
    <path d="M8 15c6-2 11 5 7 11-4 5-11 1-11-4 0-3 1-6 4-7Z" fill="var(--terracotaIcone)"/>
    <path d="M23 13c5 1 7 7 3 12-4 3-9-1-9-6 0-4 3-7 6-6Z" fill="var(--terracotaIconeClara)"/>
    <path d="M10 16c4 4-2 6 1 10m12-12c-4 4 2 6-1 10"/>
  `,
  // representa o território e as disputas pelo acesso à terra
  territorio: `
    <path d="m3 11 8-3 10 3 8-3v20l-8 3-10-3-8 3Z" fill="var(--papelIcone)"/>
    <path d="m3 20 8-4 10 5 8-4v11l-8 3-10-3-8 3Z" fill="var(--verdeIconeClaro)"/>
    <path d="M11 16v12m10-7v10M16 16V6"/>
    <path d="M16 10C9 11 7 6 8 3c6-1 9 2 8 7Zm0-4c0-4 4-5 8-4-1 4-4 6-8 4Z" fill="var(--verdeIcone)"/>
  `,
  // representa a escravidão e os processos de emancipação
  corrente: `
    <path d="m12 7 2-2a6 6 0 0 1 8 9l-2 2" fill="none" stroke="var(--azulIcone)" stroke-width="4"/>
    <path d="m12 16-2 2a6 6 0 0 0 8 9l2-2" fill="none" stroke="var(--terracotaIcone)" stroke-width="4"/>
    <path d="m12 7 2-2a6 6 0 0 1 8 9l-2 2M12 16l-2 2a6 6 0 0 0 8 9l2-2"/>
    <path d="m4 10 4 2M6 4l3 4m14 14 4 2m-4-7h5" stroke="var(--douradoIcone)" stroke-width="1.8"/>
  `,
  // representa educação conhecimento e circulação de ideias
  livro: `
    <path d="M16 7C12 3 6 3 3 5v23c5-2 9-1 13 1 4-2 8-3 13-1V5c-4-2-9-2-13 2Z" fill="var(--papelIcone)"/>
    <path d="M3 5v23c5-2 9-1 13 1V7C12 3 6 3 3 5Z" fill="var(--verdeIconeClaro)"/>
    <path d="M16 7v22M7 11l5 1m-5 5 5 1m8-6 5-1m-5 7 5-1"/>
    <path d="M20 5v8l2-2 2 2V4" fill="var(--terracotaIcone)"/>
  `,
  // representa a defesa da liberdade nos tribunais
  justica: `
    <rect x="4" y="4" width="21" height="25" rx="2" fill="var(--verdeIcone)"/>
    <path d="M8 4v25m2-3h17"/>
    <path d="M17 9v12m-4 2h8M12 12h10" stroke="var(--douradoIconeClaro)"/>
    <path d="m12 13-3 5h6Zm10 0-3 5h6Z" fill="var(--douradoIcone)"/>
  `,
  // representa as relações entre igreja e estado
  igreja: `
    <path d="M16 2v7m-3-4h6"/>
    <path d="M4 19h24v11H4Z" fill="var(--douradoIconeClaro)"/>
    <path d="M9 15h14v15H9Z" fill="var(--papelIcone)"/>
    <path d="m6 16 10-9 10 9Z" fill="var(--verdeIcone)"/>
    <path d="M13 30v-7a3 3 0 0 1 6 0v7" fill="var(--terracotaIcone)"/>
    <circle cx="16" cy="17" r="2" fill="var(--douradoIcone)"/>
  `,
  // representa a intensidade do calor
  sol: `
    <circle cx="16" cy="16" r="7" fill="var(--douradoIcone)"/>
    <circle cx="14" cy="14" r="3" fill="var(--douradoIconeClaro)" stroke="none"/>
    <path d="M16 2v3m0 22v3M2 16h3m22 0h3M6 6l2 2m16 16 2 2M6 26l2-2M24 8l2-2" stroke="var(--terracotaIcone)" stroke-width="1.8"/>
  `,
  // representa a seca com o sol sobre o solo rachado
  seca: `
    <circle cx="22" cy="8" r="5" fill="var(--douradoIcone)"/>
    <path d="M22 1v1m7 6h2M15 3l-2-1M29 2l-2 2" stroke="var(--terracotaIcone)"/>
    <path d="M2 21q8-5 15 0t13 0v9H2Z" fill="var(--terracotaIconeClara)"/>
    <path d="m16 20-3 4 4 3-2 3m-2-6-6 1m10 2 6-2M7 20v-8m0 3-3-3m3 5 4-3"/>
  `,
  // representa eleições e regras de participação política
  voto: `
    <path d="M4 17h24v13H4Z" fill="var(--verdeIconeClaro)"/>
    <path d="m4 17 4-6h16l4 6Z" fill="var(--verdeIcone)"/>
    <path d="M11 17h10"/>
    <path d="m11 2 12 4-4 12-12-4Z" fill="var(--papelIcone)"/>
    <path d="m12 9 2 3 5-4" stroke="var(--verdeIcone)" stroke-width="2"/>
  `,
  // representa a imprensa e a circulação de debates públicos
  jornal: `
    <path d="M4 4h23v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" fill="var(--papelIcone)"/>
    <path d="M27 11h3v17a2 2 0 0 1-3 2" fill="var(--verdeIconeClaro)"/>
    <path d="M8 8h15" stroke="var(--terracotaIcone)" stroke-width="2.4"/>
    <path d="M8 13h7v8H8Z" fill="var(--azulIconeClaro)"/>
    <path d="M19 13h4m-4 4h4m-4 4h4M8 25h15"/>
  `,
  // representa a lei do ventre livre com uma pessoa e uma criança
  familia: `
    <circle cx="13" cy="8" r="5" fill="var(--peleIconeEscura)"/>
    <path d="M4 29v-9a9 9 0 0 1 18 0v9Z" fill="var(--verdeIcone)"/>
    <path d="M20 16c8 0 11 8 6 13-6 1-12-2-13-7 0-3 3-6 7-6Z" fill="var(--douradoIconeClaro)"/>
    <circle cx="23" cy="17" r="3.5" fill="var(--peleIconeClara)"/>
    <path d="M16 23q4-3 10 1"/>
  `,
  // representa a lei dos sexagenários com uma pessoa idosa
  idoso: `
    <circle cx="13" cy="9" r="5" fill="var(--peleIcone)"/>
    <path d="M8 9V7a5 5 0 0 1 10 0v2l-3-4-4 4Z" fill="var(--azulIconeClaro)"/>
    <path d="M6 30v-9a7 7 0 0 1 14 0v9Z" fill="var(--verdeIcone)"/>
    <path d="M10 23v7m6-7v7M20 22h6m-3 8V18a3 3 0 0 1 6 0"/>
    <path d="M11 11h1m3 0h1" stroke-width="1.8"/>
  `,
  // representa as travessias marítimas e o tráfico transatlântico
  navio: `
    <path d="M15 20V3m0 1 10 13H15Z" fill="var(--papelIcone)"/>
    <path d="M13 7v10H5Z" fill="var(--verdeIconeClaro)"/>
    <path d="M3 21h26l-5 7H8Z" fill="var(--terracotaIcone)"/>
    <path d="M2 30q4-3 8 0t8 0 8 0" stroke="var(--azulIcone)"/>
    <path d="M6 24h18"/>
  `,
};

// aplica o contorno comum ao desenho escolhido e usa um documento como padrão
export function desenharIcone(nome = 'documento') {
  return `<g fill="none" stroke="var(--contornoIcone, #375648)" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round">${desenhosIcones[nome] || desenhosIcones.documento}</g>`;
}

// envolve o pictograma em um elemento vetorial no tamanho solicitado
export function montarIcone(nome = 'documento', tamanho = 24) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${tamanho}" height="${tamanho}" viewBox="0 0 32 32" aria-hidden="true">${desenharIcone(nome)}</svg>`;
}


// escolhe um pictograma específico a partir do artigo e da categoria do acontecimento
export function obterIconeAcontecimento(evento, iconePadrao = 'documento') {
  // relaciona as leituras principais aos seus pictogramas específicos
  const iconesPorArtigo = {
    equador: 'revolta', cabanagem: 'revolta', males: 'revolta',
    farroupilha: 'revolta', sabinada: 'revolta', balaiada: 'revolta', praieira: 'revolta',
    eusebio: 'navio', terras: 'territorio', ventre: 'familia', sexagenarios: 'idoso', seca: 'seca',
  };
  if (iconesPorArtigo[evento.artigo]) return iconesPorArtigo[evento.artigo];
  if (evento.categoria === 'Revoltas e resistências') return 'revolta';
  if (evento.titulo?.toLowerCase().includes('café')) return 'cafe';
  if (evento.titulo?.toLowerCase().includes('indígenas')) return 'territorio';
  if (evento.referencias?.includes('gama') && evento.icone === 'livro') return 'justica';
  if (evento.categoria === 'Abolicionismo' && evento.icone === 'pessoas') return 'revolta';
  return evento.icone || iconePadrao;
}
