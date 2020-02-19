import React from 'react'

export default class LoginScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      username : ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      username : e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  render() {
    return (
      <div>
        <form id="userFormArea" onSubmit={this.handleSubmit}>
          <input id="userInput" placeholder="Nome de usuário" onChange={this.handleChange} />
          <input type="submit" value="Entrar" id="userFormSubmit" />
        </form>
      </div>
    )
  }
}