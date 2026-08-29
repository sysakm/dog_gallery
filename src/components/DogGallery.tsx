import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import DogGalleryEntry from "./DogGalleryEntry.tsx";
import {changePageAction} from "../features/gallery/galleryActions.ts";

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

    return (
        <div>
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
                    <DogGalleryEntry key={`dog-picture-${dog.id}`} dog={dog}/>
                ))}
            </div>
        </div>
    )
}

export default DogGallery