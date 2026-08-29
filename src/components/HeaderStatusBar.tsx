import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {resetAction} from "../features/gallery/galleryActions.ts";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";
import type {RequestStatus} from "../types/dog.ts";

const statusMessages: Record<RequestStatus, string> = {
    idle: 'Gallery data is ready to load.',
    loading: 'Loading breeds from TheDogAPI...',
    success: 'Breed data loaded successfully.',
    error: 'The last request could not be completed.',
}

function HeaderStatusBar() {

    const dispatch = useAppDispatch()
    const {status} = useAppSelector(state => state.gallery)

    function handleReset() {
        dispatch(resetAction())
    }
    function handleForceLoad() {
        void dispatch(requestGalleryData())
    }

    return (
        <div className='header-status-bar'>
            <div className='status-bar__summary'>
                <span className={`status-pill status-pill--${status}`}>
                    <span className='status-pill__dot' aria-hidden='true'/>
                    {status}
                </span>
                <p className='status-bar__message'>{statusMessages[status]}</p>
            </div>
            {status === 'idle' ? (
                <button className='status-bar__action' type='button' onClick={handleForceLoad}>
                    Load data
                </button>
            ) : (
                <button className='status-bar__action status-bar__action--quiet' type='button' onClick={handleReset}>
                    Reset the data
                </button>
            )}
        </div>
    )
}

export default HeaderStatusBar
