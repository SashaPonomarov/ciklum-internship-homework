import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { favoritesAction } from '../actions/favorites.actions';

import FavoritesPage from '../components/Favorites.page.jsx';

class Favorites extends Component {
    render() {

        return (
            <FavoritesPage
            />
        );
    }
}

Favorites.propTypes = {
};

const mapStateTotProps = (state, ownProps) => ({
    ...ownProps,
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
});

export default connect(mapStateTotProps, mapDispatchToProps)(Favorites);
