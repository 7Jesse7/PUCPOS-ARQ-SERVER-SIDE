var express = require('express');
var router = express.Router();

/* GET users lista. */
router.get('/', function(req, res, next) {
  res.send('Lista Todos os Usuários');
});

/* GET users lista. */
router.get('/:nome', function(req, res, next) {
  const nome = req.params.nome
  res.send(`Lista Usuário de nome: ${nome}`);
});

/* POST user .*/
router.post('/', (req, res) => {
  res.send('Cria um Usuários')
});

/* DELETE User. */
router.delete('/',(req,res) => {
  res.send('Deleta um usuário')
});

/* PUT User altera*/
router.put('/', (req,res) => {
  res.send('Altera Usuario')
});

module.exports = router;
