import React from 'react'
import './style.scss'

class GameHeader extends React.Component {
  render () {
    const { onShowDialog } = this.props

    return (
      <div className='game-header'>
        <div className='menu' onClick={() => onShowDialog('game')}>Game</div>
        |
        <div className='menu' onClick={() => onShowDialog('display')}>
          Display
        </div>
        |
        <div className='menu' onClick={() => onShowDialog('controls')}>
          Controls
        </div>
      </div>
    )
  }
}

export default GameHeader
