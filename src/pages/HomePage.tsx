import FavoritesGallery from "../components/FavoritesGallery.tsx";
import {useEffect} from "react";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";

function HomePage() {

    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.gallery.status)
    const {favoritesList} = useAppSelector(state => state.favorites)

    useEffect(() => {
        if (status === 'idle' && favoritesList.length > 0) {
            void dispatch(requestGalleryData())
        }
    }, [dispatch, status, favoritesList])

    return (
        <section className='page'>
            <div className='page-heading'>
                <p className='page-heading__eyebrow'>Your saved collection</p>
                <h1>Favorite breeds</h1>
                <p>The dogs marked with a heart appear here.</p>
            </div>
            <FavoritesGallery/>
        </section>
    )
}

export default HomePage
