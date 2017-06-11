import React from 'react'
import classNames from 'classnames'
import './style.scss'

class IconNumber extends React.Component {
  render () {
    const { number, zoom } = this.props

    return (
      <div className={classNames(`icon-number-${zoom}`, `number-${number}`)} />
    )
  }
}

export default IconNumber
