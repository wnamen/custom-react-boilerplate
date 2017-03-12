import { combineReducers }         from 'redux';
import tutorials                   from './tutorials';
import authentication              from './authentication';

const rootReducer = combineReducers({
  tutorials,
  authentication
})

export default rootReducer
