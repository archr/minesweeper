import React from 'react'
import Dialog from '../Dialog'
import InputRadio from '../InputRadio'
import './style.scss'

class DialogDisplay extends React.Component {
  render () {
    const { onClose, onChangeSetting, settings } = this.props

    return (
      <Dialog title='Display' onClose={onClose}>
        <table cellSpacing='0' cellPadding='2' className='dialog-display'>
          <tbody>
            <tr>
              <td className='border-bottom'><strong>Zoom</strong></td>
              <td className='options border-bottom'>
                {[100, 150, 200].map(val =>
                  <InputRadio
                    key={val}
                    title={`${val}%`}
                    checked={settings.zoom === val}
                    onChange={() => onChangeSetting('zoom', val)}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td className='border-bottom'><strong>Position</strong></td>
              <td className='options border-bottom'>
                {['Center', 'Left'].map(val =>
                  <InputRadio
                    key={val}
                    title={val}
                    checked={settings.position === val}
                    onChange={() => onChangeSetting('position', val)}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td><strong>Night Mode</strong></td>
              <td>
                <label>
                  <input
                    type='checkbox'
                    checked={settings.nightMode}
                    onChange={e =>
                      onChangeSetting('nightMode', !settings.nightMode)}
                  />
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </Dialog>
    )
  }
}

export default DialogDisplay
