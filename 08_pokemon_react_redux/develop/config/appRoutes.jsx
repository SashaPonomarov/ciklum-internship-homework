import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from '../containers/App.jsx';
import Favorites from '../containers/Favorites.container.jsx';
import Pokedex from '../containers/Pokedex.container.jsx';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="pokemons" />

        
        <Route path="pokemons" component={Pokedex} />
        <Route path="pokemons/favorites" component={Favorites} />
    </Route>
);
