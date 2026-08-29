import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";
import {useEffect} from "react";

function GalleryPage() {

    const dispatch = useAppDispatch()
    const {status, data, error} = useAppSelector(state => state.gallery)

    useEffect(() => {
        if (status === 'idle') {
            void dispatch(requestGalleryData())
        }
    }, [dispatch, status])

    return (
        <>
            Gallery Page
            <div>
                {status}
            </div>
            <div>
                {JSON.stringify(data)}
            </div>
            <div>
                {error}
            </div>
        </>
    )
}

export default GalleryPage