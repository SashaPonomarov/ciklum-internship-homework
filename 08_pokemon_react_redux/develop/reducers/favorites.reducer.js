import favoritesTypes from '../actions/types/favorites.types';

export default (state = {ids: []}, action) => {
    switch (action.type) {
        case favoritesTypes.FAVORITE_ADD:
            return Object.assign({}, state, {
                ids: [...state.ids, action.id]
            })
        case favoritesTypes.FAVORITE_REMOVE:
            let index = state.ids.indexOf(action.id)
            return Object.assign({}, state, {
                ids: [
                    ...state.ids.slice(0, index),
                    ...state.ids.slice(index + 1),
                ]
            })

        default:
            return state;
    }
};
