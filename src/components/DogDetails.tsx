import type {DogBreed} from "../types/dog.ts";
import DogImage from "./DogImage.tsx";
import FavoritesButton from "./FavoritesButton.tsx";

type Props = {
    dogBreedData: DogBreed
}

function DogDetails({dogBreedData}: Props) {
    return (
        <article className='dog-details'>
            <div className='dog-details__media'>
                <DogImage src={dogBreedData.mainImageUrl} name={dogBreedData.name}/>
                <FavoritesButton dogId={dogBreedData.id}/>
                <span className='dog-details__id'>#{dogBreedData.id}</span>
            </div>
            <div className='dog-details__content'>
                <p className='dog-details__eyebrow'>{dogBreedData.breedGroup}</p>
                <h3>{dogBreedData.name}</h3>
                <p className='dog-details__description'>{dogBreedData.description}</p>
                <p><strong>Temperament:</strong> {dogBreedData.temperament}</p>
                <p><strong>Origin:</strong> {dogBreedData.origin}</p>
                <p>{dogBreedData.history}</p>
                <dl className='dog-stats'>
                    <div>
                        <dt>Life Span</dt>
                        <dd>{dogBreedData.lifeSpan}</dd>
                    </div>
                    <div>
                        <dt>Weight</dt>
                        <dd>{dogBreedData.weight}</dd>
                    </div>
                    <div>
                        <dt>Height</dt>
                        <dd>{dogBreedData.height}</dd>
                    </div>
                </dl>
            </div>
        </article>
    )
}

export default DogDetails
