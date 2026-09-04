import {useAppSelector} from "../app/hooks.ts";
import DogGallery from "../components/DogGallery.tsx";

function GalleryPage() {
    const status = useAppSelector(state => state.gallery.status)
    const error = useAppSelector(state => state.gallery.error)

    if (status === 'idle' || status === 'loading') {
        return <p className='state-message state-message--loading'>Loading...</p>
    } else if (status === 'error') {
        return <p className='state-message state-message--error'><strong>{error}</strong></p>
    } else {
        return (
            <section className='page'>
                <div className='page-heading'>
                    <p className='page-heading__eyebrow'>Browse every breed</p>
                    <h1>Full gallery</h1>
                    <p>Explore the complete collection and save the dogs you love.</p>
                </div>
                <DogGallery/>
            </section>
        )
    }
}

export default GalleryPage
