import React from 'react'
import OnlineUsers from './OnlineUsers'
import Chat from './Chat'

export default class ChatScreen extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="chat-screen-wrapper">
        <OnlineUsers users={this.props.onlineUsers} />
        <Chat />
      </div>
    )
  }
}