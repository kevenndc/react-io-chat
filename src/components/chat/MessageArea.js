import React from 'react'

export default class MessageArea extends React.Component {
  constructor() {
    super()
    this.state = {
      messages : []
    }

  }

  render() {
    return (
      <div className="message-area">
        {this.props.messageArray}
      </div>
    )
  }
}