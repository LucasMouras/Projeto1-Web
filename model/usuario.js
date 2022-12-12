const bd = require('./../Banco/BD');

module.exports = class User {
  static async insert(login, senha) {
    bd.connect()
    bd.query(`Insert into users values('${login}','${senha}')`)
  }

  static async existeNoBanco(login, senha) {
    bd.connect()
    const result = bd.query(`select login from users where login = '${login}' and senhha = '${senha}'`)
    return (await result).rowCount
  }

}
