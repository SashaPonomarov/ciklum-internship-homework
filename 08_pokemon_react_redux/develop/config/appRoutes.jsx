import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from '../containers/App.jsx';
import Favorites from '../containers/Favorites.container.jsx';
import Pokedex from '../containers/Pokedex.container.jsx';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="pokedex" />

        
        <Route path="pokedex" component={Pokedex} />
        <Route path="pokedex/favorites" component={Favorites} />
    </Route>
);
