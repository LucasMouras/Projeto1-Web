const bd = require('./Banco/BD')

function registrar(usuario, senha) {
  bd.query(`Insert into users values('${usuario}','${senha}')`)
}