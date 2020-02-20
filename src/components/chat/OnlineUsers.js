import React from 'react'
import User from './User'

export default class OnlineUsers extends React.Component {
  constructor() {
    super()
  }

  listUsers() {
    const usersComponents = this.props.users.map(user => {
      return <User key={user} name={user} />
    })

    return usersComponents
  }

  render() {
    return (
      <div className="online-users-col">
        <h2 className="online-users-header">Usuários Online</h2>
        <div className="online-users">
          {this.listUsers()}
        </div>
      </div>
    )
  }
}