import React from 'react'
import classNames from 'classnames'
import './style.scss'

class GameBoardSpace extends React.Component {
  onContextMenu = (e) => {
    e.preventDefault()

    const { onFlagSpace, row, col } = this.props
    onFlagSpace(row, col)
  }

  onClick = (e) => {
    e.preventDefault()

    const { row, col, gameWin, gameOver, space, onSelect } = this.props

    if (gameWin || gameOver || space.explored || space.flagged) return

    onSelect(row, col)
  }

  render () {
    const { space, zoom, gameOver, gameWin } = this.props
    const open = space.explored && space.holds !== -1
      ? `open-${space.holds}`
      : ''
    const bombRevealed = gameOver && space.holds === -1

    return (
      <div
        className={classNames(
          'space',
          `space-${zoom}`,
          `square-${zoom}`,
          open,
          {
            blank: !space.explored && !bombRevealed && !space.flagged,
            'bomb-revealed': bombRevealed && !space.explored,
            'bomb-dead': bombRevealed && space.explored,
            flagged: space.flagged,
            misflagged: space.flagged && gameOver && space.holds !== -1,
            'game-win': gameWin,
            'game-over': gameOver,
            explored: space.explored
          }
        )}
        onClick={this.onClick}
        onContextMenu={this.onContextMenu}
      />
    )
  }
}

export default GameBoardSpace
