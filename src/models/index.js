import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import login from './login'
import todos from './todo'
import visibilityFilter from './visibilityFilter'

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    login,
    todos,
    visibilityFilter
  })
export default createRootReducer
