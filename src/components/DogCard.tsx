import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";
import DogDetails from "./DogDetails.tsx";

function DogCard() {

    const dispatch = useAppDispatch()
    const {status, data} = useAppSelector(state => state.gallery)
    const {from, dogId} = useParams()

    useEffect(() => {
        if (status === 'idle') {
            void dispatch(requestGalleryData())
        }
    }, [status, dispatch])

    if (status !== 'success' || !data) {
        return <p>Need full dog data loaded to display individual dog profile.</p>
    }
    if (from !== 'gallery' && from !== 'select') {
        return (
            <>
                <p>Unknown card source</p>
                <Link to={`/select/dogcard/${dogId}`} replace>Go to select gallery</Link>
                <Link to={`/gallery/dogcard/${dogId}`} replace>Go to full gallery</Link>
            </>
        )
    }

    const dogBreedData = data.find(dog => dog.id === dogId)
    if (!dogBreedData) {
        return <p>Could not find dog with ID {dogId} in data...</p>
    } else {
        return (
            <>
                <Link to={`/${from}`}>
                    Back to {from}
                </Link>
                <DogDetails dogBreedData={dogBreedData}/>
            </>
        )
    }
}

export default DogCard