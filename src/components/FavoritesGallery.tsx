import {useAppSelector} from "../app/hooks.ts";
import DogGalleryEntry from "./DogGalleryEntry.tsx";

function FavoritesGallery() {
    const {status, data} = useAppSelector(state => state.gallery)
    const {favoritesList} = useAppSelector(state => state.favorites)

    if (favoritesList.length === 0) {
        return <p className='state-message'>Add some dogs to favorites to see them here!</p>
    }
    if (status !== 'success' || !data) {
        return <p className='state-message'>Can not display gallery currently</p>
    }

    const currentData = data.filter(dog => !!favoritesList.find(id => id === dog.id))

    if (currentData.length === 0) {
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
