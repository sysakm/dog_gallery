import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {galleryReducer} from "../features/gallery/galleryReducer.ts";
import type {GalleryAction} from "../features/gallery/galleryActions.ts";
import {thunk, type ThunkAction, type ThunkDispatch} from "redux-thunk";
import {logger} from "redux-logger";

const rootReducer = combineReducers({
    gallery: galleryReducer,
})
export type RootState = ReturnType<typeof rootReducer>
export type AppAction = GalleryAction
export type AppDispatch =
    ThunkDispatch<RootState, unknown, AppAction>;
export type AppThunk<ReturnType = void> =
    ThunkAction<ReturnType, RootState, unknown, AppAction>;

export const store =
    legacy_createStore(rootReducer, undefined, applyMiddleware(thunk, logger));