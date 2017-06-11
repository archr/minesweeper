import React from 'react'
import classNames from 'classnames'
import './style.scss'

class GameBoardSpace extends React.Component {
  render () {
    const { row, col, space, zoom, onSelect, gameOver } = this.props
    const open = space.explored && space.holds !== -1
      ? `open-${space.holds}`
      : ''
    const bombRevealed = gameOver && space.holds === -1

    return (
      <div
        className={classNames(`space-${zoom}`, `square-${zoom}`, open, {
          blank: !space.explored && !bombRevealed,
          'bomb-revealed': bombRevealed && !space.explored,
          'bomb-dead': bombRevealed && space.explored
        })}
        onClick={() => !gameOver && onSelect(row, col)}
      />
    )
  }
}

export default GameBoardSpace
