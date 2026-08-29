import type {DogBreed, RequestStatus} from "../../types/dog.ts";

export const GALLERY_SHOW_LOADING = 'gallery/showLoading'
export const GALLERY_SHOW_SUCCESS = 'gallery/showSuccess'
export const GALLERY_SHOW_ERROR = 'gallery/showError'
export const GALLERY_RESET = 'gallery/reset'

export type GalleryState = {
    status: RequestStatus;
    data: Array<DogBreed> | null;
    error: string | null;
}

export type ShowLoadingAction = {
    type: typeof GALLERY_SHOW_LOADING;
}
export type ShowSuccessAction = {
    type: typeof GALLERY_SHOW_SUCCESS;
    payload: Array<DogBreed>;
}
export type ShowErrorAction = {
    type: typeof GALLERY_SHOW_ERROR;
    payload: string;
}
export type ResetAction = {
    type: typeof GALLERY_RESET;
}
export type GalleryAction = ShowLoadingAction | ShowSuccessAction | ShowErrorAction | ResetAction

export function showLoadingAction(): ShowLoadingAction {
    return {type: GALLERY_SHOW_LOADING}
}

export function showSuccessAction(data: Array<DogBreed>): ShowSuccessAction {
    return {type: GALLERY_SHOW_SUCCESS, payload: data}
}

export function showErrorAction(message: string): ShowErrorAction {
    return {type: GALLERY_SHOW_ERROR, payload: message}
}

export function resetAction(): ResetAction {
    return {type: GALLERY_RESET}
}
