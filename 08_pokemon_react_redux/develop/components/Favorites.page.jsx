import React, { Component, PropTypes } from 'react';

class FavoritesPage extends Component {
    render() {
        const { handleCommonAction } = this.props;

        return (
            <div>
                <h1>Favorites</h1>
            </div>
        );
    }
}

FavoritesPage.propTypes = {
};

export default FavoritesPage;
