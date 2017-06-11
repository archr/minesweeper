import 'babel-polyfill'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import store from './core/store'
import Root from './views/root'

const rootElement = document.getElementById('root')
const render = (Root) => {
  ReactDOM.render(
    <AppContainer>
      <Root
        store={store}
      />
    </AppContainer>,
    rootElement
  )
}

if (module.hot) {
  module.hot.accept('./views/root', () => {
    render(require('./views/root').default)
  })
}

render(Root)
