import React from 'react'
import { connect } from 'react-redux'
import { settingsActions } from 'core/settings'
import { levelsActions } from 'core/levels'
import GameHeader from '../GameHeader'
import DialogGame from '../DialogGame'
import DialogDisplay from '../DialogDisplay'
import './style.scss'

class Game extends React.Component {
  constructor () {
    super()

    this.state = {
      showDialogGame: false,
      showDialogDisplay: false
    }
  }

  render () {
    const { showDialogGame, showDialogDisplay } = this.state
    const {
      levels,
      settings,
      selectedLevel,
      changedCustomValue,
      changedSetting
    } = this.props

    return (
      <div className='game'>
        <GameHeader
          onSelectDialogGame={() =>
            this.setState({ showDialogGame: true, showDialogDisplay: false })}
          onSelectDialogDisplay={() =>
            this.setState({ showDialogGame: false, showDialogDisplay: true })}
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

        {showDialogDisplay &&
          <DialogDisplay
            onClose={() => this.setState({ showDialogDisplay: false })}
            onChangeSetting={changedSetting}
            settings={settings}
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
  changedSetting: settingsActions.changedValue,
  changedCustomValue: levelsActions.changedCustomValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
