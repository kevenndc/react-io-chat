import React from 'react'

export default class Message extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      user: '',
      clientUserMsg : false,
      hour : '',
      minutes : ''
    }
  }

  componentDidMount() {
    this.setState({
      content: this.props.data.msg,
      user: this.props.data.user,
      clientUserMsg: this.props.clientUserMsg,
      hour : new Date(this.props.time).getHours(),
      minutes : new Date(this.props.time).getMinutes()
    })
  }

  // the class 'c-msg' displays the message that the user sent differently from the messages received from other messages
  render() {
    return (
      <div className="message-box" id={(this.state.clientUserMsg && "c-msg")}>
        <p>
          {!this.state.clientUserMsg && (<span className="msg-username">{this.state.user}</span>)}
          {this.state.content}
          <span class="msg-time">{`${this.state.hour}:${this.state.minutes}`}</span>
        </p>
      </div>
    )
  }
}