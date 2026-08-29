import {Link} from "react-router-dom";
import DogCard from "../components/DogCard.tsx";

function DogCardPage() {
    return (
        <>
            <Link to={'/gallery'}>
                Back to gallery
            </Link>
            <DogCard/>
        </>
    )
}

export default DogCardPage