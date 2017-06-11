import React from 'react'
import classNames from 'classnames'
import IconNumber from '../IconNumber'
import './style.scss'

const format = seconds => {
  if (seconds > 999) return '999'

  let time = `${seconds}`

  while (time.length < 3) {
    time = '0' + time
  }

  return time
}

const formatMines = mines => {
  let m = `${mines}`

  while (m.length < 3) {
    m = '0' + m
  }

  return m
}

class GameBoardHeader extends React.Component {
  render () {
    const { settings, game, timer, onNewGame } = this.props
    const seconds = format(Math.floor(timer.time / 1000))
    const mines = formatMines(game.mines)

    return (
      <div
        className={classNames(
          'game-board-header',
          `game-board-header-${settings.zoom}`
        )}
      >
        <div className='bombs'>
          <IconNumber number={mines[0]} zoom={settings.zoom} />
          <IconNumber number={mines[1]} zoom={settings.zoom} />
          <IconNumber number={mines[2]} zoom={settings.zoom} />
        </div>

        <div
          className={classNames('face', {
            smile: !game.over,
            dead: game.over
          })}
          onClick={onNewGame}
        />

        <div className='timer'>
          <IconNumber number={seconds[0]} zoom={settings.zoom} />
          <IconNumber number={seconds[1]} zoom={settings.zoom} />
          <IconNumber number={seconds[2]} zoom={settings.zoom} />
        </div>
      </div>
    )
  }
}

export default GameBoardHeader
