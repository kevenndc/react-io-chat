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

/**
 * the 'if' statemant ensures that if the message received from server is the same that the client user
 *  sent it won't show twice by comparing the 'user' using the socket and the user that sent the message
/*/
  componentDidMount() {
    socket.on('update messages', data => {
      if (data.user !== this.props.user) {
        this.setState({
          messages : [
            ...this.state.messages, 
            <Message 
              clientUserMsg={false} 
              key={Date.now()} 
              data={data} 
              time={Date.now()}
            />
          ]
        })
      }

      this.scrollBottom()
    })
  }

  // immediately renders the the message the user is sending in his client view and then send it to the server and other users
  handleSubmit(message) {
    console.log(message)
    console.log(this.props.user)
    this.setState({
      messages : [
        ...this.state.messages, 
        <Message 
          clientUserMsg={true} 
          key={Date.now()} 
          data={{msg : message, user : this.props.user}} 
          time={Date.now()}
        />
      ]
    })

    socket.emit('new message', message)
  }

  scrollBottom() {
    let $messageArea = document.querySelector('.message-area')
    $messageArea.scrollTop = $messageArea.scrollHeight
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