const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const users = []
const connections = []



// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/public/index.html`)
// })

io.on('connection', socket => {
  connections.push(socket)
  console.log(`${connections.length} conexões abertas`)

  socket.on('disconnect', () => {
    connections.splice(connections.indexOf(socket), 1)
    console.log('disconnected')
    console.log(`${connections.length} connection left`)
  })

  socket.on('user logged in', username => {
    console.log(username)
  })
})

server.listen(3000)