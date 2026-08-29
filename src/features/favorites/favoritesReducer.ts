import {
    ADD_TO_FAVORITES,
    type FavoritesAction,
    type FavoritesState,
    REMOVE_FROM_FAVORITES
} from "./favoritesActions.ts";

const initialFavoritesState: FavoritesState = {
    favoritesList: []
}

export function favoritesReducer(
    state: FavoritesState = initialFavoritesState,
    action: FavoritesAction
): FavoritesState {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {...state, favoritesList: [...state.favoritesList, action.payload]}
        case REMOVE_FROM_FAVORITES:
            return {...state, favoritesList: state.favoritesList.filter(id => id !== action.payload)}
        default:
            return state
    }
}