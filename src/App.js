import React from 'react'
import logo from './logo.svg'
import './App.css';
import LoginScreen from './components/login/LoginScreen'
import ChatScreen from './components//chat/ChatScreen'
import {socket, userLoggedIn} from './api'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isLogged : false,
      user : '',
      onlineUsers : []
    }

    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this)
  }

  componentDidMount() {
    socket.on('update users', users => {
      this.setState({
        onlineUsers : users
      })
    })
  }

  handleUserFormSubmit(user) {
    userLoggedIn(user)
    this.setState({
      isLogged : true,
      user : user
    })
  }

  render() {
    return ( 
      this.state.isLogged ?
      <ChatScreen onlineUsers={this.state.onlineUsers} user={this.state.user} /> :
      <LoginScreen onSubmit={this.handleUserFormSubmit} />
    )
  }
}

export default App;
