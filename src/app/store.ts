import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {galleryReducer} from "../features/gallery/galleryReducer.ts";
import type {GalleryAction} from "../features/gallery/galleryActions.ts";
import {thunk, type ThunkAction, type ThunkDispatch} from "redux-thunk";
import {logger} from "redux-logger";
import {favoritesReducer} from "../features/favorites/favoritesReducer.ts";
import type {FavoritesAction} from "../features/favorites/favoritesActions.ts";

const rootReducer = combineReducers({
    gallery: galleryReducer,
    favorites: favoritesReducer,
})
export type RootState = ReturnType<typeof rootReducer>
export type AppAction = GalleryAction | FavoritesAction
export type AppDispatch =
    ThunkDispatch<RootState, unknown, AppAction>;
export type AppThunk<ReturnType = void> =
    ThunkAction<ReturnType, RootState, unknown, AppAction>;

export const store =
    legacy_createStore(rootReducer, undefined, applyMiddleware(thunk, logger));