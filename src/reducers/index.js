import { combineReducers } from 'redux'
import indexList from './indexlist'
import detail from './detail'
import user from './user'

let reducer = combineReducers({
  indexList,
  detail,
  user,
})

export default reducer