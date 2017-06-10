import React from 'react'

class DialogGameOption extends React.Component {
  render () {
    const {
      level,
      checked,
      onChangeLevel,
      onChangeCustomValue
    } = this.props
    const tds = []

    if (level.name === 'Custom') {
      tds.push(
        <td key='rows'>
          <input
            type='text'
            value={level.rows}
            onChange={e => onChangeCustomValue('rows', e.target.value)}
          />
        </td>
      )
      tds.push(
        <td key='cols'>
          <input
            type='text'
            value={level.cols}
            onChange={e => onChangeCustomValue('cols', e.target.value)}
          />
        </td>
      )
      tds.push(
        <td key='mines'>
          <input
            type='text'
            value={level.mines}
            onChange={e => onChangeCustomValue('mines', e.target.value)}
          />
        </td>
      )
    } else {
      tds.push(<td key='rows'>{level.rows}</td>)
      tds.push(<td key='cols'>{level.cols}</td>)
      tds.push(<td key='mines'>{level.mines}</td>)
    }

    return (
      <tr>
        <td>
          <label>
            <input
              type='radio'
              checked={checked}
              onChange={() => onChangeLevel(level.name)}
            />
            <strong> {level.name}</strong>
          </label>
        </td>
        {tds}
      </tr>
    )
  }
}

export default DialogGameOption
