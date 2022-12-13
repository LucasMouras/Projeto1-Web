const e = require('express')
const { isBuffer } = require('util')


let http = require('http'),
  path = require('path'),
  express = require('express'),
  app = express()

let User = require('./model/usuario')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'view'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))

app.get('/', (re, res) => {
  res.render('inicio')

})


app.get('/cadastro', (req, res) => {
  res.render('cadastro')
})


app.get('/logar', (req, res) => {
  res.render('logar')
})

app.get('/logado', (req, res) => {
  res.render('logado')
})

app.post('/cad', async (req, res) => {
  let login = req.body.login
  var senha = req.body.senha
  console.log(login, senha)

  await User.insert(login, senha)
  res.redirect('/logar')
})

app.post('/logar', async (req, res) => {
  let login = req.body.login
  var senha = req.body.senha
  let result = await User.existeNoBanco(login, senha)

  if (result > 0) {
    res.redirect('/logado')
  } else {
    res.redirect('/cadastro')

  }
})





app.listen(3000)