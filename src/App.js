import React from 'react'
import logo from './logo.svg'
import './App.css';
import LoginScreen from './components/LoginScreen'
import userLoggedIn from './api'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogged : false
    }
  }

  handleUserFormSubmit(user) {
    userLoggedIn(user)
    alert(user)
  }

  render() {
    return (
      <LoginScreen onSubmit={this.handleUserFormSubmit} />
    )
  }
}

export default App;
