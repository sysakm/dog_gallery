import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import DogSmallCard from "./DogSmallCard.tsx";
import {changePageAction} from "../features/gallery/galleryActions.ts";
import {useState} from "react";
import {Link} from "react-router-dom";
import DogDetails from "./DogDetails.tsx";

const DOGS_PER_PAGE = 20
const BUTTON_INTERVAL = 2

function createCurrentButtons(pageNum: number, totalPages: number): Array<number> {
    const intervalMin = Math.max(1, pageNum - BUTTON_INTERVAL)
    const intervalMax = Math.min(totalPages, pageNum + BUTTON_INTERVAL)
    let lst: Array<number> = []
    for (let i = intervalMin; i <= intervalMax; i++) {
        lst.push(i)
    }
    return lst
}

function DogGallery() {
    const dispatch = useAppDispatch()
    const {pageNum, status, data} = useAppSelector(state => state.gallery)

    const [selectedDog, setSelectedDog] = useState<string>('')

    if (status !== 'success' || !data) {
        return <p>Can not display gallery currently</p>
    }

    const totalPages = Math.ceil(data.length / DOGS_PER_PAGE)
    const currentData = data.slice(
        DOGS_PER_PAGE * (pageNum - 1),
        DOGS_PER_PAGE * pageNum
    )
    const buttonNumberArray = createCurrentButtons(pageNum, totalPages)

    function handlePageChange(pageNum: number) {
        dispatch(changePageAction(pageNum))
    }

    const selectedBreed = data.find(dog => dog.id === selectedDog)

    return (
        <div>
            <div>
                <select value={selectedDog} onChange={(e) => setSelectedDog(e.target.value)}>
                    <option disabled={true} value={''}>
                        Choose the dog
                    </option>
                    {data.map(dog => (
                        <option key={`dog-option-${dog.id}`} value={dog.id}>
                            {dog.name}
                        </option>
                    ))}
                </select>
                {selectedBreed && (
                    <>
                        <DogDetails dogBreedData={selectedBreed}/>
                        <Link to={`/dogcard/${selectedDog}`}>
                            Open full page
                        </Link>
                    </>
                )}
            </div>
            <h2>Full gallery</h2>
            <div>
                {Math.min(...buttonNumberArray) > 1 && <>
                    <button
                        key={`gallery-button-${1}`}
                        type='button'
                        onClick={() => handlePageChange(1)}
                    >
                        {1}
                    </button>
                    {Math.min(...buttonNumberArray) > 2 && <span>...</span>}
                </>}
                {buttonNumberArray.map(item => (
                    <button
                        key={`gallery-button-${item}`}
                        type='button'
                        onClick={() => handlePageChange(item)}
                        disabled={item === pageNum}
                    >
                        {item}
                    </button>
                ))}
                {Math.max(...buttonNumberArray) < totalPages && <>
                    {Math.max(...buttonNumberArray) < totalPages - 1 && <span>...</span>}
                    <button
                        key={`gallery-button-${totalPages}`}
                        type='button'
                        onClick={() => handlePageChange(totalPages)}
                    >
                        {totalPages}
                    </button>
                </>}
            </div>
            <div>
                {currentData.map(dog => (
                    <DogSmallCard key={`dog-picture-${dog.id}`} dog={dog}/>
                ))}
            </div>
        </div>
    )
}

export default DogGallery