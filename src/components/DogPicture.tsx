import type {DogBreed} from "../types/dog.ts";
import {Link} from "react-router-dom";

type Props = {
    dog: DogBreed
}

function DogPicture({dog}: Props) {
    return (
        <div>
            <Link to={'/dogcard/' + dog.id}>
                <h5>#{dog.id} {dog.name} (group {dog.breedGroup})</h5>
                <img src={dog.mainImageUrl ?? ''} alt={dog.name}/>
            </Link>
        </div>
    )
}

export default DogPicture