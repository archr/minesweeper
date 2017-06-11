import React from 'react'

class InputRadio extends React.Component {
  render () {
    const { onChange, title, checked } = this.props

    return (
      <label>
        <input
          type='radio'
          checked={checked}
          onChange={onChange}
        />
        {title}
      </label>
    )
  }
}

export default InputRadio
