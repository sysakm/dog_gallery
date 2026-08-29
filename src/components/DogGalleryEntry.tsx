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
        <div>
            <FavoritesButton dogId={dog.id}/>
            <Link to={`/${from}/dogcard/${dog.id}`}>
                <h5>#{dog.id} {dog.name} (group {dog.breedGroup})</h5>
                <DogImage src={dog.mainImageUrl} name={dog.name}/>
            </Link>
        </div>
    )
}

export default DogGalleryEntry