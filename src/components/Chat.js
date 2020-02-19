import React from 'react'
import MessageInput from './MessageInput'
import MessageArea from './MessageArea'
import {socket} from '../api'

export default class Chat extends React.Component {

  handleSubmit(message) {
    socket.emit('new message', message)
  }

  render() {
    return (
      <div className="chat-message-area-wrapper">
        <MessageArea />
        <MessageInput onSubmit={this.handleSubmit} />
      </div>
    )
  }
} 