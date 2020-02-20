import React from 'react'
import Message from './Message'
import {socket} from '../../api'

export default class MessageArea extends React.Component {
  constructor() {
    super()
    this.state = {
      messages : []
    }

  }

  // componentDidMount() {
  //   socket.on('update messages', data => {
  //     const updatedArray = this.state.messages.concat(<Message key={Date.now()} data={data} />)
  //     this.setState({
  //         messages : updatedArray
  //     })
  //   })
  // }

  render() {
    return (
      <div className="message-area">
        {this.props.messageArray}
      </div>
    )
  }
}