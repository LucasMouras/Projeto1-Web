const Client = require('pg').Client

const client = new Client({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432,
  database: 'SiteWeb'
})

module.exports = client

