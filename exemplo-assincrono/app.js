const fs = require('fs');

console.log('1. Início do programa');

fs.readFile('exemplo.txt', 'utf8', (err, data) => {
  console.log('3. Entrou no callback da leitura do arquivo');

  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  console.log('4. Conteúdo do arquivo:', data);
});

console.log('2. Leitura do arquivo iniciada...');
console.log('5. Fim do programa (antes da leitura terminar)');