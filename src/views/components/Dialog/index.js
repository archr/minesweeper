import React from 'react'
import './style.scss'

class Dialog extends React.Component {
  render () {
    const { children, title, onClose } = this.props

    return (
      <div className='dialog'>
        <div className='header section'>
          <span>{title}</span>
          <span className='close' onClick={onClose}>x</span>
        </div>
        {children}
      </div>
    )
  }
}

export default Dialog
