import { combineReducers } from 'redux';
import FakeReducer from './fake';

const rootReducer = combineReducers({
  fake: FakeReducer
});

export default rootReducer;
