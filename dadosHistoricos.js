// reúne o conteúdo autoral e as referências de cada casa e parágrafo
// os anos de processos longos indicam recortes cronológicos

// registra o título a instituição o endereço e o tipo de cada fonte
const criarFonte = (titulo, instituicao, endereco, tipo = 'Pesquisa institucional') => ({ titulo, instituicao, endereco, tipo });

// mantém a bibliografia usada no percurso e nas leituras ampliadas
export const fontesHistoricas = {
  // fonte sobre 1822 — independência do brasil: o reconhecimento diplomático
  reconhecimento: criarFonte(
    "1822 — Independência do Brasil: o reconhecimento diplomático",
    "Biblioteca Nacional",
    "https://bndigital.bn.gov.br/dossies/gramaticas-e-dicionarios-do-portugues/linha-do-tempo/sobre-as-efemerides/1822-independencia-do-brasil/"
  ),
  // fonte sobre independência, independências
  independencias: criarFonte(
    "Independência, independências",
    "Biblioteca Nacional",
    "https://bndigital.bn.gov.br/dossies/guerra-das-penas-os-panfletos-politicos-da-independencia-1820-1823/o-triunfo-do-imperio-brasilico/independencia-independencias/"
  ),
  // fonte sobre guerras civis no brasil e contra o brasil
  guerras: criarFonte(
    "Guerras civis no Brasil e contra o Brasil",
    "Biblioteca Nacional",
    "https://bndigital.bn.gov.br/dossies/guerra-das-penas-os-panfletos-politicos-da-independencia-1820-1823/o-triunfo-do-imperio-brasilico/guerras-civis-no-brasil-e-contra-o-brasil/"
  ),
  // fonte sobre instalação do senado no primeiro reinado
  primeiro: criarFonte(
    "Instalação do Senado no Primeiro Reinado",
    "Senado Federal",
    "https://www.senado.leg.br/senado/hotsites/histsf/Primeiro-Reinado.asp"
  ),
  // fonte sobre assembleias constituintes: 1823 e 1824
  constituinte: criarFonte(
    "Assembleias constituintes: 1823 e 1824",
    "Senado Federal",
    "https://www25.senado.leg.br/web/atividade/anais/constituintes",
    "Acervo documental"
  ),
  // fonte sobre constituição política do império do brasil, de 25 de março de 1824
  constituicao: criarFonte(
    "Constituição Política do Império do Brasil, de 25 de março de 1824",
    "Presidência da República",
    "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao24.htm",
    "Documento primário"
  ),
  // fonte sobre a confederação do equador: o movimento
  equador: criarFonte(
    "A Confederação do Equador: o movimento",
    "MultiRio / Prefeitura do Rio de Janeiro",
    "https://multi.rio/index.php/historia-do-brasil/brasil-monarquico/90-primeiro-reinado/8906-a-confedera%C3%A7%C3%A3o-do-equador-o-movimento"
  ),
  // fonte sobre o reconhecimento da independência do uruguai
  cisplatina: criarFonte(
    "O reconhecimento da independência do Uruguai",
    "Biblioteca Nacional",
    "https://bndigital.bn.gov.br/artigos/bicentenario-da-independencia-reconhecimento-do-imperio-do-brasil-a-independencia-do-uruguai-que-outrora-fora-a-provincia-da-cisplatina/"
  ),
  // fonte sobre lei de criação das escolas de primeiras letras
  escolas: criarFonte(
    "Lei de criação das escolas de primeiras letras",
    "Arquivo Nacional",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/documentos/lei-de-criacao-das-escolas-de-primeiras-letras/",
    "Documento comentado"
  ),
  // fonte sobre a morte de libero badaró e o agravamento da crise política
  badaro: criarFonte(
    "A morte de Libero Badaró e o agravamento da crise política",
    "MultiRio / Prefeitura do Rio de Janeiro",
    "https://multi.rio/index.php/historia-do-brasil/brasil-monarquico/90-primeiro-reinado/8925-a-morte-de-libero-badar%C3%B3-em-1830-e-o-agravamento-da-crise-pol%C3%ADtica"
  ),
  // fonte sobre partidos políticos no período imperial
  partidos: criarFonte(
    "Partidos políticos no período imperial",
    "Arquivo Nacional — MAPA",
    "https://mapa.an.gov.br/index.php/assuntos/15-dicionario/65-dicionario-da-administracao-publica-brasileira-do-periodo-imperial/297-partidos-politicos-no-periodo-imperial"
  ),
  // fonte sobre a guarda nacional
  guarda: criarFonte(
    "A Guarda Nacional",
    "MultiRio / Prefeitura do Rio de Janeiro",
    "https://multi.rio/index.php/historia-do-brasil/brasil-monarquico/91-per%C3%ADodo-regencial/8932-a-cria%C3%A7%C3%A3o-da-guarda-nacional"
  ),
  // fonte sobre lei de 7 de novembro de 1831
  lei1831: criarFonte(
    "Lei de 7 de novembro de 1831",
    "Presidência da República",
    "https://www.presidencia.gov.br/ccivil_03/leis/lim/lim-7-11-1831.htm",
    "Documento primário"
  ),
  // fonte sobre o código de processo criminal
  codigo: criarFonte(
    "O Código de Processo Criminal",
    "MultiRio / Prefeitura do Rio de Janeiro",
    "https://multi.rio/index.php/historia-do-brasil/brasil-monarquico/91-per%C3%ADodo-regencial/8933-a-regulamenta%C3%A7%C3%A3o-do-c%C3%B3digo-de-processo-criminal"
  ),
  // fonte sobre ato adicional de 1834
  ato: criarFonte(
    "Ato Adicional de 1834",
    "Arquivo Nacional — MAPA",
    "https://mapa.an.gov.br/index.php/assuntos/15-dicionario/65-dicionario-da-administracao-publica-brasileira-do-periodo-imperial/258-ato-adicional"
  ),
  // fonte sobre belém e a cabanagem, 1835–1840
  cabanagem: criarFonte(
    "Belém e a Cabanagem, 1835–1840",
    "Biblioteca Nacional",
    "https://bndigital.bn.gov.br/exposicoes/a-metropole-da-amazonia-400-anos-da-cidade-de-belem/introducao-a-metropole-da-amazonia/"
  ),
  // fonte sobre a revolta dos malês
  males: criarFonte(
    "A Revolta dos Malês",
    "MultiRio / Prefeitura do Rio de Janeiro",
    "https://multi.rio/index.php/historia-do-brasil/brasil-monarquico/8942-a-revolta-dos-mal%C3%AAs"
  ),
  // fonte sobre revolta dos farrapos: o movimento e a repressão
  farroupilha: criarFonte(
    "Revolta dos Farrapos: o movimento e a repressão",
    "MultiRio / Prefeitura do Rio de Janeiro",
    "https://multi.rio/index.php/historia-do-brasil/brasil-monarquico/91-per%C3%ADodo-regencial/9874-revolta-dos-farrapos"
  ),
  // fonte sobre a sabinada
  sabinada: criarFonte(
    "A Sabinada",
    "MultiRio / Prefeitura do Rio de Janeiro",
    "https://multi.rio/index.php/historia-do-brasil/brasil-monarquico/91-per%C3%ADodo-regencial/8946-revoltas-do-norte-a-sabinada"
  ),
  // fonte sobre a balaiada
  balaiada: criarFonte(
    "A Balaiada",
    "MultiRio / Prefeitura do Rio de Janeiro",
    "https://multi.rio/index.php/artigos/11758-a-balaiada"
  ),
  // fonte sobre o senado no segundo reinado
  segundo: criarFonte(
    "O Senado no Segundo Reinado",
    "Senado Federal",
    "https://www.senado.leg.br/senado/hotsites/histsf/O-Senado-no-2o-Reinado.asp"
  ),
  // fonte sobre almanaque de petrópolis, nº 2 — cronologia, pp. 48–50
  almanaque: criarFonte(
    "Almanaque de Petrópolis, nº 2 — Cronologia, pp. 48–50",
    "Museu Imperial / Ibram",
    "https://museuimperial.museus.gov.br/wp-content/uploads/2020/11/ALMANAQUE-2-2020.pdf",
    "Publicação de museu"
  ),
  // fonte sobre a revolta liberal de são paulo
  liberais: criarFonte(
    "A Revolta Liberal de São Paulo",
    "MultiRio / Prefeitura do Rio de Janeiro",
    "https://multi.rio/index.php/historia-do-brasil/brasil-monarquico/92-governo-pessoal-de-d-pedro-ii/8955-as-revoltas-liberais-de-s%C3%A3o-paulo-e-minas-gerais"
  ),
  // fonte sobre política indigenista: uma linha do tempo
  indigenas: criarFonte(
    "Política indigenista: uma linha do tempo",
    "Senado Federal",
    "https://www12.senado.leg.br/noticias/especiais/especial-cidadania/congresso-e-palco-de-debate-sobre-o-papel-dos-indios-na-sociedade"
  ),
  // fonte sobre revolta praieira: deflagração da insurreição
  praieira: criarFonte(
    "Revolta Praieira: deflagração da insurreição",
    "MultiRio / Prefeitura do Rio de Janeiro",
    "https://multi.rio/index.php/historia-do-brasil/brasil-monarquico/92-governo-pessoal-de-d-pedro-ii/8965-revolta-praieira-a-deflagra%C3%A7%C3%A3o-da-insurrei%C3%A7%C3%A3o"
  ),
  // fonte sobre legislação abolicionista no império
  abolicaoLeis: criarFonte(
    "Legislação abolicionista no Império",
    "Arquivo Nacional",
    "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/temas-oitocentistas/legislacao-abolicionista-no-imperio/"
  ),
  // fonte sobre lei de terras: debates e concentração fundiária
  terras: criarFonte(
    "Lei de Terras: debates e concentração fundiária",
    "Senado Federal — Arquivo S",
    "https://www12.senado.leg.br/noticias/especiais/arquivo-s/ha-170-anos-lei-de-terras-desprezou-camponeses-e-oficializou-apoio-do-brasil-aos-latifundios"
  ),
  // fonte sobre a expansão cafeeira para o oeste paulista
  cafe: criarFonte(
    "A expansão cafeeira para o Oeste Paulista",
    "MultiRio / Prefeitura do Rio de Janeiro",
    "https://multi.rio/index.php/historia-do-brasil/brasil-monarquico/92-governo-pessoal-de-d-pedro-ii/8975-cultura-cafeeira-o-decl%C3%ADnio-da-vale-do-para%C3%ADba"
  ),
  // fonte sobre a construção da primeira ferrovia brasileira
  ferrovia: criarFonte(
    "A construção da primeira ferrovia brasileira",
    "Biblioteca Nacional",
    "https://bndigital.bn.gov.br/artigos/memoria-construcao-da-primeira-ferrovia-brasileira-a-estrada-de-ferro-maua/"
  ),
  // fonte sobre transportes no brasil — síntese histórica
  transportes: criarFonte(
    "Transportes no Brasil — síntese histórica",
    "Ministério dos Transportes",
    "https://www.gov.br/transportes/pt-br/assuntos/transportes-no-brasil-sintese-historica"
  ),
  // fonte sobre memória do mundo: luiz gama no arquivo
  gama: criarFonte(
    "Memória do Mundo: Luiz Gama no Arquivo",
    "Arquivo Público do Estado de São Paulo",
    "https://revista.arquivoestado.sp.gov.br/secoes/novidades/memoria-do-mundo-luiz-gama-no-arquivo/",
    "Acervo documental comentado"
  ),
  // fonte sobre guerra do paraguai — contexto histórico
  paraguai: criarFonte(
    "Guerra do Paraguai — contexto histórico",
    "Biblioteca Nacional",
    "https://bndigital.bn.gov.br/dossies/guerra-do-paraguai/contexto-historico/"
  ),
  // fonte sobre guerra do paraguai
  guerraArquivoNacional: criarFonte(
    "Guerra do Paraguai",
    "Arquivo Nacional — Exposições Virtuais",
    "https://exposicoesvirtuais.an.gov.br/index.php/galerias/93-exposicoes/brasil/saiba-mais/298-guerra-do-paraguai.html"
  ),
  // fonte sobre campos salles: signatário do manifesto de 3 de dezembro de 1870
  manifesto: criarFonte(
    "Campos Salles: signatário do Manifesto de 3 de dezembro de 1870",
    "Senado Federal",
    "https://www25.senado.leg.br/pt_BR/web/senadores/senador/-/perfil/2093",
    "Registro biográfico"
  ),
  // fonte sobre lei nº 2.040, de 28 de setembro de 1871
  ventre: criarFonte(
    "Lei nº 2.040, de 28 de setembro de 1871",
    "Presidência da República",
    "https://www.planalto.gov.br/ccivil_03/leis/lim/lim2040.htm",
    "Documento primário"
  ),
  // fonte sobre reflexões sobre os 150 anos do censo de 1872
  censo: criarFonte(
    "Reflexões sobre os 150 anos do Censo de 1872",
    "Memória IBGE",
    "https://memoria.ibge.gov.br/publicacoes-e-eventos/eventos/21562-reflexoes-sobre-os-150-anos-do-censo-de-1872.html"
  ),
  // fonte sobre a imprensa e a questão religiosa — cadernos da comunicação, pp. 36–38
  religiosa: criarFonte(
    "A imprensa e a Questão Religiosa — Cadernos da Comunicação, pp. 36–38",
    "Prefeitura do Rio de Janeiro",
    "https://www.rio.rj.gov.br/dlstatic/10112/4204434/4101427/memoria19.pdf"
  ),
  // fonte sobre imagens da seca de 1877–1878
  seca: criarFonte(
    "Imagens da seca de 1877–1878",
    "Brasiliana Fotográfica / Biblioteca Nacional",
    "https://brasilianafotografica.bn.gov.br/?tag=seca",
    "Documentação fotográfica comentada"
  ),
  // fonte sobre o abolicionista josé do patrocínio
  patrocinio: criarFonte(
    "O abolicionista José do Patrocínio",
    "Biblioteca Nacional",
    "https://bndigital.bn.gov.br/artigos/o-abolicionista-jose-do-patrocinio/"
  ),
  // fonte sobre lei saraiva: decreto nº 3.029, de 9 de janeiro de 1881
  saraiva: criarFonte(
    "Lei Saraiva: Decreto nº 3.029, de 9 de janeiro de 1881",
    "Tribunal Superior Eleitoral",
    "https://www.tse.jus.br/servicos-eleitorais/glossario/termos/lei-saraiva",
    "Documento primário"
  ),
  // fonte sobre 25 de março de 1884: abolição no ceará
  ceara: criarFonte(
    "25 de março de 1884: abolição no Ceará",
    "Tribunal de Contas do Estado do Ceará",
    "https://www.tce.ce.gov.br/comunicacao/noticias/3520-25-de-marco-e-feriado-no-estado-do-ceara-terra-da-luz"
  ),
  // fonte sobre lei nº 3.270, de 28 de setembro de 1885
  sexagenarios: criarFonte(
    "Lei nº 3.270, de 28 de setembro de 1885",
    "Presidência da República",
    "https://www.planalto.gov.br/ccivil_03/leis/lim/lim3270.htm",
    "Documento primário"
  ),
  // fonte sobre lei nº 3.353, de 13 de maio de 1888
  aurea: criarFonte(
    "Lei nº 3.353, de 13 de maio de 1888",
    "Presidência da República",
    "https://www.planalto.gov.br/ccivil_03/leis/lim/lim3353.htm",
    "Documento primário"
  ),
  // fonte sobre a lei áurea no acervo do arquivo nacional
  aureaArquivoNacional: criarFonte(
    "A Lei Áurea no acervo do Arquivo Nacional",
    "Arquivo Nacional",
    "https://www.gov.br/arquivonacional/pt-br/canais_atendimento/imprensa/noticias/lei-aurea-faz-parte-do-acervo-do-arquivo-nacional"
  ),
  // fonte sobre 15 de novembro de 1889: a proclamação da república — celso castro
  republica: criarFonte(
    "15 de novembro de 1889: a Proclamação da República — Celso Castro",
    "FGV CPDOC",
    "https://cpdoc.fgv.br/artigos/proclamacao-republica",
    "Análise historiográfica"
  ),
};

