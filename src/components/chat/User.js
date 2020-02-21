import React from 'react'

export default class User extends React.Component {

  render() {
    return (
      <div className="user-item">
        <span className="username">{this.props.name}</span>
      </div>
    )
  }
}