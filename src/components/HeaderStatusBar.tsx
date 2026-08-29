import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {resetAction} from "../features/gallery/galleryActions.ts";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";

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
        <div>
            <h4>Gallery load status: {status}</h4>
            {status === 'idle' ? (
                <p>
                    Press the button or just open the gallery to load the data.
                    <button type='button' onClick={handleForceLoad}>
                        Load
                    </button>
                </p>
            ) : (
                <button type='button' onClick={handleReset}>
                    Reset the data
                </button>
            )
            }
        </div>
    )
}

export default HeaderStatusBar