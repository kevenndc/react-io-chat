import React from 'react'

export default class Message extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      user: ''
    }
  }

  componentDidMount() {
    this.setState({
      content: this.props.data.msg,
      user: this.props.data.user
    })
  }

  render() {
    return (
      <div className="message-box">
        <p><span className="msg-username">{this.state.user}</span>: {this.state.content}</p>
      </div>
    )
  }
}