import type {DogBreed} from "../types/dog.ts";
import DogImage from "./DogImage.tsx";
import FavoritesButton from "./FavoritesButton.tsx";

type Props = {
    dogBreedData: DogBreed
}

function DogDetails({dogBreedData}: Props) {
    return (
        <article>
            <FavoritesButton dogId={dogBreedData.id}/>
            <aside>{dogBreedData.id}</aside>
            <DogImage src={dogBreedData.mainImageUrl} name={dogBreedData.name}/>
            <h3>{dogBreedData.name} ({dogBreedData.breedGroup})</h3>
            <p>{dogBreedData.description}</p>
            <p>{dogBreedData.temperament}</p>
            <p>Originates from {dogBreedData.origin}</p>
            <p>{dogBreedData.history}</p>
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

export default DogDetails