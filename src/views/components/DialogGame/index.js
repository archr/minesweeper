import React from 'react'
import DialogGameOption from '../DialogGameOption'
import './style.scss'

class DialogGame extends React.Component {
  render () {
    const {
      onClose,
      onChangeLevel,
      onNewGame,
      levels,
      currentLevel,
      onChangeCustomValue
    } = this.props

    return (
      <div className='dialog-game'>
        <div className='header'>
          <span>Game</span>
          <span className='close' onClick={onClose}>x</span>
        </div>

        <table cellSpacing='0' cellPadding='2'>
          <tbody>
            <tr className='gray'>
              <td />
              <td>Height</td>
              <td>Width</td>
              <td>Mines</td>
            </tr>
            {levels.map(level =>
              <DialogGameOption
                key={level.name}
                level={level}
                checked={currentLevel === level.name}
                onChangeLevel={onChangeLevel}
                onChangeCustomValue={onChangeCustomValue}
              />
            )}
          </tbody>
        </table>

        <div className='gray footer'>
          <button onClick={onNewGame}>New Game</button>
        </div>
      </div>
    )
  }
}

export default DialogGame
