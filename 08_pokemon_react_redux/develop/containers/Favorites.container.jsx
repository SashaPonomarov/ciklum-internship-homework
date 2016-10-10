import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { favoritesAction } from '../actions/favorites.actions';

import FavoritesPage from '../components/Favorites.page.jsx';

class Favorites extends Component {
    render() {
        let { favorites } = this.props;
        return (
            <FavoritesPage favorites={favorites}
            />
        );
    }
}

Favorites.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    favorites: state.favorites.ids
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
