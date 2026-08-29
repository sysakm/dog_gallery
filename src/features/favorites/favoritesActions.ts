export const ADD_TO_FAVORITES = 'favorites/addToFavorites'
export const REMOVE_FROM_FAVORITES = 'favorites/removeFromFavorites'

export type FavoritesState = {
    favoritesList: Array<string>
}

export type AddToFavoritesAction = {
    type: typeof ADD_TO_FAVORITES;
    payload: string;
}
export type RemoveFromFavoritesAction = {
    type: typeof REMOVE_FROM_FAVORITES;
    payload: string;
}
export type FavoritesAction = AddToFavoritesAction | RemoveFromFavoritesAction

export function addToFavoritesAction(id: string): AddToFavoritesAction {
    return {type: ADD_TO_FAVORITES, payload: id}
}

export function removeFromFavoritesAction(id: string): RemoveFromFavoritesAction {
    return {type: REMOVE_FROM_FAVORITES, payload: id}
}
