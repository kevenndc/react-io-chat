import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3000')

function userLoggedIn(username) {
  socket.emit('user logged in', username)
}

export {socket, userLoggedIn}