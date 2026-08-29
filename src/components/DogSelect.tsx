import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";
import {useEffect} from "react";
import DogDetails from "../components/DogDetails.tsx";
import {Link} from "react-router-dom";
import {changeSelectedAction} from "../features/gallery/galleryActions.ts";

function DogSelect() {

    const dispatch = useAppDispatch()
    const {selected, status, data} = useAppSelector(state => state.gallery)
    const selectedBreed = data?.find(dog => dog.id === selected)

    useEffect(() => {
        if (status === 'idle') {
            void dispatch(requestGalleryData())
        }
    }, [dispatch, status])

    function handleSelectDog(newSelected: string) {
        dispatch(changeSelectedAction(newSelected))
    }
    if (status !== 'success' || !data) {
        return <p>Can not display gallery currently</p>
    }

    return (
        <div>
            <select value={selected} onChange={(e) => handleSelectDog(e.target.value)}>
                <option disabled={true} value={''}>
                    Choose the dog
                </option>
                {data?.map(dog => (
                    <option key={`dog-option-${dog.id}`} value={dog.id}>
                        {dog.name}
                    </option>
                ))}
            </select>
            {selectedBreed && (
                <div>
                    <Link to={`/select/dogcard/${selected}`}>
                        Open full page
                    </Link>
                    <DogDetails dogBreedData={selectedBreed}/>
                </div>
            )}
        </div>
    )

}

export default DogSelect