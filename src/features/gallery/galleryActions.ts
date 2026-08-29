import type {DogBreed, RequestStatus} from "../../types/dog.ts";

export const GALLERY_SHOW_LOADING = 'gallery/showLoading'
export const GALLERY_SHOW_SUCCESS = 'gallery/showSuccess'
export const GALLERY_SHOW_ERROR = 'gallery/showError'
export const GALLERY_RESET = 'gallery/reset'
export const GALLERY_CHANGE_PAGE = 'gallery/changePage'

export type GalleryState = {
    pageNum: number;
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
export type ChangePageAction = {
    type: typeof GALLERY_CHANGE_PAGE;
    payload: number;
}
export type GalleryAction = ShowLoadingAction | ShowSuccessAction | ShowErrorAction | ResetAction | ChangePageAction

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

export function changePageAction(pageNum: number): ChangePageAction {
    return {type: GALLERY_CHANGE_PAGE, payload: pageNum}
}
