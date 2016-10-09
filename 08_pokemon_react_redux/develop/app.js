import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router } from 'react-router';

import routes from './config/appRoutes.jsx';
import configureStore from './store/root.store';
import appHistory from './config/appHistory';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const initialState = {};
const store = configureStore(initialState);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <div style={{marginBottom: 60}}>
                <AppBar title="Pokedex" showMenuIconButton={false} />
                <Router children={routes} history={appHistory} />
            </div>
        </MuiThemeProvider>
    </Provider>,

    document.getElementById('react-view')
);

