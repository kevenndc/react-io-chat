import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3000')

export default function userLoggedIn(username) {
  socket.emit('user logged in', username)
}
