import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../actions/favorites.actions';

import {GridList, GridTile} from 'material-ui/GridList';

import PokemonCard from '../components/PokemonCard.jsx';

class PokemonList extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const styles = {
          pokemonList: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: 0,
            maxWidth: 1000,
            margin: '0 auto'
          },
          spacer: {
            height: 0,
            width: 200
          }
        };

        let { items, handleCardClick, favorites, mode } = this.props;
        
        if (mode === 'favorites') {
            items = items.filter((item) => {
                return (favorites.indexOf(item.national_id) !== -1)
            })
        }

        let pokemons = items.map(item => {
            return (
                <PokemonCard 
                    {...item}
                    favorite={favorites.indexOf(item.national_id) !== -1}
                    handleCardClick={handleCardClick}
                    key={item.national_id} 
                />
            )
        })
        let spacers = new Array(4).fill('').map( (val, i) => <div key={i} style={styles.spacer}></div> )
        return <div style={styles.pokemonList}>
                    {pokemons}
                    {spacers}
                </div>;

    }
}

PokemonList.propTypes = {
    handleCardClick: PropTypes.func,
}

const mapStateToProps = (state) => ({
        items: state.pokedex.items,
        favorites: state.favorites.ids
    }
)
const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    handleCardClick: (id, isFavorite) => {
        if (isFavorite) {
            return dispatch(removeFavorite(id))
        } else {
            return dispatch(addFavorite(id))
        }
    },
    dispatch
})


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
