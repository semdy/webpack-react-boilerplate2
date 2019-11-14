import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

import todos from './todo';
import visibilityFilter from './visibilityFilter';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  todos,
  visibilityFilter
})
export default createRootReducer
