import express from 'express';

const app = express();
const port = 8080;

// Rota principal que responde com "Olá mundo | EXPRESS"
app.get('/', (req, res) => {
  res.send('Olá usuário | EXPRESS');
});

// Rota secundária
app.get('/rotaB', (req, res) => {
  res.send('ROTA B - Olá usuário | EXPRESS');
});

// Rota guiada
app.get('/rota/:numeroRota', (req, res) => {
  let numerorota = req.params.numeroRota
  res.send(`ROTA_${numerorota} - Olá usuário | EXPRESS`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});