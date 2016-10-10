import React, { Component, PropTypes } from 'react';

import PokemonList from '../containers/PokemonList.container.jsx';
import {grey800} from 'material-ui/styles/colors';

class FavoritesPage extends Component {
    render() {
        const { favorites } = this.props;
        const style = {
            fontWeight: 'normal',
            color: grey800
        }
        return (
            <div>
                <h2 style={style}>Favorites pokemons:</h2>
                <PokemonList mode='favorites' />
            </div>
        );
    }
}

FavoritesPage.propTypes = {
};

export default FavoritesPage;
