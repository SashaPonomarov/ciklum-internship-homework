import favoritesTypes from '../actions/types/favorites.types';

export default (state = {}, action) => {
    switch (action.type) {
        case favoritesTypes.FAVORITE_ADD:
            return {
                ...state,
            };
        case favoritesTypes.FAVORITE_REMOVE:
            return {
                ...state,
            };

        default:
            return state;
    }
};
