import React from 'react'
import { connect } from 'react-redux'
import { settingsActions } from 'core/settings'
import { levelsActions } from 'core/levels'
import GameHeader from '../GameHeader'
import DialogGame from '../DialogGame'
import './style.scss'

class Game extends React.Component {
  constructor () {
    super()

    this.state = {
      showDialogGame: false
    }
  }

  render () {
    const { showDialogGame } = this.state
    const { levels, settings, selectedLevel, changedCustomValue } = this.props

    return (
      <div className='game'>
        <GameHeader
          onSelectDialogGame={() => this.setState({ showDialogGame: true })}
        />
        {showDialogGame &&
          <DialogGame
            onClose={() => this.setState({ showDialogGame: false })}
            onNewGame={() => this.setState({ showDialogGame: false })}
            levels={levels}
            currentLevel={settings.level}
            onChangeLevel={selectedLevel}
            onChangeCustomValue={changedCustomValue}
          />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  levels: state.levels,
  settings: state.settings
})

const mapDispatchToProps = {
  selectedLevel: settingsActions.selectedLevel,
  changedCustomValue: levelsActions.changedCustomValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
