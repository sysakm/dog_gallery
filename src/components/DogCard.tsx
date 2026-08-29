import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";
import DogDetails from "./DogDetails.tsx";

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
            <DogDetails dogBreedData={dogBreedData}/>
        )
    }
}

export default DogCard