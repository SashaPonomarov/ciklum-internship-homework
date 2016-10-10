import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
        margin: 5,
    }

const Header = () => (
    <AppBar 
        title="Pokedex" 
        showMenuIconButton={false} 
        iconElementRight={
            <div>
                <Link to="pokemons" style={style}>
                    <RaisedButton label="Pokemons" />
                </Link>
                <Link to="pokemons/favorites" style={style}>
                    <RaisedButton label="Favorites" />
                </Link>
            </div>
            }
    />
);

export default Header;
