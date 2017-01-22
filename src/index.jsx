import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import Root from './components/Root'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootElement
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <Root />
      </AppContainer>,
      rootElement
    )
  })
}
