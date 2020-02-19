const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const users = []
const connections = []

io.on('connection', socket => {
  connections.push(socket)
  console.log(`${connections.length} conexões abertas`)

  socket.on('disconnect', () => {
    connections.splice(connections.indexOf(socket), 1)
    users.splice(users.indexOf(socket.username), 1)
    updateUsers()
    console.log('disconnected')
    console.log(`${connections.length} connection left`)
  })

  socket.on('user logged in', user => {
    users.push(user)
    socket.username = user
    updateUsers()
  })

  socket.on('new message', message => {
    console.log(message)
    io.sockets.emit('update messages', {msg : message, user : socket.username})
  })

  function updateUsers() {
    io.sockets.emit('update users', users)
  }
})


server.listen(3000)