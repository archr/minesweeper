import React from 'react'
import './style.scss'

class GameHeader extends React.Component {
  render () {
    const { onSelectDialogGame, onSelectDialogDisplay } = this.props

    return (
      <div className='game-header'>
        <div className='menu' onClick={onSelectDialogGame}>Game</div>
        |
        <div className='menu' onClick={onSelectDialogDisplay}>Display</div>
        |
        <div className='menu'>Controls</div>
      </div>
    )
  }
}

export default GameHeader
