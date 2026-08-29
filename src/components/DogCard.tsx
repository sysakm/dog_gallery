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
        return <p className='state-message'>Need full dog data loaded to display individual dog profile.</p>
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

    const dogBreedData = data.find(dog => dog.id === dogId)
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
