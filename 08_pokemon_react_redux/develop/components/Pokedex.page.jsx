import React, { Component, PropTypes } from 'react';

import PokemonList from '../containers/PokemonList.container.jsx';

import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';



class PokedexPage extends Component {
    render() {
        const { handleLoadClick, isFetching, next } = this.props;
        return (
            <div>
                <PokemonList />
                {isFetching ? 
                    <LinearProgress 
                        mode="indeterminate"
                        style={{height: 36}} /> : 
                    <RaisedButton 
                        label="Load more"
                        primary={true}
                        fullWidth={true}
                        onClick={() => {handleLoadClick(next)}}
                    />}
            </div>
        );
    }
}

PokedexPage.propTypes = {
    handleLoadClick: PropTypes.func,
};

export default PokedexPage;
