import FavoritesGallery from "../components/FavoritesGallery.tsx";

function HomePage() {
    return (
        <section className='page'>
            <div className='page-heading'>
                <p className='page-heading__eyebrow'>Your saved collection</p>
                <h1>Favorite breeds</h1>
                <p>The dogs marked with a heart appear here.</p>
            </div>
            <FavoritesGallery/>
        </section>
    )
}

export default HomePage
