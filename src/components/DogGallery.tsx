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
    if (data.length === 0) {
        return <p>No breeds were returned.</p>
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
        <section className='gallery-section' aria-label='All dog breeds'>
            <div className='pagination' aria-label='Gallery pages'>
                {Math.min(...buttonNumberArray) > 1 && <>
                    <button
                        className='pagination__button'
                        key={`gallery-button-${1}`}
                        type='button'
                        onClick={() => handlePageChange(1)}
                    >
                        {1}
                    </button>
                    {Math.min(...buttonNumberArray) > 2 && <span className='pagination__ellipsis'>...</span>}
                </>}
                {buttonNumberArray.map(item => (
                    <button
                        className='pagination__button'
                        key={`gallery-button-${item}`}
                        type='button'
                        onClick={() => handlePageChange(item)}
                        disabled={item === pageNum}
                    >
                        {item}
                    </button>
                ))}
                {Math.max(...buttonNumberArray) < totalPages && <>
                    {Math.max(...buttonNumberArray) < totalPages - 1 && <span className='pagination__ellipsis'>...</span>}
                    <button
                        className='pagination__button'
                        key={`gallery-button-${totalPages}`}
                        type='button'
                        onClick={() => handlePageChange(totalPages)}
                    >
                        {totalPages}
                    </button>
                </>}
            </div>
            <div className='dog-grid'>
                {currentData.map(dog => (
                    <DogGalleryEntry key={`dog-picture-${dog.id}`} from='gallery' dog={dog}/>
                ))}
            </div>
        </section>
    )
}

export default DogGallery
