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

class GameBoardHeader extends React.Component {
  render () {
    const { settings, game, timer } = this.props
    const seconds = format(Math.floor(timer.time / 1000))

    return (
      <div
        className={classNames(
          'game-board-header',
          `game-board-header-${settings.zoom}`
        )}
      >
        <div className='bombs'>
          <IconNumber number={1} zoom={settings.zoom} />
          <IconNumber number={4} zoom={settings.zoom} />
          <IconNumber number={0} zoom={settings.zoom} />
        </div>

        <div
          className={classNames('face', {
            smile: !game.over,
            dead: game.over
          })}
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
