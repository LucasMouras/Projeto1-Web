const bd = require('./../model/BD')

function insert() {
  var login = document.querySelector('.email')
  var senha = document.querySelector('.senha')

  bd.connect()
  bd.query(`Insert into users values ('ettesd1','224')`)

}

