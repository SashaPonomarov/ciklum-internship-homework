import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';

const Header = () => (
    <AppBar 
        title="Pokedex" 
        showMenuIconButton={false} 
        iconElementRight={<Link to="pokedex/favorites">Favorites</Link>}
    />
);

export default Header;
