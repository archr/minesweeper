import React from 'react'
import GameBoardHeader from '../GameBoardHeader'
import GameBoardSpace from '../GameBoardSpace'
import './style.scss'

class GameBoard extends React.Component {
  render () {
    const { game, settings, onSelecteSpace } = this.props
    const matrix = []

    for (let i = 0; i < game.rows; i++) {
      const cells = []

      for (let j = 0; j < game.cols; j++) {
        cells.push(
          <GameBoardSpace
            key={j}
            row={i}
            col={j}
            space={game.spaces[i][j]}
            zoom={settings.zoom}
            onSelect={onSelecteSpace}
            gameOver={game.over}
          />
        )
      }

      matrix.push(<div key={i} className='row'>{cells}</div>)
    }

    return (
      <div className='game-board'>
        <GameBoardHeader settings={settings} game={game} />
        <div className='matrix'>
          {matrix}
        </div>
      </div>
    )
  }
}

export default GameBoard
