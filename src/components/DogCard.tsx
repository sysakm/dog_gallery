import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";

function DogCard() {

    const dispatch = useAppDispatch()
    const {status, data} = useAppSelector(state => state.gallery)
    const {dogId} = useParams()

    useEffect(() => {
        if (status === 'idle') {
            void dispatch(requestGalleryData())
        }
    }, [status, dispatch])

    if (status !== 'success' || !data) {
        return <p>Need gallery data loaded to display individual dog profile.</p>
    }

    const dogBreedData = data.find(dog => dog.id === dogId)
    if (!dogBreedData) {
        return <p>Could not find dog with ID {dogId} in data...</p>
    } else {
        return (
            <article>
                <aside>{dogBreedData.id}</aside>
                <img src={dogBreedData.mainImageUrl ?? ''} alt={dogBreedData.name}/>
                <h3>{dogBreedData.name}</h3>
                <h4>{dogBreedData.breedGroup}</h4>
                <p>{dogBreedData.origin}</p>
                <p>{dogBreedData.description}</p>
                <p>{dogBreedData.temperament}</p>
                <dl>
                    <dt>Life Span</dt>
                    <dd>{dogBreedData.lifeSpan}</dd>
                    <dt>Weight</dt>
                    <dd>{dogBreedData.weight}</dd>
                    <dt>Height</dt>
                    <dd>{dogBreedData.height}</dd>
                </dl>
            </article>
        )
    }
}

export default DogCard