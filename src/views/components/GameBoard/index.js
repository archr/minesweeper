import React from 'react'
import classNames from 'classnames'
import './style.scss'

class GameBoard extends React.Component {
  render () {
    const { game, settings } = this.props
    const matrix = []

    for (let i = 1; i <= game.rows; i++) {
      const cells = []

      for (let j = 1; j <= game.cols; j++) {
        cells.push(
          <div
            className={classNames(`square-${settings.zoom}`, {
              blank: true
            })}
          />
        )
      }

      matrix.push(<div className='row'>{cells}</div>)
    }

    return (
      <div className='game-board'>
        <div className='matrix'>
          {matrix}
        </div>
      </div>
    )
  }
}

export default GameBoard
