// importa as funções de arquivos com nomes locais em português
import { mkdir as criarPasta, copyFile as copiarArquivo, rm as removerPasta, readFile as lerArquivo, writeFile as escreverArquivo } from 'node:fs/promises';
import { dirname as obterPasta, resolve as resolverCaminho } from 'node:path';
import { fileURLToPath as converterEnderecoParaCaminho } from 'node:url';

// define a pasta do projeto e a saída convencional para hospedagem estática
const pastaProjeto = obterPasta(converterEnderecoParaCaminho(import.meta.url));
const pastaDestino = resolverCaminho(pastaProjeto, 'dist');

// recria a saída para evitar arquivos antigos depois de renomeações
await removerPasta(pastaDestino, { recursive: true, force: true });
await criarPasta(pastaDestino, { recursive: true });

// copia somente os arquivos que fazem parte do site publicado
const arquivosPublicados = ['index.html', 'style.css', 'principal.js', 'dadosHistoricos.js', 'icones.js', 'iconeSite.svg'];
for (const nomeArquivo of arquivosPublicados) {
  await copiarArquivo(resolverCaminho(pastaProjeto, nomeArquivo), resolverCaminho(pastaDestino, nomeArquivo));
}

// lê os arquivos na ordem necessária para formar a prévia independente
const conteudos = await Promise.all(
  ['index.html', 'style.css', 'dadosHistoricos.js', 'icones.js', 'principal.js', 'iconeSite.svg']
    .map((nomeArquivo) => lerArquivo(resolverCaminho(pastaProjeto, nomeArquivo), 'utf8'))
);
const [pagina, estilos, dadosHistoricos, icones, codigoPrincipal, iconeSite] = conteudos;

// reúne os módulos sem importações externas para abrir a prévia diretamente
const codigoReunido = [dadosHistoricos, icones, codigoPrincipal].join('\n')
  .split('\n')
  .filter((linha) => !linha.startsWith('import '))
  .join('\n')
  .replaceAll('export const ', 'const ')
  .replaceAll('export function ', 'function ');

// insere os estilos os módulos e o ícone no mesmo documento
const previa = pagina
  .replace('<link rel="stylesheet" href="./style.css">', `<style>${estilos}</style>`)
  .replace('<script type="module" src="./principal.js"></script>', `<script type="module">${codigoReunido.replaceAll('</script', '<\\/script')}</script>`)
  .replace('href="./iconeSite.svg"', `href="data:image/svg+xml,${encodeURIComponent(iconeSite)}"`);

// salva a prévia e informa onde os arquivos de publicação foram preparados
await escreverArquivo(resolverCaminho(pastaProjeto, 'previa.html'), previa);
console.log('Site estático preparado em dist/.');
