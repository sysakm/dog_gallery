import type {DogBreed} from "../types/dog.ts";
import DogImage from "./DogImage.tsx";

type Props = {
    dogBreedData: DogBreed
}

function DogDetails({dogBreedData}: Props) {
    return (
        <article>
            <aside>{dogBreedData.id}</aside>
            <DogImage src={dogBreedData.mainImageUrl} name={dogBreedData.name}/>
            <h3>{dogBreedData.name}</h3>
            <h4>{dogBreedData.breedGroup}</h4>
            <p>{dogBreedData.origin}</p>
            <p>{dogBreedData.description}</p>
            <p>{dogBreedData.temperament}</p>
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