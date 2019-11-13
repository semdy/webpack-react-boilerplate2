import './utils/flexible'

import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './app'
import * as serviceWorker from './serviceWorker';

let DevTools = React.Fragment;
let isDev = process.env.NODE_ENV === 'development'
if (isDev) {
  DevTools = require('./DevTools').default;
}

const initialState = window.INITIAL_STATE || {}
delete window.INITIAL_STATE

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext)
// import all svg
const req = require.context('./assets/icons', true, /\.svg$/)
requireAll(req)

const {store, history} = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App/>
        {/*<DevTools />*/}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// service worker
serviceWorker.unregister();

if (isDev && module.hot) {
  module.hot.accept()
  // module.hot.accept('./app',() => {
  //     render(App);
  // });
}
