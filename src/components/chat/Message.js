import React from 'react'

export default class Message extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      user: '',
      clientUserMsg : false
    }
  }

  componentDidMount() {
    this.setState({
      content: this.props.data.msg,
      user: this.props.data.user,
      clientUserMsg: this.props.clientUserMsg
    })
  }

  // the class 'c-msg' displays the message that the user sent differently from the messages received from other messages
  render() {
    return (
      <div className="message-box" id={(this.state.clientUserMsg && "c-msg")}>
        <p>
          {!this.state.clientUserMsg && (<span className="msg-username">{this.state.user}</span>)}
          {this.state.content}
        </p>
      </div>
    )
  }
}