import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Game from '../Game'
import './style.scss'

class App extends React.Component {
  componentDidMount () {
    if (this.props.settings.nightMode) {
      document.body.classList.toggle('night-mode', true)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.settings.nightMode !== nextProps.settings.nightMode) {
      document.body.classList.toggle('night-mode', nextProps.settings.nightMode)
    }
  }

  render () {
    const { settings } = this.props
    return (
      <div className={classNames('app', settings.position.toLowerCase())}>
        <Game />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  settings: state.settings
})

export default connect(mapStateToProps)(App)
