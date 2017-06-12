import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import LeaderboardUser from '../LeaderboardUser'
import './style.scss'

function getUsers (users, level) {
  return users
    .filter(user => user.level === level)
    .sort((a, b) => b.score - a.score)
}

class Leaderboard extends React.Component {
  constructor () {
    super()

    this.state = {
      filter: 'today'
    }
  }

  render () {
    const { leaderboard } = this.props
    const { filter } = this.state
    const users = leaderboard[filter]
    const experts = getUsers(users, 'Expert')
    const intermediates = getUsers(users, 'Intermediate')
    const beginners = getUsers(users, 'Beginner')

    return (
      <div className='leaderboard'>
        <div className='header'>
          {[
            ['Today', 'today'],
            ['This Week', 'week'],
            ['This Month', 'month'],
            ['All Time', 'allTime']
          ].map(section =>
            <div
              key={section[1]}
              className={classNames('menu', {
                selected: filter === section[1]
              })}
              onClick={() => this.setState({ filter: section[1] })}
            >
              {section[0]}
            </div>
          )}
        </div>

        <table>
          <tbody>
            <tr>
              <th>Expert</th>
              <th>Intermediate</th>
              <th>Beginner</th>
            </tr>
            <tr>
              <td>
                {experts.map((user, i) =>
                  <LeaderboardUser key={i} user={user} number={i + 1} />
                )}
              </td>
              <td>
                {intermediates.map((user, i) =>
                  <LeaderboardUser key={i} user={user} number={i + 1} />
                )}
              </td>
              <td>
                {beginners.map((user, i) =>
                  <LeaderboardUser key={i} user={user} number={i + 1} />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  leaderboard: state.leaderboard
})

export default connect(mapStateToProps)(Leaderboard)
