import { combineReducers } from 'redux'
import list from './list.js'
import forget from './forget.js'
import login from './login.js'


const rootReducer = combineReducers({
  forget:forget,
  login:login,
})
export default rootReducer
