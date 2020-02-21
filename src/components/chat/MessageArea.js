import React from 'react'

export default class MessageArea extends React.Component {

  render() {
    return (
      <div className="message-area">
        {this.props.messageArray}
      </div>
    )
  }
}