import {combineReducers} from 'redux';

import player from './player';
import team from './team';

const rootReducer = combineReducers({
  player,
  team
});

export default rootReducer;
