// Module dependencies
import { combineReducers } from 'redux-immutable';

// Reducers
import data from 'data/reducers';

// Combine reducers
const reducer = combineReducers({
  data
});

// Module exports
export default reducer;
