const fs = require('fs/promises');

async function lerArquivo() {
  console.log('1. Início da leitura');

  try {
    const data = await fs.readFile('exemplo.txt', 'utf8');
    console.log('2. Conteúdo do arquivo:', data);
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
  }

  console.log('3. Fim da leitura');
}

console.log('0. Antes de chamar a função');
lerArquivo();
console.log('4. Depois de chamar a função');