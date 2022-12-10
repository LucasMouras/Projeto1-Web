const pg = require('pg')

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'SiteWeb',
  password: '1234',
  port: 5432,
})

function registrar(usuario, senha) {
  bd.query(`Insert into users values('${usuario}','${senha}')`)
}

module.exports = client
const login = require('./login')


window.onload = function () {

  var logado = document.cookie.split('Token=')[1]
  if (!(logado === "" || document.cookie === "")) {

    var login = document.querySelector('.login')
    var ddd = document.querySelector('.pesquisaDDD')

    login.className = 'loginOff'
    ddd.className = 'pesquisaDDD show'

  }
}


document.querySelector('.btnregistrar').addEventListener('click', () => {
  var user = document.querySelector('.email').value
  var senha = document.querySelector('.senha').value
  registrar(user, senha)
  console.log('Deu bom')
})


function deslogar() {

  document.cookie = `Token=`

  location.reload(true)


}



function usaApiDDD() {
  var request = new XMLHttpRequest()
  var lista = document.querySelector('.lista')
  lista.innerHTML = ""
  request.open("GET", `https://brasilapi.com.br/api/ddd/v1/${document.querySelector('.ddd').value}`, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      var cidadesOBJ = JSON.parse(request.responseText)
      cidadesOBJ = cidadesOBJ.cities
      var cidades = Object.values(cidadesOBJ)

      for (i in cidades) {
        var li = document.createElement('li')
        li.innerHTML = cidades[i]
        lista.appendChild(li)

      }

    }
  }
  request.send()
}