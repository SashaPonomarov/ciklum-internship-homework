import { combineReducers } from 'redux';

import favorites from './favorites.reducer';
import pokedex from './pokedex.reducer';

const rootReducer = combineReducers({
    favorites, pokedex
});

export default rootReducer;
