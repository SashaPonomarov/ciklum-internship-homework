import { combineReducers } from 'redux';

import common from './common.reducer';
import pokedex from './pokedex.reducer';

const rootReducer = combineReducers({
    common, pokedex
});

export default rootReducer;
