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
    if(this.state.username === '' && e.target.value === ' ') return
    this.setState({
      username : e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.username === '') return
    this.props.onSubmit(this.state.username)
  }

  render() {
    return (
      <div className="login-screen-wrapper">
        <form className="user-form" onSubmit={this.handleSubmit}>
          <input 
            className="user-input" 
            placeholder="Nome de usuário" 
            value={this.state.username} 
            onChange={this.handleChange} 
          />
          <input 
            type="submit" 
            value="Entrar" 
            className="user-form-submit-btn" 
          />
        </form>
      </div>
    )
  }
}