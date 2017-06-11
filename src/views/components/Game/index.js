import React from 'react'
import { connect } from 'react-redux'
import { settingsActions } from 'core/settings'
import { levelsActions } from 'core/levels'
import { gameActions } from 'core/game'
import GameHeader from '../GameHeader'
import GameBoard from '../GameBoard'
import DialogGame from '../DialogGame'
import DialogDisplay from '../DialogDisplay'
import DialogControls from '../DialogControls'
import './style.scss'

class Game extends React.Component {
  constructor () {
    super()

    this.state = {
      showDialogGame: false,
      showDialogDisplay: false,
      showDialogControls: false
    }
  }

  componentDidMount () {
    this.onNewGame()
  }

  onShowDialog = dialogName => {
    this.setState({
      showDialogGame: dialogName === 'game',
      showDialogDisplay: dialogName === 'display',
      showDialogControls: dialogName === 'controls'
    })
  }

  onNewGame = () => {
    const { settings, levels, newGame } = this.props
    const level = levels.filter(level => level.name === settings.level)[0]
    newGame(level)

    this.setState({ showDialogGame: false })
  }

  render () {
    const { showDialogGame, showDialogDisplay, showDialogControls } = this.state
    const {
      levels,
      settings,
      game,
      selectedLevel,
      changedCustomValue,
      changedSetting,
      selectedSpace
    } = this.props

    return (
      <div className='game'>
        <GameHeader onShowDialog={this.onShowDialog} />
        <GameBoard
          game={game}
          settings={settings}
          onSelecteSpace={selectedSpace}
        />

        {showDialogGame &&
          <DialogGame
            onClose={() => this.setState({ showDialogGame: false })}
            onNewGame={this.onNewGame}
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

        {showDialogControls &&
          <DialogControls
            onClose={() => this.setState({ showDialogControls: false })}
          />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  levels: state.levels,
  settings: state.settings,
  game: state.game
})

const mapDispatchToProps = {
  selectedLevel: settingsActions.selectedLevel,
  changedSetting: settingsActions.changedValue,
  changedCustomValue: levelsActions.changedCustomValue,
  newGame: gameActions.newGame,
  selectedSpace: gameActions.selectedSpace
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
