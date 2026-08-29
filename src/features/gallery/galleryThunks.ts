import type {AppThunk} from "../../app/store.ts";
import {showErrorAction, showLoadingAction, showSuccessAction} from "./galleryActions.ts";
import {fetchBreeds} from "../../api/dogApi.ts";

export function requestGalleryData(): AppThunk<Promise<void>> {
    return async function (
        dispatch, getState
    ) {
        const currentStatus = getState()?.gallery?.status

        if (currentStatus === 'loading' || currentStatus === 'success') {
            return
        }

        dispatch(showLoadingAction())
        try {
            const data = await fetchBreeds()
            dispatch(showSuccessAction(data))
        } catch (error) {
            dispatch(showErrorAction(error instanceof Error ? error.message : 'Something went wrong'))
        }

    }
}