// associa cada parágrafo às referências que sustentam seu conteúdo
const criarParagrafo = (texto, referencias) => ({ texto, referencias });

// organiza os parágrafos de uma leitura sob o mesmo subtítulo
const criarSecao = (titulo, ...paragrafos) => ({ titulo, paragrafos });

// reúne as leituras ampliadas sem alterar os textos históricos
export const artigosHistoricos = {
  // leitura sobre a independência
  independencia: {
    data: "7 DE SETEMBRO DE 1822",
    local: "São Paulo e as províncias do Brasil",
    titulo: "A Independência",
    icone: "bandeira",
    introducao: "A ruptura com Portugal abriu uma disputa sobre o país que seria construído.",
    secoes: [
      criarSecao(
        "Um processo, muitos projetos",
        criarParagrafo(
          "A Independência resultou de conflitos entre as Cortes de Lisboa, o governo de D. Pedro e grupos políticos nas províncias. A permanência do príncipe no Brasil e a articulação de uma autoridade no Rio de Janeiro contribuíram para a separação. Em 7 de setembro de 1822, D. Pedro declarou o rompimento com Portugal. O episódio tornou-se o marco nacional de um processo mais amplo.",
          ["independencias", "primeiro"]
        ),
      ),
      criarSecao(
        "O Império ainda precisava se formar",
        criarParagrafo(
          "D. Pedro foi aclamado imperador em 12 de outubro e coroado em 1º de dezembro. A nova monarquia ainda precisava conquistar reconhecimento externo e enfrentar resistências internas. A adesão das províncias ocorreu em momentos diferentes e incluiu combates, mobilização popular e conflitos entre projetos de poder.",
          ["guerras"]
        ),
      ),
      criarSecao(
        "Independência para quem?",
        criarParagrafo(
          "A separação política não extinguiu a escravidão. A ordem constitucional que se consolidou nos anos seguintes restringiu a participação política por critérios de renda e condição jurídica. Construir um Estado independente e assegurar igualdade social eram questões diferentes.",
          ["constituicao"]
        ),
      ),
    ],
    observacao: "O 7 de Setembro é um marco da Independência. Não representa o encerramento simultâneo dos conflitos em todo o território.",
  },
  // leitura sobre a independência também se conquistou nas ruas
  bahia: {
    data: "2 DE JULHO DE 1823",
    local: "Bahia",
    titulo: "A Independência também se conquistou nas ruas",
    icone: "espadas",
    introducao: "A saída das tropas portuguesas de Salvador foi um momento decisivo nas guerras de independência.",
    secoes: [
      criarSecao(
        "A luta no Recôncavo e em Salvador",
        criarParagrafo(
          "Na Bahia, autoridades e tropas portuguesas resistiram à separação. Forças organizadas no Recôncavo enfrentaram o domínio militar em Salvador. O conflito mobilizou diferentes grupos sociais, inclusive pessoas escravizadas, algumas atraídas por promessas de alforria.",
          ["guerras"]
        ),
      ),
      criarSecao(
        "O significado do 2 de Julho",
        criarParagrafo(
          "Em 2 de julho de 1823, as tropas portuguesas deixaram Salvador. A data expressa uma dimensão coletiva e militar da Independência que não cabe apenas na cena do Ipiranga. Outras províncias também passaram por conflitos e adesões posteriores ao 7 de Setembro.",
          ["guerras", "independencias"]
        ),
      ),
    ],
    observacao: "Independência política não significou liberdade geral para as pessoas escravizadas que participaram das lutas.",
  },
  // leitura sobre uma constituição e quatro poderes
  constituicao: {
    data: "25 DE MARÇO DE 1824",
    local: "Rio de Janeiro",
    titulo: "Uma Constituição e quatro poderes",
    icone: "documento",
    introducao: "A primeira Constituição brasileira combinou direitos civis, representação política e forte autoridade imperial.",
    secoes: [
      criarSecao(
        "Da Assembleia à outorga",
        criarParagrafo(
          "A Constituinte iniciou seus trabalhos em 1823, mas D. Pedro I a dissolveu em 12 de novembro. Um Conselho de Estado redigiu outro texto, outorgado pelo imperador em 25 de março de 1824. A Carta permaneceu em vigor, com alterações, até o fim da monarquia.",
          ["constituinte"]
        ),
      ),
      criarSecao(
        "O Poder Moderador",
        criarParagrafo(
          "Além do Executivo, do Legislativo e do Judiciário, a Constituição estabeleceu o Poder Moderador, exercido exclusivamente pelo imperador. Entre suas atribuições estavam nomear e demitir ministros, escolher senadores a partir de listas tríplices e dissolver a Câmara dos Deputados, convocando novas eleições.",
          ["constituicao"]
        ),
      ),
      criarSecao(
        "Os limites da cidadania",
        criarParagrafo(
          "O catolicismo era a religião oficial. Havia garantias civis e eleições indiretas, mas a renda condicionava o acesso à participação política e a escravidão continuava. Os libertos tinham direitos políticos limitados; pessoas escravizadas não eram reconhecidas como cidadãos. Mulheres não participavam das eleições.",
          ["constituicao", "saraiva"]
        ),
      ),
    ],
    observacao: "Monarquia constitucional não é sinônimo de democracia com participação universal.",
  },
  // leitura sobre a confederação do equador
  equador: {
    data: "1824",
    local: "Pernambuco e outras províncias do Nordeste",
    titulo: "A Confederação do Equador",
    icone: "espadas",
    introducao: "Um projeto republicano e federativo desafiou a centralização do novo Império.",
    secoes: [
      criarSecao(
        "O conflito com o governo central",
        criarParagrafo(
          "A dissolução da Constituinte, a Constituição de 1824 e as disputas pela presidência de Pernambuco acirraram a oposição a D. Pedro I. Manuel de Carvalho Paes de Andrade proclamou a Confederação do Equador em 2 de julho de 1824, propondo uma união republicana de províncias.",
          ["equador"]
        ),
      ),
      criarSecao(
        "Repressão e memória",
        criarParagrafo(
          "O movimento teve adesões no Nordeste, mas não consolidou o Estado que pretendia criar. A reação imperial foi militar e violenta. Frei Caneca, uma de suas figuras mais conhecidas, esteve entre as lideranças condenadas à morte. O episódio expõe a disputa entre o centro político e projetos provinciais.",
          ["primeiro", "equador"]
        ),
      ),
    ],
  },
  // leitura sobre a guerra da cisplatina
  cisplatina: {
    data: "1825 — 1828",
    local: "Região do Rio da Prata",
    titulo: "A Guerra da Cisplatina",
    icone: "espadas",
    introducao: "Uma guerra pelo controle da Banda Oriental terminou com o reconhecimento de um novo país.",
    secoes: [
      criarSecao(
        "Uma fronteira disputada",
        criarParagrafo(
          "A Cisplatina, atual Uruguai, integrava o Império no momento da Independência. Em 1825, insurgentes proclamaram sua separação e vinculação às Províncias Unidas do Rio da Prata. O conflito opôs o Brasil a esse Estado, em uma região marcada por disputas políticas e territoriais anteriores.",
          ["cisplatina"]
        ),
      ),
      criarSecao(
        "Paz e independência uruguaia",
        criarParagrafo(
          "A Convenção Preliminar de Paz, de 27 de agosto de 1828, encerrou a guerra e reconheceu a independência do território oriental, com mediação britânica. Os gastos e a perda da província ampliaram o desgaste do governo brasileiro. A abdicação posterior, contudo, teve diversas causas.",
          ["cisplatina"]
        ),
      ),
    ],
  },
  // leitura sobre d. pedro i deixa o trono
  abdicacao: {
    data: "7 DE ABRIL DE 1831",
    local: "Rio de Janeiro",
    titulo: "D. Pedro I deixa o trono",
    icone: "coroa",
    introducao: "O herdeiro tinha cinco anos. O governo passou às regências.",
    secoes: [
      criarSecao(
        "Um governo sob contestação",
        criarParagrafo(
          "O autoritarismo atribuído a D. Pedro I, suas disputas com o Legislativo, dificuldades econômicas e a relação com a sucessão portuguesa contribuíram para a crise. A morte do jornalista Libero Badaró, em 1830, intensificou a oposição. A tensão alcançou as ruas e as forças militares.",
          ["badaro", "partidos"]
        ),
      ),
      criarSecao(
        "A abdicação",
        criarParagrafo(
          "Em 7 de abril de 1831, D. Pedro I abdicou em favor de seu filho, Pedro de Alcântara. O sucessor era menor de idade; por isso, regentes governariam em seu nome. Formou-se inicialmente uma Regência Trina Provisória, substituída ainda em 1831 pela Trina Permanente.",
          ["almanaque", "partidos"]
        ),
      ),
      criarSecao(
        "Uma experiência política aberta",
        criarParagrafo(
          "Entre 1831 e 1840, diferentes grupos disputaram os limites da autoridade central e a autonomia provincial. A formação dos partidos Liberal e Conservador esteve ligada às reorganizações políticas dessa década. As regências também enfrentaram revoltas de composição social e objetivos distintos.",
          ["partidos", "ato"]
        ),
      ),
    ],
  },
  // leitura sobre as províncias ganham assembleias
  ato: {
    data: "12 DE AGOSTO DE 1834",
    local: "Império do Brasil",
    titulo: "As províncias ganham assembleias",
    icone: "balanca",
    introducao: "O Ato Adicional reformou a Constituição e reorganizou o governo regencial.",
    secoes: [
      criarSecao(
        "O que mudou",
        criarParagrafo(
          "A Lei nº 16, de 12 de agosto de 1834, criou assembleias legislativas provinciais em lugar dos conselhos gerais e ampliou suas competências. Extinguiu o Conselho de Estado e substituiu a regência trina por uma regência una eletiva. O Poder Moderador permaneceu previsto.",
          ["ato"]
        ),
      ),
      criarSecao(
        "Autonomia e seus limites",
        criarParagrafo(
          "A reforma transferiu decisões às províncias, mas não criou uma república federal. As assembleias provinciais exerceram autoridade também sobre a administração municipal. Em 1840, a Lei de Interpretação do Ato Adicional restringiu parte da descentralização. A extensão desse chamado regresso conservador é debatida pela historiografia.",
          ["ato"]
        ),
      ),
    ],
    observacao: "Descentralização provincial e autonomia municipal não avançaram necessariamente juntas.",
  },
  // leitura sobre a cabanagem
  cabanagem: {
    data: "1835 — 1840",
    local: "Província do Grão-Pará",
    titulo: "A Cabanagem",
    icone: "espadas",
    introducao: "Uma revolta de ampla participação popular chegou a tomar o governo provincial.",
    secoes: [
      criarSecao(
        "Quem estava em luta",
        criarParagrafo(
          "No Grão-Pará, disputas políticas e profundas desigualdades alimentaram a Cabanagem. Indígenas, negros, mestiços e outros setores populares participaram do movimento ao lado de grupos com interesses próprios. Não havia um único projeto político compartilhado por todos.",
          ["cabanagem", "balaiada"]
        ),
      ),
      criarSecao(
        "O poder e a repressão",
        criarParagrafo(
          "Os cabanos ocuparam Belém e instituíram governos provinciais. A reconquista da capital pelas forças governistas não encerrou imediatamente os confrontos, que continuaram no interior até 1840. A repressão e a guerra provocaram perdas humanas muito elevadas.",
          ["cabanagem"]
        ),
      ),
    ],
    observacao: "As estimativas de mortos variam entre estudos. O percurso evita apresentar uma contagem como se fosse exata.",
  },
  // leitura sobre a revolta dos malês
  males: {
    data: "JANEIRO DE 1835",
    local: "Salvador, Bahia",
    titulo: "A Revolta dos Malês",
    icone: "pessoas",
    introducao: "Africanos escravizados e libertos enfrentaram a ordem escravista em Salvador.",
    secoes: [
      criarSecao(
        "Organização africana e religião",
        criarParagrafo(
          "O levante foi organizado principalmente por africanos muçulmanos, conhecidos como malês, em Salvador. Escravizados e libertos participaram das articulações. Redes de trabalho, convivência e religião permitiram a circulação de mensagens e planos, inclusive escritos em árabe.",
          ["males"]
        ),
      ),
      criarSecao(
        "Resistência e repressão",
        criarParagrafo(
          "A revolta ocorreu em janeiro de 1835 e foi rapidamente reprimida. Os participantes enfrentaram prisões, açoites, deportações e condenações à morte. O episódio mostra que as pessoas submetidas à escravidão organizaram formas próprias de luta por liberdade e autonomia.",
          ["males"]
        ),
      ),
    ],
    observacao: "A Revolta dos Malês teve características africanas e religiosas específicas. Não deve ser confundida com as demais revoltas da Regência.",
  },
  // leitura sobre a guerra dos farrapos
  farroupilha: {
    data: "1835 — 1845",
    local: "Rio Grande do Sul e Santa Catarina",
    titulo: "A Guerra dos Farrapos",
    icone: "espadas",
    introducao: "Interesses regionais, projetos republicanos e uma guerra prolongada no Sul.",
    secoes: [
      criarSecao(
        "As disputas no Sul",
        criarParagrafo(
          "A Farroupilha começou em 1835, em meio a conflitos com o governo imperial e interesses de estancieiros e produtores de charque. Lideranças como Bento Gonçalves conduziram a rebelião, que assumiu um projeto republicano e se estendeu por uma década. Em 1839, os rebeldes chegaram a Laguna, em Santa Catarina.",
          ["farroupilha"]
        ),
      ),
      criarSecao(
        "Uma sociedade ainda escravista",
        criarParagrafo(
          "O movimento contou com a participação de pessoas escravizadas, mas suas lideranças não promoveram uma abolição geral da escravidão. O acordo de 1845 reintegrou a província à ordem imperial. As experiências dos combatentes negros e as promessas de liberdade exigem atenção própria, além da narrativa dos grandes chefes militares.",
          ["farroupilha", "abolicaoLeis"]
        ),
      ),
    ],
  },
  // leitura sobre a sabinada
  sabinada: {
    data: "1837 — 1838",
    local: "Bahia",
    titulo: "A Sabinada",
    icone: "espadas",
    introducao: "Os rebeldes propuseram uma república baiana que duraria até a maioridade de D. Pedro II.",
    secoes: [
      criarSecao(
        "Um projeto provisório",
        criarParagrafo(
          "A Sabinada reuniu setores urbanos e militares descontentes com o governo regencial. Francisco Sabino foi uma de suas principais figuras. Em Salvador, os rebeldes declararam uma república provisória, vinculando sua duração à menoridade do imperador.",
          ["sabinada"]
        ),
      ),
      criarSecao(
        "O desfecho",
        criarParagrafo(
          "Sem obter apoio suficiente no Recôncavo, os revoltosos enfrentaram o cerco das forças governistas. A repressão de 1838 encerrou a experiência. O projeto era diferente do dos malês, também ocorrido na Bahia: a coincidência de território não torna os dois movimentos equivalentes.",
          ["sabinada", "males"]
        ),
      ),
    ],
  },
  // leitura sobre a balaiada
  balaiada: {
    data: "1838 — 1841",
    local: "Maranhão e regiões vizinhas",
    titulo: "A Balaiada",
    icone: "espadas",
    introducao: "Sertanejos, vaqueiros, artesãos e escravizados confrontaram a ordem provincial.",
    secoes: [
      criarSecao(
        "As origens da rebelião",
        criarParagrafo(
          "A Balaiada começou em dezembro de 1838, a partir de um ataque à cadeia da Vila da Manga, liderado por Raimundo Gomes. O movimento ampliou-se no Maranhão e alcançou áreas vizinhas. Pobreza, recrutamento e disputas políticas provinciais contribuíram para a mobilização.",
          ["balaiada"]
        ),
      ),
      criarSecao(
        "Muitas lideranças, diferentes objetivos",
        criarParagrafo(
          "Manuel Francisco dos Anjos Ferreira, conhecido como Balaio, foi uma das lideranças populares. Cosme Bento liderou escravizados insurgentes. A aproximação entre grupos livres pobres e escravizados não eliminou as diferenças de objetivos. A repressão militar, comandada por Luís Alves de Lima e Silva, encerrou o movimento em 1841.",
          ["balaiada"]
        ),
      ),
    ],
    observacao: "Relatos oficiais de repressão muitas vezes descreviam os rebeldes como criminosos. A leitura histórica também considera suas condições de vida e reivindicações.",
  },
  // leitura sobre um imperador aos catorze anos
  maioridade: {
    data: "23 DE JULHO DE 1840",
    local: "Rio de Janeiro",
    titulo: "Um imperador aos catorze anos",
    icone: "coroa",
    introducao: "A antecipação da maioridade encerrou as regências e iniciou o Segundo Reinado.",
    secoes: [
      criarSecao(
        "A solução política",
        criarParagrafo(
          "A Constituição previa a maioridade do imperador aos dezoito anos. Em meio às disputas regenciais, os defensores da antecipação, sobretudo liberais, apresentaram o jovem monarca como centro de estabilidade. Em 23 de julho de 1840, o Legislativo declarou D. Pedro II maior, aos catorze anos.",
          ["constituicao", "segundo"]
        ),
      ),
      criarSecao(
        "Governo e coroação são marcos diferentes",
        criarParagrafo(
          "O episódio ficou conhecido como Golpe da Maioridade. A cerimônia de sagração e coroação ocorreu em 18 de julho de 1841, quando D. Pedro II já tinha quinze anos. Revoltas e disputas políticas continuaram após 1840; a maioridade não resolveu imediatamente os conflitos do Império.",
          ["almanaque", "liberais"]
        ),
      ),
    ],
    observacao: "1840: início do governo pessoal. 1841: sagração e coroação. As duas datas não devem ser trocadas.",
  },
  // leitura sobre a revolução praieira
  praieira: {
    data: "1848 — 1850",
    local: "Pernambuco",
    titulo: "A Revolução Praieira",
    icone: "espadas",
    introducao: "Disputas partidárias encontraram reivindicações sociais e críticas ao poder imperial.",
    secoes: [
      criarSecao(
        "A rebelião",
        criarParagrafo(
          "A chegada de um presidente conservador à província, em 1848, agravou o conflito com os liberais praieiros. O movimento armado começou em novembro. Além da competição política, havia insatisfação com a concentração da propriedade e com o comércio controlado por grupos privilegiados.",
          ["praieira"]
        ),
      ),
      criarSecao(
        "O Manifesto ao Mundo",
        criarParagrafo(
          "Em 1849, um manifesto reuniu propostas como liberdade de imprensa, voto livre, garantia de trabalho e fim do Poder Moderador. O núcleo militar da revolta foi derrotado em 1849; a resistência prolongou-se até 1850. Foi um importante conflito provincial do Segundo Reinado.",
          ["praieira", "segundo"]
        ),
      ),
    ],
    observacao: "Os recortes de 1848–1849 e 1848–1850 correspondem, respectivamente, ao principal confronto e à duração mais ampla do movimento.",
  },
  // leitura sobre a lei eusébio de queirós
  eusebio: {
    data: "4 DE SETEMBRO DE 1850",
    local: "Império do Brasil e Atlântico",
    titulo: "A Lei Eusébio de Queirós",
    icone: "corrente",
    introducao: "A Lei Eusébio de Queirós intensificou o combate à importação de africanos escravizados.",
    secoes: [
      criarSecao(
        "A proibição anterior",
        criarParagrafo(
          "A lei de 7 de novembro de 1831 já declarava livres, com exceções previstas, os escravizados trazidos de fora do Império. Foi amplamente descumprida. Em 1850, a nova legislação criou mecanismos mais efetivos de apreensão de embarcações e punição dos envolvidos no tráfico.",
          ["lei1831", "abolicaoLeis"]
        ),
      ),
      criarSecao(
        "O que continuou",
        criarParagrafo(
          "A pressão britânica contribuiu para essa mudança, mas a repressão também dependeu de decisões e ações do Estado brasileiro. O fim do tráfico transatlântico não acabou com a escravidão. O comércio interno de pessoas escravizadas ganhou importância, especialmente para abastecer o Sudeste cafeeiro.",
          ["abolicaoLeis", "cafe"]
        ),
      ),
    ],
    observacao: "1850 é o marco da repressão efetiva ao tráfico transatlântico, não da abolição geral, que ocorreu em 1888.",
  },
  // leitura sobre terra, propriedade e exclusão
  terras: {
    data: "18 DE SETEMBRO DE 1850",
    local: "Império do Brasil",
    titulo: "Terra, propriedade e exclusão",
    icone: "folha",
    introducao: "A Lei de Terras reorganizou a aquisição de terras públicas e favoreceu a concentração fundiária.",
    secoes: [
      criarSecao(
        "A regra da compra",
        criarParagrafo(
          "A Lei nº 601 regulou as terras devolutas e o reconhecimento de posses e antigas sesmarias. Estabeleceu a compra como regra para adquirir terras devolutas, com exceções legais. Os debates parlamentares expressaram o peso dos grandes proprietários na definição dessas regras.",
          ["terras"]
        ),
      ),
      criarSecao(
        "As consequências sociais",
        criarParagrafo(
          "O custo da terra e da regularização dificultou o acesso de pessoas pobres à propriedade rural. Imigrantes e futuros libertos encontraram barreiras importantes. A transformação das relações de trabalho ocorreu, assim, junto a uma política agrária que não distribuía amplamente a terra.",
          ["terras"]
        ),
      ),
      criarSecao(
        "Territórios indígenas",
        criarParagrafo(
          "As políticas imperiais sobre aldeamentos e terras também pressionaram os povos indígenas. A ocupação e a expansão agrícola disputavam territórios que não eram vazios, mesmo quando documentos oficiais os apresentavam dessa maneira.",
          ["indigenas"]
        ),
      ),
    ],
  },
  // leitura sobre o império sobre trilhos
  ferrovia: {
    data: "30 DE ABRIL DE 1854",
    local: "Província do Rio de Janeiro",
    titulo: "O Império sobre trilhos",
    icone: "trem",
    introducao: "A primeira ferrovia brasileira simbolizou transformações materiais que conviveram com a escravidão.",
    secoes: [
      criarSecao(
        "A Estrada de Ferro Mauá",
        criarParagrafo(
          "O trecho entre o porto de Mauá e Fragoso foi inaugurado em 30 de abril de 1854. Tinha 14,5 quilômetros. Irineu Evangelista de Sousa recebeu naquele dia o título de Barão de Mauá. O empreendimento articulava transporte ferroviário e navegação na região da baía de Guanabara.",
          ["ferrovia"]
        ),
      ),
      criarSecao(
        "Café e infraestrutura",
        criarParagrafo(
          "A expansão ferroviária esteve ligada ao transporte de produtos agrícolas, sobretudo café, para os portos. A Estrada de Ferro D. Pedro II inaugurou sua primeira linha em 1858. Esses investimentos alteraram fluxos econômicos, mas não distribuíram de maneira igual seus benefícios pelo território.",
          ["transportes"]
        ),
      ),
      criarSecao(
        "Transformação e permanência",
        criarParagrafo(
          "Bancos, comércio e novos transportes se desenvolveram em uma sociedade que continuava baseada em grande parte no trabalho escravizado. A modernização material não implicou o desaparecimento imediato das hierarquias sociais.",
          ["segundo", "abolicaoLeis"]
        ),
      ),
    ],
  },
  // leitura sobre a guerra do paraguai
  paraguai: {
    data: "1864 — 1870",
    local: "Bacia do Rio da Prata",
    titulo: "A Guerra do Paraguai",
    icone: "espadas",
    introducao: "Uma disputa regional tornou-se uma guerra devastadora para todos os países envolvidos.",
    secoes: [
      criarSecao(
        "Por que a guerra começou?",
        criarParagrafo(
          "Interesses de fronteira, navegação e poder na região do Prata compuseram o contexto. A intervenção brasileira no Uruguai, em 1864, confrontou a política de Francisco Solano López. A apreensão do vapor Marquês de Olinda e a invasão paraguaia de Mato Grosso marcaram a escalada do conflito. A invasão da província argentina de Corrientes ampliou a guerra.",
          ["paraguai"]
        ),
      ),
      criarSecao(
        "A Tríplice Aliança",
        criarParagrafo(
          "Em 1865, Brasil, Argentina e Uruguai formaram a Tríplice Aliança contra o Paraguai. A guerra prolongou-se por anos. Combates, epidemias, fome e deslocamentos atingiram militares e civis. Pessoas livres e escravizadas integraram o esforço de guerra brasileiro sob diferentes formas de recrutamento.",
          ["paraguai", "guerraArquivoNacional"]
        ),
      ),
      criarSecao(
        "O desfecho e seus efeitos",
        criarParagrafo(
          "Assunção foi ocupada em 1869, mas a guerra prosseguiu até a morte de López, em 1º de março de 1870. O Paraguai sofreu enorme destruição. No Brasil, o conflito aumentou gastos e contribuiu para reorganizar o Exército, que ampliaria sua presença política nas décadas seguintes.",
          ["paraguai", "guerraArquivoNacional"]
        ),
      ),
    ],
    observacao: "A guerra começou em 1864. A Tríplice Aliança foi formalizada em 1865. Estimativas demográficas e interpretações das causas são objeto de debate histórico.",
  },
  // leitura sobre a república entra no debate
  republicanismo: {
    data: "3 DE DEZEMBRO DE 1870",
    local: "Rio de Janeiro e outras províncias",
    titulo: "A República entra no debate",
    icone: "jornal",
    introducao: "O republicanismo ganhou novas organizações e espaços de propaganda, sem tornar inevitável o fim da monarquia.",
    secoes: [
      criarSecao(
        "Um manifesto político",
        criarParagrafo(
          "O Manifesto Republicano de 1870 reuniu opositores da monarquia e se tornou um marco na organização da propaganda republicana. Campos Salles esteve entre seus signatários. A circulação de jornais, clubes e ideias republicanas contribuiu para ampliar o debate sobre a forma de governo.",
          ["manifesto", "republica"]
        ),
      ),
      criarSecao(
        "Projetos e alianças diferentes",
        criarParagrafo(
          "Republicanos civis e militares não formavam um bloco homogêneo. O federalismo, as ideias positivistas e as disputas com o governo imperial tinham pesos distintos para diferentes grupos. O processo que levou a 1889 não foi uma evolução automática nem representou um consenso de toda a sociedade.",
          ["republica"]
        ),
      ),
    ],
  },
  // leitura sobre a lei do ventre livre
  ventre: {
    data: "28 DE SETEMBRO DE 1871",
    local: "Império do Brasil",
    titulo: "A Lei do Ventre Livre",
    icone: "documento",
    introducao: "A liberdade declarada ao nascer veio acompanhada de mecanismos de tutela e trabalho obrigatório.",
    secoes: [
      criarSecao(
        "O alcance da lei",
        criarParagrafo(
          "Sancionada pela princesa Isabel durante uma regência, a Lei nº 2.040 declarou livres os filhos de mulheres escravizadas nascidos a partir de sua vigência. Também estabeleceu um fundo de emancipação e regras sobre matrícula e pecúlio, criando caminhos jurídicos para a liberdade.",
          ["ventre"]
        ),
      ),
      criarSecao(
        "A liberdade limitada",
        criarParagrafo(
          "As crianças permaneciam sob a autoridade dos senhores de suas mães até os oito anos. Então, o senhor podia optar por indenização estatal ou por utilizar os serviços do jovem até os vinte e um anos. A lei não libertou as mães nem extinguiu a escravidão de todas as pessoas.",
          ["ventre"]
        ),
      ),
      criarSecao(
        "Um campo de luta",
        criarParagrafo(
          "A legislação abriu oportunidades que podiam ser utilizadas em disputas por liberdade. Também buscava controlar o ritmo da transformação, protegendo interesses senhoriais. A abolição continuou sendo uma questão de mobilização política e social.",
          ["abolicaoLeis", "gama"]
        ),
      ),
    ],
    observacao: "“Livre ao nascer” não significava infância livre da autoridade e das exigências de trabalho dos antigos senhores.",
  },
  // leitura sobre a questão religiosa
  religiosa: {
    data: "1872 — 1875",
    local: "Olinda, Belém e Rio de Janeiro",
    titulo: "A Questão Religiosa",
    icone: "igreja",
    introducao: "O conflito entre bispos e governo expôs as tensões da relação entre Igreja e Estado.",
    secoes: [
      criarSecao(
        "Trono e altar",
        criarParagrafo(
          "O catolicismo era a religião oficial e o imperador exercia atribuições sobre a Igreja no regime do padroado. Quando bispos aplicaram restrições a irmandades ligadas à maçonaria, entraram em conflito com o governo imperial, que defendia sua autoridade sobre essas instituições.",
          ["constituicao", "religiosa"]
        ),
      ),
      criarSecao(
        "Prisão e anistia",
        criarParagrafo(
          "Os bispos de Olinda e do Pará foram processados e presos; posteriormente, receberam anistia. O episódio desgastou as relações entre setores da Igreja e a Coroa. Esse desgaste integrou a crise do regime, sem funcionar como causa única da República.",
          ["religiosa", "republica"]
        ),
      ),
    ],
  },
  // leitura sobre uma seca, uma crise social
  seca: {
    data: "1877 — 1879",
    local: "Ceará e outras regiões do Nordeste",
    titulo: "Uma seca, uma crise social",
    icone: "sol",
    introducao: "A falta de chuva se somou à fome, à pobreza e à insuficiência do socorro aos retirantes.",
    secoes: [
      criarSecao(
        "Deslocamentos e sobrevivência",
        criarParagrafo(
          "A grande seca do final da década de 1870 provocou fome e migrações no Nordeste. Milhares de pessoas deixaram suas terras em busca de sobrevivência. Em 1878, José do Patrocínio viajou ao Ceará e denunciou os efeitos da crise e os problemas na assistência.",
          ["patrocinio"]
        ),
      ),
      criarSecao(
        "A tragédia chega à imprensa",
        criarParagrafo(
          "Fotografias de Joaquim Antônio Corrêa, reproduzidas na revista O Besouro em 1878, documentaram corpos atingidos pela fome e deram força às denúncias. Esses registros são importantes para compreender o contraste entre a imagem de prosperidade da Corte e as condições de vida dos retirantes.",
          ["seca"]
        ),
      ),
    ],
    observacao: "Os registros fotográficos citados documentam especialmente 1877–1878; o período mais amplo da grande seca é habitualmente indicado como 1877–1879.",
  },
  // leitura sobre voto direto, participação restrita
  saraiva: {
    data: "9 DE JANEIRO DE 1881",
    local: "Império do Brasil",
    titulo: "Voto direto, participação restrita",
    icone: "voto",
    introducao: "A Lei Saraiva mudou as eleições, mas manteve barreiras severas à participação.",
    secoes: [
      criarSecao(
        "A reforma eleitoral",
        criarParagrafo(
          "O Decreto nº 3.029, conhecido como Lei Saraiva, estabeleceu eleições diretas. Antes, o processo tinha dois graus: votantes escolhiam eleitores, que elegiam representantes. A reforma preservou a exigência de renda e aumentou as condições de comprovação para o alistamento.",
          ["saraiva"]
        ),
      ),
      criarSecao(
        "O requisito da alfabetização",
        criarParagrafo(
          "A lei exigiu saber ler e escrever para novas inclusões nas revisões do alistamento. Esse requisito, somado à renda e às dificuldades de comprovação, restringiu fortemente o eleitorado. A existência de eleição direta, portanto, não significava voto universal.",
          ["saraiva"]
        ),
      ),
    ],
    observacao: "O art. 8º, inciso II, explicita o requisito de ler e escrever. A manutenção de situações no alistamento inicial não equivale a um direito universal dos analfabetos ao voto.",
  },
  // leitura sobre a liberdade avança pelas províncias
  ceara: {
    data: "25 DE MARÇO DE 1884",
    local: "Ceará",
    titulo: "A liberdade avança pelas províncias",
    icone: "corrente",
    introducao: "O Ceará aboliu a escravidão quatro anos antes da lei nacional.",
    secoes: [
      criarSecao(
        "Mobilização antes da Lei Áurea",
        criarParagrafo(
          "A abolição no Ceará, em 25 de março de 1884, foi precedida por ações de associações e pela resistência ao transporte de pessoas escravizadas. A recusa de jangadeiros em embarcar cativos tornou-se uma expressão conhecida dessa mobilização.",
          ["ceara", "abolicaoLeis"]
        ),
      ),
      criarSecao(
        "Uma causa nacional",
        criarParagrafo(
          "O Amazonas também aboliu a escravidão em 1884. A organização de sociedades, a imprensa, a busca por alforrias e a ação dos próprios escravizados pressionavam a ordem imperial. A conquista da liberdade não seguiu um único caminho e não começou em 13 de maio de 1888.",
          ["abolicaoLeis", "patrocinio"]
        ),
      ),
    ],
  },
  // leitura sobre a lei dos sexagenários
  sexagenarios: {
    data: "28 DE SETEMBRO DE 1885",
    local: "Império do Brasil",
    titulo: "A Lei dos Sexagenários",
    icone: "documento",
    introducao: "Uma nova lei de emancipação manteve condições de serviço e proteção aos interesses dos proprietários.",
    secoes: [
      criarSecao(
        "Liberdade condicionada",
        criarParagrafo(
          "A Lei nº 3.270, também chamada Saraiva-Cotegipe, declarou livres os escravizados a partir dos sessenta anos. Previu, contudo, prestação de serviços aos antigos senhores por até três anos, como compensação, dispensando desses serviços quem completasse sessenta e cinco anos.",
          ["sexagenarios"]
        ),
      ),
      criarSecao(
        "As limitações",
        criarParagrafo(
          "A lei também reorganizou matrículas e mecanismos de emancipação. Não produziu a abolição geral. Suas condições de trabalho, moradia e controle dos libertos mostram a tentativa de administrar a transição preservando interesses senhoriais.",
          ["sexagenarios"]
        ),
      ),
    ],
    observacao: "O texto legal distingue os sessenta anos, a prestação de serviços e a dispensa aos sessenta e cinco. Resumir a lei apenas como “liberdade aos 65” omite essas regras.",
  },
  // leitura sobre a abolição da escravidão
  aurea: {
    data: "13 DE MAIO DE 1888",
    local: "Rio de Janeiro e todo o Brasil",
    titulo: "A abolição da escravidão",
    icone: "corrente",
    introducao: "A Lei Áurea encerrou legalmente a escravidão. A luta por condições de liberdade continuou.",
    secoes: [
      criarSecao(
        "Uma conquista de muitas pessoas",
        criarParagrafo(
          "Resistências individuais e coletivas, fugas, ações judiciais, associações, jornais e campanhas pressionaram pela abolição. Luiz Gama e José do Patrocínio foram algumas das figuras públicas dessa luta. Pessoas escravizadas e libertas participaram ativamente da transformação.",
          ["gama", "patrocinio"]
        ),
      ),
      criarSecao(
        "O ato legal",
        criarParagrafo(
          "A Assembleia Geral aprovou a Lei nº 3.353, sancionada pela princesa Isabel, então regente, em 13 de maio de 1888. Seus dois artigos declararam extinta a escravidão no Brasil e revogaram as disposições contrárias. O Brasil foi o último país independente das Américas a abolir a escravidão.",
          ["aurea", "aureaArquivoNacional"]
        ),
      ),
      criarSecao(
        "O que a lei não assegurou",
        criarParagrafo(
          "O texto não estabeleceu distribuição de terras, reparações ou um programa de inclusão para os libertos. A liberdade jurídica não eliminou o racismo, a pobreza e as desigualdades. A conquista foi decisiva, mas sua efetivação na vida cotidiana permaneceu em disputa.",
          ["aurea", "terras"]
        ),
      ),
    ],
    observacao: "A assinatura da lei foi um marco institucional de um processo social de longa duração, e não uma concessão isolada da família imperial.",
  },
  // leitura sobre o fim do império
  republica: {
    data: "15 DE NOVEMBRO DE 1889",
    local: "Rio de Janeiro",
    titulo: "O fim do Império",
    icone: "bandeira",
    introducao: "Um golpe militar derrubou a monarquia e instituiu a República.",
    secoes: [
      criarSecao(
        "A crise não tinha uma única causa",
        criarParagrafo(
          "As tensões entre militares e governo, a propaganda republicana e os desgastes políticos da monarquia contribuíram para a crise. O Exército abrigava grupos com ideias e interesses distintos. A República não era uma conclusão inevitável do processo histórico.",
          ["republica", "guerraArquivoNacional"]
        ),
      ),
      criarSecao(
        "O 15 de Novembro",
        criarParagrafo(
          "Militares sob a liderança de Deodoro da Fonseca derrubaram o governo imperial no Rio de Janeiro. A monarquia foi substituída por um governo provisório republicano. A organização e a execução do golpe estiveram concentradas em um grupo de militares, ainda que houvesse republicanos civis e articulações políticas mais amplas.",
          ["republica"]
        ),
      ),
      criarSecao(
        "Um regime termina; a história continua",
        criarParagrafo(
          "A mudança de regime não resultou de uma eleição nacional nem expressou um consenso de toda a população. As discussões sobre cidadania, desigualdade e participação política continuaram. Em 1889, encerrou-se o Império iniciado em 1822.",
          ["republica"]
        ),
      ),
    ],
    observacao: "“Proclamação” designa o anúncio da República. A natureza do acontecimento de 15 de novembro é a de um golpe de Estado.",
  },
};

