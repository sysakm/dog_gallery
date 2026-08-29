import FavoritesGallery from "../components/FavoritesGallery.tsx";
import {useEffect} from "react";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";

function HomePage() {

    const dispatch = useAppDispatch()
    const {status} = useAppSelector(state => state.gallery)
    const {favoritesList} = useAppSelector(state => state.favorites)

    useEffect(() => {
        if (status === 'idle' && favoritesList.length > 0) {
            void dispatch(requestGalleryData())
        }
    }, [dispatch, status, favoritesList])

    return (
        <>
            <h2>Home page</h2>
            <FavoritesGallery/>
        </>
    )
}

export default HomePage