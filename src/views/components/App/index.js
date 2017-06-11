import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Game from '../Game'
import './style.scss'

function App ({ settings }) {
  return (
    <div
      className={classNames('app', settings.position.toLowerCase())}>
      <Game />
    </div>
  )
}

const mapStateToProps = state => ({
  settings: state.settings
})

export default connect(mapStateToProps)(App)
