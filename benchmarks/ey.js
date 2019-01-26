'use strict'

const ey = require('ey')
    , http = require('http')

const app = ey()

app.get('/', (req, res) => {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({ hello: 'world' }))
})

const server = http.createServer(app)

server.listen(3000)
