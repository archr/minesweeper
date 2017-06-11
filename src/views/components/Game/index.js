import React from 'react'
import { connect } from 'react-redux'
import { settingsActions } from 'core/settings'
import { levelsActions } from 'core/levels'
import { gameActions } from 'core/game'
import { timerActions } from 'core/timer'
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

  componentWillUnmount () {
    this.stopTimer()
  }

  componentWillReceiveProps (nextProps) {
    if (
      (this.timer && nextProps.game.over) ||
      (this.timer && nextProps.game.win)
    ) {
      this.stopTimer()
    }
  }

  onShowDialog = dialogName => {
    this.setState({
      showDialogGame: dialogName === 'game',
      showDialogDisplay: dialogName === 'display',
      showDialogControls: dialogName === 'controls'
    })
  }

  onNewGame = () => {
    const { settings, levels, newGame, restartTimer } = this.props
    const level = levels.filter(level => level.name === settings.level)[0]
    newGame(level)
    restartTimer()

    this.stopTimer()
    this.setState({ showDialogGame: false })
  }

  onSelectSpace = (row, col) => {
    const { selectedSpace, game } = this.props

    selectedSpace(row, col)

    if (game.spacesCleared === 0 && !this.timer) {
      this.startTimer()
    }
  }

  startTimer = () => {
    const { startTimer, tickTimer } = this.props
    startTimer(Date.now() - 1000)
    tickTimer(Date.now())

    this.timer = setInterval(() => {
      tickTimer(Date.now())
    }, 1000)
  }

  stopTimer = () => {
    if (!this.timer) return

    clearInterval(this.timer)
    this.timer = null
  }

  render () {
    const { showDialogGame, showDialogDisplay, showDialogControls } = this.state
    const {
      levels,
      settings,
      game,
      timer,
      selectedLevel,
      changedCustomValue,
      changedSetting,
      flaggedSpace
    } = this.props

    return (
      <div className='game'>
        <GameHeader onShowDialog={this.onShowDialog} />
        <GameBoard
          game={game}
          settings={settings}
          timer={timer}
          onSelecteSpace={this.onSelectSpace}
          onFlagSpace={flaggedSpace}
          onNewGame={this.onNewGame}
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
  game: state.game,
  timer: state.timer
})

const mapDispatchToProps = {
  selectedLevel: settingsActions.selectedLevel,
  changedSetting: settingsActions.changedValue,
  changedCustomValue: levelsActions.changedCustomValue,
  newGame: gameActions.newGame,
  selectedSpace: gameActions.selectedSpace,
  flaggedSpace: gameActions.flaggedSpace,
  startTimer: timerActions.start,
  restartTimer: timerActions.restart,
  tickTimer: timerActions.tick
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
