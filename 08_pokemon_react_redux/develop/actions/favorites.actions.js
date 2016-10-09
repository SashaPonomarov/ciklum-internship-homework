import favoritesTypes from './types/favorites.types';

export const addFavorite = (params) => ({
    type: commonTypes.FAVORITE_ADD,
    params,
});
