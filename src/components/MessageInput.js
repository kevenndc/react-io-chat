import React from 'react'

export default class MessageInput extends React.Component {
  constructor() {
    super()
    this.state = {
      message : ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      message : e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.message)
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          className="message-input" 
          value={this.state.message} 
          onChange={this.handleChange} 
        />
      </form>
    )
  }
} 