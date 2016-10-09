import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from '../containers/App.jsx';
import Common from '../containers/Common.container.jsx';
import Pokedex from '../containers/Pokedex.container.jsx';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="pokedex" />

        <Route path="common" component={Common} />
        <Route path="pokedex" component={Pokedex} />
    </Route>
);
