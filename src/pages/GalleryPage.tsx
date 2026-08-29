import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";
import {useEffect} from "react";
import DogGallery from "../components/DogGallery.tsx";

function GalleryPage() {

    const dispatch = useAppDispatch()
    const {status, error} = useAppSelector(state => state.gallery)

    useEffect(() => {
        if (status === 'idle') {
            void dispatch(requestGalleryData())
        }
    }, [dispatch, status])

    if (status === 'idle' || status === 'loading') {
        return <p>Loading...</p>
    } else if (status === 'error') {
        return <p><strong>{error}</strong></p>
    } else {
        return (
            <DogGallery/>
        )
    }
}

export default GalleryPage