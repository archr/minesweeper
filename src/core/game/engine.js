const engine = {
  create (rows, cols, mineNum) {
    // Create spaces
    const spaces = []
    const suffleSpaces = []
    for (let i = 0; i < rows; i++) {
      spaces[i] = []
      for (let j = 0; j < cols; j++) {
        spaces[i][j] = { explored: false, holds: 0 }
        suffleSpaces.push([i, j])
      }
    }

    // Create mines
    for (let m = 0; m < mineNum; m++) {
      const [mine] = suffleSpaces.splice(
        Math.round(Math.random() * (suffleSpaces.length - 1)),
        1
      )
      spaces[mine[0]][mine[1]].holds = -1
    }

    // Bombs near
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (spaces[i][j].holds === -1) continue
        spaces[i][j].holds = this.minesNear(i, j, spaces)
      }
    }

    return spaces
  },

  minesNear (row, col, spaces) {
    let sum = 0

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (!spaces[row + i] || !spaces[row + i][col + j]) continue
        if (spaces[row + i][col + j].holds === -1) {
          sum++
        }
      }
    }

    return sum
  },

  open (row, col, state) {
    if (
      state.over ||
      row < 0 ||
      row >= state.rows ||
      col < 0 ||
      col >= state.cols ||
      state.spaces[row][col].explored
    ) {
      return
    }

    const space = state.spaces[row][col]
    space.explored = true
    state.spacesCleared++

    if (space.holds === -1) {
      return {
        over: true
      }
    }

    if (space.holds === 0) {
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          this.open(row + i, col + j, state)
        }
      }
    }

    if (state.cols * state.rows - state.spacesCleared === state.mines) {
      state.win = true
    }

    return state
  }
}

export default engine
