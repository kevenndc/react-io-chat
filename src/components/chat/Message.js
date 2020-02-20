import React from 'react'
import {socket} from '../../api'

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

  render() {
    return (
      <div className={"message-box" + (this.state.clientUserMsg ? " client-msg" : '')}>
        <p><span className="msg-username">{this.state.user}</span>: {this.state.content}</p>
      </div>
    )
  }
}