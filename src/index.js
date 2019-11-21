import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import createStore from './models/createStore'
import App from './App'
import * as serviceWorker from './serviceWorker'

// const DevTools = React.Fragment
const isDev = process.env.NODE_ENV === 'development'
// if (isDev) {
//   DevTools = require('./DevTools').default
// }

const initialState = window.INITIAL_STATE || {}
delete window.INITIAL_STATE

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext)
// import all svg
const req = require.context('./assets/icons', true, /\.svg$/)
requireAll(req)

const { store, history } = createStore(initialState)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

if (isDev && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}

serviceWorker.unregister()
