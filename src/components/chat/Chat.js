import React from 'react'
import MessageInput from './MessageInput'
import MessageArea from './MessageArea'
import Message from './Message'
import {socket} from '../../api'

export default class Chat extends React.Component {
  constructor() {
    super()
    this.state = {
      messages : []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    socket.on('update messages', data => {
      if (data.user != this.props.user) {
        this.setState({
          messages : [...this.state.messages, <Message clientUserMsg={false} key={Date.now()} data={data} />]
        })
      }
    })
  }

  handleSubmit(message) {
    console.log(message)
    console.log(this.props.user)
    this.setState({
      messages : [...this.state.messages, <Message clientUserMsg={true} key={Date.now()} data={{msg : message, user : this.props.user}} />]
    })

    socket.emit('new message', message)
  }

  render() {
    return (
      <div className="chat-message-area-wrapper">
        <MessageArea messageArray={this.state.messages} />
        <MessageInput onSubmit={this.handleSubmit} />
      </div>
    )
  }
} 