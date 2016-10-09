import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

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

        let { items } = this.props;
        items = items || []
        let pokemons = items.map(item => <PokemonCard {...item} key={item.national_id} />)
        let spacers = new Array(4).fill('').map( (val, i) => <div key={i} style={styles.spacer}></div> )
        return <div style={styles.pokemonList}>
                    {pokemons}
                    {spacers}
                </div>;

    }
}

const mapStateToProps = (state) => ({
        items: state.pokedex.items
    }
)

export default connect(mapStateToProps)(PokemonList);
