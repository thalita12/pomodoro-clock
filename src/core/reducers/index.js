import {combineReducers} from 'redux'
import {counterReducer, currentSessionReducer} from './counter-reducer'

export default combineReducers({
  counter: counterReducer,
  currentSession: currentSessionReducer
})
