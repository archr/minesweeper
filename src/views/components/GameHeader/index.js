import React from 'react'
import './style.scss'

class GameHeader extends React.Component {
  render () {
    const { onSelectDialogGame } = this.props

    return (
      <div className='game-header'>
        <div className='menu' onClick={onSelectDialogGame}>Game</div>
        |
        <div className='menu'>Display</div>
        |
        <div className='menu'>Controls</div>
      </div>
    )
  }
}

export default GameHeader
