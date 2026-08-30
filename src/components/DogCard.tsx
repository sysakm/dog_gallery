import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";
import DogDetails from "./DogDetails.tsx";

function DogCard() {

    const dispatch = useAppDispatch()
    const {status, data, error} = useAppSelector(state => state.gallery)
    const {from, dogId} = useParams()

    useEffect(() => {
        if (status === 'idle') {
            void dispatch(requestGalleryData())
        }
    }, [status, dispatch])

    if (status === 'idle' || status === 'loading') {
        return <p className='state-message state-message--loading'>Loading...</p>
    } else if (status === 'error') {
        return <p className='state-message state-message--error'><strong>{error}</strong></p>
    }
    if (from !== 'gallery' && from !== 'select' && from !== 'home') {
        return (
            <section className='state-message'>
                <p>Unknown card source</p>
                <div className='link-group'>
                    <Link className='action-link' to={`/home/dogcard/${dogId}`} replace>Go to home</Link>
                    <Link className='action-link' to={`/select/dogcard/${dogId}`} replace>Go to select gallery</Link>
                    <Link className='action-link' to={`/gallery/dogcard/${dogId}`} replace>Go to full gallery</Link>
                </div>
            </section>
        )
    }

    const dogBreedData = data?.find(dog => dog.id === dogId)
    if (!dogBreedData) {
        return <p className='state-message'>Could not find dog with ID {dogId} in data...</p>
    } else {
        return (
            <section className='dog-card-view'>
                <div className='detail-toolbar'>
                    <Link className='action-link action-link--back' to={`/${from}`}>
                        <span aria-hidden='true'>←</span> Back to {from}
                    </Link>
                </div>
                <DogDetails dogBreedData={dogBreedData}/>
            </section>
        )
    }
}

export default DogCard