// cria uma casa do percurso com ano resumo referências e opções visuais
const criarAcontecimento = (ano, titulo, resumo, referencias, opcoes = {}) => ({ ano, titulo, resumo, referencias, ...opcoes });

// mantém as casas em ordem cronológica da independência à proclamação da república
export const acontecimentos = [
  // casa 01 sobre a independência
  criarAcontecimento(
    1822,
    "A Independência",
    "Em 7 de setembro, D. Pedro declarou a separação de Portugal. A construção de um país independente ainda estava em disputa.",
    ["independencias", "primeiro"],
    {"artigo": "independencia", "marcoPrincipal": true, "icone": "bandeira", "categoria": "Formação do Estado", "data": "7 de setembro"}
  ),
  // casa 02 sobre um país, diferentes projetos
  criarAcontecimento(
    1822,
    "Um país, diferentes projetos",
    "As províncias e os grupos sociais não compartilhavam um único projeto de Independência. A autoridade do Rio de Janeiro ainda precisava se afirmar.",
    ["independencias"],
    {"categoria": "Política e sociedade"}
  ),
  // casa 03 sobre a aclamação de d. pedro
  criarAcontecimento(
    1822,
    "A aclamação de D. Pedro",
    "Em 12 de outubro, D. Pedro foi aclamado imperador. O Brasil independente adotava uma monarquia.",
    ["guerras"],
    {"icone": "coroa", "data": "12 de outubro"}
  ),
  // casa 04 sobre a primeira coroação
  criarAcontecimento(
    1822,
    "A primeira coroação",
    "A coroação de D. Pedro I ocorreu em 1º de dezembro. Cerimônias e símbolos ajudavam a afirmar o novo poder.",
    ["guerras"],
    {"data": "1º de dezembro"}
  ),
  // casa 05 sobre a unidade passou por guerras
  criarAcontecimento(
    1823,
    "A unidade passou por guerras",
    "A separação encontrou resistência em diferentes províncias. As guerras de independência envolveram militares, civis e pessoas escravizadas.",
    ["guerras"],
    {"icone": "espadas"}
  ),
  // casa 06 sobre o debate constituinte
  criarAcontecimento(
    1823,
    "O debate constituinte",
    "A Assembleia Constituinte começou a discutir a organização do novo Estado. Os limites da autoridade imperial estavam no centro da disputa.",
    ["primeiro", "constituinte"],
    {"icone": "documento"}
  ),
  // casa 07 sobre a independência na bahia
  criarAcontecimento(
    1823,
    "A Independência na Bahia",
    "Em 2 de julho, as tropas portuguesas deixaram Salvador. A luta na Bahia evidencia o protagonismo coletivo na Independência.",
    ["guerras"],
    {"artigo": "bahia", "marcoPrincipal": true, "icone": "espadas", "categoria": "Guerras de independência", "data": "2 de julho"}
  ),
  // casa 08 sobre a dissolução da assembleia
  criarAcontecimento(
    1823,
    "A dissolução da Assembleia",
    "Em 12 de novembro, D. Pedro I dissolveu a Constituinte. O texto constitucional seria redigido por um grupo de sua confiança.",
    ["constituinte"],
    {"data": "12 de novembro"}
  ),
  // casa 09 sobre uma constituição e quatro poderes
  criarAcontecimento(
    1824,
    "Uma Constituição e quatro poderes",
    "A Carta de 25 de março criou o Poder Moderador, exclusivo do imperador. Representação política e forte autoridade da Coroa coexistiam.",
    ["constituicao"],
    {"artigo": "constituicao", "marcoPrincipal": true, "icone": "documento", "categoria": "Poder e cidadania", "data": "25 de março"}
  ),
  // casa 10 sobre a cidadania tinha fronteiras
  criarAcontecimento(
    1824,
    "A cidadania tinha fronteiras",
    "A renda limitava os direitos políticos, e a escravidão continuava. Pessoas escravizadas não eram reconhecidas como cidadãos.",
    ["constituicao"],
    {"categoria": "Direitos e exclusões"}
  ),
  // casa 11 sobre a confederação do equador
  criarAcontecimento(
    1824,
    "A Confederação do Equador",
    "Pernambuco tornou-se o centro de uma rebelião republicana e federativa contra o governo de D. Pedro I. O movimento foi reprimido.",
    ["equador", "primeiro"],
    {"artigo": "equador", "icone": "espadas", "categoria": "Revoltas e resistências"}
  ),
  // casa 12 sobre reconhecimento internacional
  criarAcontecimento(
    1825,
    "Reconhecimento internacional",
    "Portugal reconheceu a Independência pelo tratado de 29 de agosto de 1825. A separação também exigiu negociação diplomática.",
    ["reconhecimento"],
    {"categoria": "Relações exteriores", "data": "29 de agosto"}
  ),
  // casa 13 sobre começa a guerra da cisplatina
  criarAcontecimento(
    1825,
    "Começa a Guerra da Cisplatina",
    "O Império e as Províncias Unidas do Rio da Prata entraram em guerra pelo território da Cisplatina, atual Uruguai.",
    ["cisplatina"],
    {"artigo": "cisplatina", "icone": "espadas", "categoria": "Relações exteriores"}
  ),
  // casa 14 sobre o parlamento começa a funcionar
  criarAcontecimento(
    1826,
    "O Parlamento começa a funcionar",
    "O Senado e a Câmara dos Deputados passaram a exercer a atividade legislativa regular. O Senado imperial tinha cargos vitalícios.",
    ["primeiro", "constituicao"],
    {"icone": "balanca"}
  ),
  // casa 15 sobre escolas de primeiras letras
  criarAcontecimento(
    1827,
    "Escolas de primeiras letras",
    "A lei de 15 de outubro determinou a criação de escolas de primeiras letras. O ensino previsto para meninas e meninos era diferente.",
    ["escolas"],
    {"icone": "livro", "categoria": "Educação e sociedade"}
  ),
  // casa 16 sobre um novo país no prata
  criarAcontecimento(
    1828,
    "Um novo país no Prata",
    "O acordo de paz encerrou a Guerra da Cisplatina e reconheceu a independência do território oriental. A derrota política desgastou o governo brasileiro.",
    ["cisplatina"]
  ),
  // casa 17 sobre a oposição ganha força
  criarAcontecimento(
    1830,
    "A oposição ganha força",
    "A morte do jornalista Libero Badaró agravou a crise política. A imprensa e as ruas tornaram-se espaços de contestação ao imperador.",
    ["badaro"],
    {"icone": "jornal"}
  ),
  // casa 18 sobre d. pedro i deixa o trono
  criarAcontecimento(
    1831,
    "D. Pedro I deixa o trono",
    "Em 7 de abril, D. Pedro I abdicou em favor de seu filho de cinco anos. Regentes passaram a governar em nome de D. Pedro II.",
    ["partidos", "almanaque"],
    {"artigo": "abdicacao", "marcoPrincipal": true, "icone": "coroa", "categoria": "Começam as Regências", "periodo": "regencias", "data": "7 de abril"}
  ),
  // casa 19 sobre um governo de regentes
  criarAcontecimento(
    1831,
    "Um governo de regentes",
    "A Regência Trina Provisória foi substituída pela Trina Permanente. Moderados, exaltados e restauradores disputavam o rumo do Império.",
    ["partidos"]
  ),
  // casa 20 sobre a guarda nacional
  criarAcontecimento(
    1831,
    "A Guarda Nacional",
    "A criação da Guarda Nacional fortaleceu o poder de elites locais. A defesa da ordem imperial dependia também desses proprietários e cidadãos armados.",
    ["guarda"],
    {"icone": "pessoas"}
  ),
  // casa 21 sobre uma lei contra o tráfico
  criarAcontecimento(
    1831,
    "Uma lei contra o tráfico",
    "A lei de 7 de novembro declarou livres os escravizados trazidos de fora do Império, com exceções previstas. Seu descumprimento permitiu a continuação do tráfico.",
    ["lei1831", "abolicaoLeis"],
    {"icone": "corrente", "categoria": "Escravidão e resistência"}
  ),
  // casa 22 sobre a justiça se aproxima do poder local
  criarAcontecimento(
    1832,
    "A justiça se aproxima do poder local",
    "O Código de Processo Criminal ampliou as atribuições dos juízes de paz. A organização da justiça também fazia parte da disputa sobre descentralização.",
    ["codigo"]
  ),
  // casa 23 sobre as províncias ganham assembleias
  criarAcontecimento(
    1834,
    "As províncias ganham assembleias",
    "O Ato Adicional reformou a Constituição, ampliou competências provinciais e estabeleceu uma regência una eletiva.",
    ["ato"],
    {"artigo": "ato", "marcoPrincipal": true, "icone": "balanca", "categoria": "Reformas políticas"}
  ),
  // casa 24 sobre a cabanagem
  criarAcontecimento(
    1835,
    "A Cabanagem",
    "No Grão-Pará, uma revolta de ampla participação popular chegou a tomar o governo provincial. A repressão prolongou-se até 1840.",
    ["cabanagem"],
    {"artigo": "cabanagem", "marcoPrincipal": true, "icone": "espadas", "categoria": "Revoltas e resistências"}
  ),
  // casa 25 sobre a revolta dos malês
  criarAcontecimento(
    1835,
    "A Revolta dos Malês",
    "Em Salvador, africanos escravizados e libertos, principalmente muçulmanos, organizaram um levante. A repressão foi severa.",
    ["males"],
    {"artigo": "males", "icone": "pessoas", "categoria": "Revoltas e resistências"}
  ),
  // casa 26 sobre a guerra dos farrapos
  criarAcontecimento(
    1835,
    "A Guerra dos Farrapos",
    "A Farroupilha começou no Rio Grande do Sul. Interesses econômicos regionais e conflitos políticos alimentaram uma guerra que duraria até 1845.",
    ["farroupilha"],
    {"artigo": "farroupilha", "icone": "espadas", "categoria": "Revoltas e resistências"}
  ),
  // casa 27 sobre feijó assume a regência una
  criarAcontecimento(
    1835,
    "Feijó assume a regência una",
    "Diogo Antônio Feijó tornou-se o primeiro regente uno eleito. Seu governo enfrentou oposição e revoltas provinciais.",
    ["partidos"]
  ),
  // casa 28 sobre a renúncia de feijó
  criarAcontecimento(
    1837,
    "A renúncia de Feijó",
    "Feijó renunciou em setembro. Araújo Lima assumiu interinamente e seria eleito regente no ano seguinte.",
    ["partidos"]
  ),
  // casa 29 sobre a sabinada
  criarAcontecimento(
    1837,
    "A Sabinada",
    "Na Bahia, os rebeldes propuseram uma república provisória até a maioridade de D. Pedro II. O movimento seria derrotado em 1838.",
    ["sabinada"],
    {"artigo": "sabinada", "icone": "espadas", "categoria": "Revoltas e resistências"}
  ),
  // casa 30 sobre a balaiada
  criarAcontecimento(
    1838,
    "A Balaiada",
    "A rebelião começou no Maranhão e reuniu sertanejos, artesãos e escravizados. Seus participantes tinham reivindicações e projetos diferentes.",
    ["balaiada"],
    {"artigo": "balaiada", "marcoPrincipal": true, "icone": "espadas", "categoria": "Revoltas e resistências"}
  ),
  // casa 31 sobre o regresso conservador
  criarAcontecimento(
    1840,
    "O regresso conservador",
    "A Lei de Interpretação do Ato Adicional restringiu parte da descentralização. O governo buscava recompor a autoridade central.",
    ["ato"],
    {"periodo": "regencias"}
  ),
  // casa 32 sobre um imperador aos catorze anos
  criarAcontecimento(
    1840,
    "Um imperador aos catorze anos",
    "Em 23 de julho, a maioridade de D. Pedro II foi antecipada. Encerravam-se as Regências e começava o Segundo Reinado.",
    ["segundo"],
    {"artigo": "maioridade", "marcoPrincipal": true, "icone": "coroa", "categoria": "Começa o Segundo Reinado", "periodo": "segundoReinado", "data": "23 de julho"}
  ),
  // casa 33 sobre a coroação de d. pedro ii
  criarAcontecimento(
    1841,
    "A coroação de D. Pedro II",
    "A sagração e a coroação ocorreram em 18 de julho de 1841. O imperador já governava desde o ano anterior.",
    ["almanaque"],
    {"icone": "coroa", "data": "18 de julho"}
  ),
  // casa 34 sobre novas revoltas liberais
  criarAcontecimento(
    1842,
    "Novas revoltas liberais",
    "Liberais de São Paulo e Minas Gerais se rebelaram contra medidas do governo central. A maioridade não havia encerrado as disputas de poder.",
    ["liberais"],
    {"icone": "espadas", "categoria": "Disputas políticas"}
  ),
  // casa 35 sobre o fim da farroupilha
  criarAcontecimento(
    1845,
    "O fim da Farroupilha",
    "Um acordo encerrou a Guerra dos Farrapos. A província permaneceu integrada ao Império, que continuava escravista.",
    ["farroupilha"]
  ),
  // casa 36 sobre imigração e colonização
  criarAcontecimento(
    1845,
    "Imigração e colonização",
    "Grupos de colonos germânicos chegaram a Petrópolis. A imigração teve experiências diversas em colônias, cidades e lavouras.",
    ["almanaque"],
    {"categoria": "Trabalho e sociedade"}
  ),
  // casa 37 sobre a política sobre os povos indígenas
  criarAcontecimento(
    1845,
    "A política sobre os povos indígenas",
    "O Regulamento das Missões buscava assimilar os povos indígenas. A expansão do Estado envolvia disputas sobre territórios e formas de vida.",
    ["indigenas"],
    {"icone": "folha", "categoria": "Territórios e sociedade"}
  ),
  // casa 38 sobre a pressão britânica
  criarAcontecimento(
    1845,
    "A pressão britânica",
    "O Bill Aberdeen autorizou a apreensão de navios envolvidos no tráfico. O confronto diplomático pressionava o governo brasileiro.",
    ["abolicaoLeis"],
    {"categoria": "Escravidão e relações exteriores"}
  ),
  // casa 39 sobre um parlamentarismo sob a coroa
  criarAcontecimento(
    1847,
    "Um parlamentarismo sob a Coroa",
    "Foi criado o cargo de presidente do Conselho de Ministros. O imperador conservava poderes decisivos sobre gabinetes e Câmara.",
    ["segundo"],
    {"icone": "balanca"}
  ),
  // casa 40 sobre a revolução praieira
  criarAcontecimento(
    1848,
    "A Revolução Praieira",
    "Em Pernambuco, uma rebelião associou disputa partidária e reivindicações sociais. Seu manifesto criticava o Poder Moderador.",
    ["praieira"],
    {"artigo": "praieira", "marcoPrincipal": true, "icone": "espadas", "categoria": "Revoltas e resistências"}
  ),
  // casa 41 sobre a lei eusébio de queirós
  criarAcontecimento(
    1850,
    "A Lei Eusébio de Queirós",
    "A lei de 4 de setembro ampliou a repressão ao tráfico transatlântico. A escravidão e o comércio interno de escravizados continuaram.",
    ["abolicaoLeis"],
    {"artigo": "eusebio", "marcoPrincipal": true, "icone": "corrente", "categoria": "Escravidão e transformação"}
  ),
  // casa 42 sobre terra, propriedade e exclusão
  criarAcontecimento(
    1850,
    "Terra, propriedade e exclusão",
    "A Lei de Terras estabeleceu a compra como regra para adquirir terras devolutas. Essa barreira dificultava o acesso das pessoas pobres à propriedade.",
    ["terras"],
    {"artigo": "terras", "icone": "folha", "categoria": "Terra e desigualdade"}
  ),
  // casa 43 sobre o tráfico muda de direção
  criarAcontecimento(
    1850,
    "O tráfico muda de direção",
    "Com a repressão ao tráfico atlântico, cresceu o comércio interno de escravizados. Famílias foram separadas e pessoas deslocadas para o Sudeste cafeeiro.",
    ["abolicaoLeis"],
    {"categoria": "Escravidão e sociedade", "data": "Década de 1850"}
  ),
  // casa 44 sobre o café organiza a economia
  criarAcontecimento(
    1850,
    "O café organiza a economia",
    "A cafeicultura expandia riquezas e poder no Vale do Paraíba. A produção dependia intensamente do trabalho de pessoas escravizadas.",
    ["cafe", "segundo"],
    {"icone": "folha", "data": "Década de 1850", "categoria": "Economia e trabalho"}
  ),
  // casa 45 sobre bancos e negócios
  criarAcontecimento(
    1853,
    "Bancos e negócios",
    "A criação de um novo Banco do Brasil integrou a reorganização econômica do Segundo Reinado. Comércio e cafeicultura ampliavam a demanda por crédito.",
    ["segundo"]
  ),
  // casa 46 sobre o império sobre trilhos
  criarAcontecimento(
    1854,
    "O Império sobre trilhos",
    "Em 30 de abril, foi inaugurada a Estrada de Ferro Mauá, a primeira do Brasil. Seu trecho inicial tinha 14,5 quilômetros.",
    ["ferrovia"],
    {"artigo": "ferrovia", "marcoPrincipal": true, "icone": "trem", "categoria": "Economia e infraestrutura", "data": "30 de abril"}
  ),
  // casa 47 sobre a malha ferroviária se expande
  criarAcontecimento(
    1858,
    "A malha ferroviária se expande",
    "A primeira linha da Estrada de Ferro D. Pedro II foi inaugurada. As ferrovias ajudavam a conectar lavouras, cidades e portos.",
    ["transportes"],
    {"icone": "trem"}
  ),
  // casa 48 sobre luiz gama e os caminhos da liberdade
  criarAcontecimento(
    1864,
    "Luiz Gama e os caminhos da liberdade",
    "Documentos e jornais registram a atuação de Luiz Gama em defesa da liberdade. A luta contra a escravidão também acontecia nos tribunais e na imprensa.",
    ["gama"],
    {"icone": "livro", "categoria": "Abolicionismo", "data": "Década de 1860"}
  ),
  // casa 49 sobre a guerra do paraguai
  criarAcontecimento(
    1864,
    "A Guerra do Paraguai",
    "A crise na região do Prata escalou para uma guerra. Brasil, Argentina, Uruguai e Paraguai seriam profundamente atingidos.",
    ["paraguai", "guerraArquivoNacional"],
    {"artigo": "paraguai", "marcoPrincipal": true, "icone": "espadas", "categoria": "Relações exteriores"}
  ),
  // casa 50 sobre a tríplice aliança
  criarAcontecimento(
    1865,
    "A Tríplice Aliança",
    "Brasil, Argentina e Uruguai formalizaram uma aliança contra o Paraguai. O conflito, iniciado em 1864, se ampliava.",
    ["paraguai"]
  ),
  // casa 51 sobre recrutar para a guerra
  criarAcontecimento(
    1865,
    "Recrutar para a guerra",
    "Voluntários, homens recrutados e pessoas escravizadas participaram do esforço militar brasileiro. A guerra expôs contradições da ordem escravista.",
    ["paraguai"],
    {"icone": "pessoas", "categoria": "Guerra e sociedade"}
  ),
  // casa 52 sobre combates e perdas
  criarAcontecimento(
    1866,
    "Combates e perdas",
    "A guerra produziu batalhas de grandes proporções e enormes perdas humanas. Epidemias e fome somaram-se à violência dos combates.",
    ["paraguai", "guerraArquivoNacional"]
  ),
  // casa 53 sobre a campanha se prolonga
  criarAcontecimento(
    1868,
    "A campanha se prolonga",
    "As forças brasileiras avançaram depois de anos de dificuldades. A expectativa de uma guerra breve havia sido desmentida.",
    ["paraguai"]
  ),
  // casa 54 sobre assunção é ocupada
  criarAcontecimento(
    1869,
    "Assunção é ocupada",
    "As forças aliadas ocuparam a capital paraguaia. A guerra continuou mesmo após a queda de Assunção.",
    ["paraguai"]
  ),
  // casa 55 sobre o fim da guerra
  criarAcontecimento(
    1870,
    "O fim da guerra",
    "Solano López morreu em 1º de março. O Paraguai estava devastado, e o conflito deixava custos sociais e financeiros profundos.",
    ["paraguai", "guerraArquivoNacional"],
    {"categoria": "Consequências da guerra", "data": "1º de março"}
  ),
  // casa 56 sobre a república entra no debate
  criarAcontecimento(
    1870,
    "A República entra no debate",
    "O Manifesto Republicano de 3 de dezembro marcou uma nova organização da propaganda contra a monarquia. O futuro político continuava aberto.",
    ["manifesto", "republica"],
    {"artigo": "republicanismo", "marcoPrincipal": true, "icone": "jornal", "categoria": "Projetos de país", "data": "3 de dezembro"}
  ),
  // casa 57 sobre a lei do ventre livre
  criarAcontecimento(
    1871,
    "A Lei do Ventre Livre",
    "A lei declarou livres os filhos de mulheres escravizadas nascidos a partir de 28 de setembro. Tutela e trabalho compulsório limitaram essa liberdade.",
    ["ventre"],
    {"artigo": "ventre", "marcoPrincipal": true, "icone": "documento", "categoria": "Escravidão e direitos", "data": "28 de setembro"}
  ),
  // casa 58 sobre o primeiro recenseamento geral
  criarAcontecimento(
    1872,
    "O primeiro recenseamento geral",
    "O primeiro censo nacional reuniu informações sobre a população do Império. Seus dados também registravam uma sociedade ainda escravista.",
    ["censo", "abolicaoLeis"],
    {"icone": "pessoas", "categoria": "População e sociedade"}
  ),
  // casa 59 sobre a questão religiosa
  criarAcontecimento(
    1872,
    "A Questão Religiosa",
    "Bispos e governo entraram em conflito sobre a presença de maçons em irmandades. A união entre Igreja e Estado mostrava suas tensões.",
    ["religiosa", "constituicao"],
    {"artigo": "religiosa", "icone": "igreja", "categoria": "Igreja e poder"}
  ),
  // casa 60 sobre prisões e desgaste político
  criarAcontecimento(
    1874,
    "Prisões e desgaste político",
    "A prisão dos bispos aprofundou a Questão Religiosa. As relações de setores da Igreja com a Coroa ficaram abaladas.",
    ["religiosa"]
  ),
  // casa 61 sobre uma seca, uma crise social
  criarAcontecimento(
    1877,
    "Uma seca, uma crise social",
    "A grande seca atingiu o Nordeste, provocando fome e deslocamentos. A assistência aos retirantes tornou-se alvo de denúncias.",
    ["seca", "patrocinio"],
    {"artigo": "seca", "marcoPrincipal": true, "icone": "sol", "categoria": "Sociedade e desigualdade", "data": "1877–1879"}
  ),
  // casa 62 sobre a imprensa denuncia a fome
  criarAcontecimento(
    1878,
    "A imprensa denuncia a fome",
    "José do Patrocínio acompanhou a crise no Ceará. Imagens e textos levaram as condições dos retirantes ao debate público.",
    ["patrocinio", "seca"],
    {"icone": "jornal"}
  ),
  // casa 63 sobre a abolição se organiza
  criarAcontecimento(
    1880,
    "A abolição se organiza",
    "José do Patrocínio e Joaquim Nabuco participaram da criação da Sociedade Brasileira Contra a Escravidão. A campanha ganhou associações e jornais.",
    ["patrocinio"],
    {"icone": "pessoas", "categoria": "Abolicionismo"}
  ),
  // casa 64 sobre voto direto, participação restrita
  criarAcontecimento(
    1881,
    "Voto direto, participação restrita",
    "A Lei Saraiva instituiu eleições diretas. As exigências de renda, comprovação e alfabetização restringiram fortemente o eleitorado.",
    ["saraiva"],
    {"artigo": "saraiva", "icone": "voto", "categoria": "Cidadania e exclusão"}
  ),
  // casa 65 sobre uma luta que continuava
  criarAcontecimento(
    1882,
    "Uma luta que continuava",
    "Luiz Gama morreu em 1882. Seu trabalho na imprensa e na defesa da liberdade integra uma mobilização muito mais ampla contra a escravidão.",
    ["gama"],
    {"icone": "livro", "categoria": "Abolicionismo"}
  ),
  // casa 66 sobre a liberdade avança pelas províncias
  criarAcontecimento(
    1884,
    "A liberdade avança pelas províncias",
    "Em 25 de março, o Ceará aboliu a escravidão. A mobilização local antecipou a lei nacional em quatro anos.",
    ["ceara", "abolicaoLeis"],
    {"artigo": "ceara", "marcoPrincipal": true, "icone": "corrente", "categoria": "Abolicionismo", "data": "25 de março"}
  ),
  // casa 67 sobre o amazonas também abole
  criarAcontecimento(
    1884,
    "O Amazonas também abole",
    "A escravidão foi abolida no Amazonas em 1884. A ordem escravista perdia espaço em diferentes regiões do Império.",
    ["abolicaoLeis"]
  ),
  // casa 68 sobre a lei dos sexagenários
  criarAcontecimento(
    1885,
    "A Lei dos Sexagenários",
    "A liberdade legal a partir dos sessenta anos veio com exigências de serviço aos antigos senhores. A escravidão geral ainda permanecia.",
    ["sexagenarios"],
    {"artigo": "sexagenarios", "icone": "documento", "categoria": "Escravidão e direitos"}
  ),
  // casa 69 sobre a questão militar
  criarAcontecimento(
    1886,
    "A Questão Militar",
    "Conflitos entre setores militares e o governo acirraram-se. O republicanismo de parte dos jovens oficiais já existia antes dessa crise.",
    ["republica"],
    {"icone": "espadas", "categoria": "Crise da monarquia", "data": "1886–1887"}
  ),
  // casa 70 sobre resistir, fugir, conquistar liberdade
  criarAcontecimento(
    1887,
    "Resistir, fugir, conquistar liberdade",
    "A resistência dos escravizados e a pressão abolicionista aceleravam o desmonte do sistema. A transformação ultrapassava os debates parlamentares.",
    ["abolicaoLeis", "gama"],
    {"icone": "pessoas", "categoria": "Abolicionismo"}
  ),
  // casa 71 sobre a abolição da escravidão
  criarAcontecimento(
    1888,
    "A abolição da escravidão",
    "Em 13 de maio, a Lei Áurea extinguiu legalmente a escravidão. A conquista resultou de uma longa luta social.",
    ["aurea", "aureaArquivoNacional"],
    {"artigo": "aurea", "marcoPrincipal": true, "icone": "corrente", "categoria": "Liberdade e seus desafios", "data": "13 de maio"}
  ),
  // casa 72 sobre liberdade e desigualdade
  criarAcontecimento(
    1888,
    "Liberdade e desigualdade",
    "A lei não criou um programa de reparação ou distribuição de terras. Libertos enfrentaram o racismo e barreiras sociais que a abolição não eliminou.",
    ["aurea", "terras"],
    {"categoria": "Depois da abolição"}
  ),
  // casa 73 sobre o fim do império
  criarAcontecimento(
    1889,
    "O fim do Império",
    "Em 15 de novembro, um golpe militar derrubou a monarquia e instituiu a República. Terminava o regime iniciado em 1822.",
    ["republica"],
    {"artigo": "republica", "marcoPrincipal": true, "icone": "bandeira", "categoria": "A Proclamação da República", "data": "15 de novembro"}
  ),
];

// identifica os três períodos usados na navegação e na barra de anos
export const periodosHistoricos = {
  primeiroReinado: { rotulo: "Primeiro Reinado", anos: "1822 — 1831" },
  regencias: { rotulo: "Regências", anos: "1831 — 1840" },
  segundoReinado: { rotulo: "Segundo Reinado", anos: "1840 — 1889" },
};

// respeita o período explícito da casa antes de deduzir o período pelo ano
export function obterPeriodo(acontecimento) {
  return acontecimento.periodo || (acontecimento.ano < 1831 ? 'primeiroReinado' : acontecimento.ano < 1840 ? 'regencias' : 'segundoReinado');
}
