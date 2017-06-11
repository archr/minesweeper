import React from 'react'
import Dialog from '../Dialog'
import './style.scss'

class DialogControls extends React.Component {
  render () {
    const { onClose } = this.props

    return (
      <Dialog title='Controls' onClose={onClose}>
        <table cellSpacing='0' cellPadding='2' className='dialog-controls'>
          <tbody>
            <tr>
              <td className='border-bottom'><strong>Desktop</strong></td>
              <td className='border-bottom'>
                <ul>
                  <li><b>Left-click</b> an empty square to reveal it.</li>
                  <li>
                    <b>Right-click</b> (or <b>Ctrl+click</b>) an empty square to
                    flag it.
                  </li>
                  <li>
                    <b>Midde-click</b> (or <b>left+right click</b>) a number to
                    reveal its adjacent squares.
                  </li>
                  <li>
                    Press <b>space</b> bar while hovering over a square to flag
                    it or reveal its adjacent squares.
                  </li>
                  <li>Press <b>F2</b> to start a new game.</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td><strong>Mobile</strong></td>
              <td>
                <ul>
                  <li><b>Tap</b> an empty square to reveal it.</li>
                  <li><b>Long-press</b> an empty square to flag it.</li>
                  <li><b>Tap</b> a number to reveal its adjacent squares.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </Dialog>
    )
  }
}

export default DialogControls
