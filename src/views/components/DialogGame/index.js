import React from 'react'
import Dialog from '../Dialog'
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
      <Dialog title='Game' onClose={onClose}>
        <div className='dialog-game'>
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
      </Dialog>
    )
  }
}

export default DialogGame
