import React from 'react'
import InputRadio from '../InputRadio'

class DialogGameOption extends React.Component {
  render () {
    const { level, checked, onChangeLevel, onChangeCustomValue } = this.props
    const tds = []

    if (level.name === 'Custom') {
      tds.push(
        <td key='rows'>
          <input
            type='text'
            value={level.rows}
            onChange={e => onChangeCustomValue('rows', e.target.value)}
            onFocus={() => onChangeLevel('Custom')}
          />
        </td>
      )
      tds.push(
        <td key='cols'>
          <input
            type='text'
            value={level.cols}
            onChange={e => onChangeCustomValue('cols', e.target.value)}
            onFocus={() => onChangeLevel('Custom')}
          />
        </td>
      )
      tds.push(
        <td key='mines'>
          <input
            type='text'
            value={level.mines}
            onChange={e => onChangeCustomValue('mines', e.target.value)}
            onFocus={() => onChangeLevel('Custom')}
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
          <InputRadio
            checked={checked}
            onChange={() => onChangeLevel(level.name)}
            title={level.name}
          />
        </td>
        {tds}
      </tr>
    )
  }
}

export default DialogGameOption
