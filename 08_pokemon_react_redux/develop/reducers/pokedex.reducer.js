import pokedexTypes from '../actions/types/pokedex.types';

export default (state = {items: []}, action) => {
    switch (action.type) {
        case pokedexTypes.RECEIVE_ITEMS:
            return Object.assign({}, state, {
                items: [...state.items, ...action.items],
                next: action.meta.next,
                isFetching: false
            })
        case pokedexTypes.REQUEST_ITEMS:
            return Object.assign({}, state, {
                isFetching: true
            })

        default:
            return state;
    }
};
