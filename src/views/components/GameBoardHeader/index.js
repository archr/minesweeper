import React from 'react'
import classNames from 'classnames'
import IconNumber from '../IconNumber'
import './style.scss'

class GameBoardHeader extends React.Component {
  render () {
    const { settings, game } = this.props

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
          <IconNumber number={0} zoom={settings.zoom} />
          <IconNumber number={0} zoom={settings.zoom} />
          <IconNumber number={0} zoom={settings.zoom} />
        </div>
      </div>
    )
  }
}

export default GameBoardHeader
