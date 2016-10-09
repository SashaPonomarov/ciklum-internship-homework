import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Header from '../components/Header.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = (props) => (
    <MuiThemeProvider>
        <div id="app-view" style={{marginBottom: 60}}>
            <Header />
            {props.children}
        </div>
    </MuiThemeProvider>
);

App.propTypes = {
    children: PropTypes.element,
};

export default App;
