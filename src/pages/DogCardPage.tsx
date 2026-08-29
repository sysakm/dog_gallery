import DogCard from "../components/DogCard.tsx";

function DogCardPage() {
    return (
        <section className='page'>
            <div className='page-heading page-heading--compact'>
                <p className='page-heading__eyebrow'>Breed profile</p>
                <h1>Full dog card</h1>
            </div>
            <DogCard/>
        </section>
    )
}

export default DogCardPage
