import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";
import {useEffect} from "react";
import DogSelect from "../components/DogSelect.tsx";

function SelectPage() {

    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.gallery.status)
    const error = useAppSelector(state => state.gallery.error)

    useEffect(() => {
        if (status === 'idle') {
            void dispatch(requestGalleryData())
        }
    }, [dispatch, status])

    if (status === 'idle' || status === 'loading') {
        return <p className='state-message state-message--loading'>Loading...</p>
    } else if (status === 'error') {
        return <p className='state-message state-message--error'><strong>{error}</strong></p>
    } else {
        return (
            <section className='page'>
                <div className='page-heading'>
                    <p className='page-heading__eyebrow'>Find your match</p>
                    <h1>Selection gallery</h1>
                    <p>Choose a breed to inspect its profile without another request.</p>
                </div>
                <DogSelect />
            </section>
        )
    }
}

export default SelectPage
