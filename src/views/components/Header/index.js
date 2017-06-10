import React from 'react'
import './style.scss'

class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <div className='menu'>Game</div>
        |
        <div className='menu'>Display</div>
        |
        <div className='menu'>Controls</div>
      </div>
    )
  }
}

export default Header
