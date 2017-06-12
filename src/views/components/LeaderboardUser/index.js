import React from 'react'
import './style.scss'

class LeaderboardUser extends React.Component {
  render () {
    const { user, number } = this.props

    return (
      <div className='leaderboard-user'>
        <div className='number'>{number}.</div>
        <div className='name'>{user.name}</div>
        <div className='score'>{user.score}</div>
      </div>
    )
  }
}

export default LeaderboardUser
