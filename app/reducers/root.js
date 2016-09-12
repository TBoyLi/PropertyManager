import { combineReducers } from 'redux'
import list from './list.js'
import login from './login.js'

const rootReducer = combineReducers({
  login:login,
  list:list
})
export default rootReducer
