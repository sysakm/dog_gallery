import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";
import {useEffect, useState} from "react";
import DogDetails from "../components/DogDetails.tsx";
import {Link} from "react-router-dom";

function SelectPage() {

    const dispatch = useAppDispatch()
    const {status, data, error} = useAppSelector(state => state.gallery)
    const [selectedDog, setSelectedDog] = useState<string>('')
    const selectedBreed = data?.find(dog => dog.id === selectedDog)

    useEffect(() => {
        if (status === 'idle') {
            void dispatch(requestGalleryData())
        }
    }, [dispatch, status])

    if (status === 'idle' || status === 'loading') {
        return <p>Loading...</p>
    } else if (status === 'error') {
        return <p><strong>{error}</strong></p>
    } else {
        return (
            <div>
                <select value={selectedDog} onChange={(e) => setSelectedDog(e.target.value)}>
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
                    <>
                        <DogDetails dogBreedData={selectedBreed}/>
                        <Link to={`/select/dogcard/${selectedDog}`}>
                            Open full page
                        </Link>
                    </>
                )}
            </div>
        )
    }
}

export default SelectPage