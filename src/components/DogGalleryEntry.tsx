import type {DogBreed} from "../types/dog.ts";
import {Link} from "react-router-dom";
import DogImage from "./DogImage.tsx";
import FavoritesButton from "./FavoritesButton.tsx";

type Props = {
    from: string;
    dog: DogBreed;
}

function DogGalleryEntry({from, dog}: Props) {
    return (
        <article className='dog-card'>
            <div className='dog-card__media'>
                <Link
                    className='dog-card__image-link'
                    to={`/${from}/dogcard/${dog.id}`}
                    aria-label={`Open details for ${dog.name}`}
                >
                    <DogImage src={dog.mainImageUrl} name={dog.name}/>
                </Link>
                <FavoritesButton dogId={dog.id}/>
            </div>
            <Link className='dog-card__content' to={`/${from}/dogcard/${dog.id}`}>
                <span className='dog-card__eyebrow'>#{dog.id} · {dog.breedGroup}</span>
                <h3>{dog.name}</h3>
            </Link>
        </article>
    )
}

export default DogGalleryEntry
