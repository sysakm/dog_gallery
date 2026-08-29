import type {DogBreed} from "../types/dog.ts";
import {Link} from "react-router-dom";
import DogImage from "./DogImage.tsx";

type Props = {
    dog: DogBreed
}

function DogGalleryEntry({dog}: Props) {
    return (
        <div>
            <Link to={'/gallery/dogcard/' + dog.id}>
                <h5>#{dog.id} {dog.name} (group {dog.breedGroup})</h5>
                <DogImage src={dog.mainImageUrl} name={dog.name}/>
            </Link>
        </div>
    )
}

export default DogGalleryEntry