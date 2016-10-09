import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = (props) => (
    <MuiThemeProvider>
        <div id="app-view" style={{marginBottom: 60}}>
            <AppBar title="Pokedex" showMenuIconButton={false} />
            {props.children}
        </div>
    </MuiThemeProvider>
);

App.propTypes = {
    children: PropTypes.element,
};

export default App;
