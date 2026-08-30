import {useAppSelector} from "../app/hooks.ts";
import DogGalleryEntry from "./DogGalleryEntry.tsx";

function FavoritesGallery() {
    const {status, data, error} = useAppSelector(state => state.gallery)
    const {favoritesList} = useAppSelector(state => state.favorites)

    if (favoritesList.length === 0) {
        return <p className='state-message'>Add some dogs to favorites to see them here!</p>
    }
    if (status === 'idle' || status === 'loading') {
        return <p className='state-message state-message--loading'>Loading...</p>
    } else if (status === 'error') {
        return <p className='state-message state-message--error'><strong>{error}</strong></p>
    }

    const currentData = data?.filter(dog => !!favoritesList.find(id => id === dog.id))

    if (!currentData || currentData.length === 0) {
        return <p className='state-message'>No saved breeds were found in the current data</p>
    }

    return (
        <section className='gallery-section' aria-label='Favorite dog breeds'>
            <div className='dog-grid'>
            {currentData.map(dog => (
                <DogGalleryEntry key={`dog-picture-${dog.id}`} from='home' dog={dog}/>
            ))}
            </div>
        </section>
    )
}

export default FavoritesGallery
