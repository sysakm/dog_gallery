import {useAppSelector} from "../app/hooks.ts";
import DogGalleryEntry from "./DogGalleryEntry.tsx";

function FavoritesGallery() {
    const {status, data} = useAppSelector(state => state.gallery)
    const {favoritesList} = useAppSelector(state => state.favorites)

    if (favoritesList.length === 0) {
        return <p>Add some dogs to favorites to see them here!</p>
    }
    if (status !== 'success' || !data) {
        return <p>Can not display gallery currently - make sure data is loaded.</p>
    }

    const currentData = data.filter(dog => !!favoritesList.find(id => id === dog.id))

    return (
        <div>
            <div>
                {currentData.map(dog => (
                    <DogGalleryEntry key={`dog-picture-${dog.id}`} from='home' dog={dog}/>
                ))}
            </div>
        </div>
    )
}

export default FavoritesGallery