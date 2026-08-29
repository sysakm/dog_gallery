import {
    GALLERY_RESET,
    GALLERY_SHOW_ERROR,
    GALLERY_SHOW_LOADING,
    GALLERY_SHOW_SUCCESS,
    type GalleryAction,
    type GalleryState
} from "./galleryActions.ts";

const initialGalleryState: GalleryState = {
    status: 'idle', data: null, error: null
}

export function galleryReducer(
    state: GalleryState = initialGalleryState,
    action: GalleryAction
): GalleryState {
    switch (action.type) {
        case GALLERY_SHOW_LOADING:
            return {...state, status: 'loading', data: null, error: null}
        case GALLERY_SHOW_SUCCESS:
            return {...state, status: 'success', data: action.payload, error: null}
        case GALLERY_SHOW_ERROR:
            return {...state, status: 'error', data: null, error: action.payload}
        case GALLERY_RESET:
            return {...initialGalleryState}
        default:
            return state
    }
}
