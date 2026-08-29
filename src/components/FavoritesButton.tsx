import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {addToFavoritesAction, removeFromFavoritesAction} from "../features/favorites/favoritesActions.ts";

type Props = {
    dogId: string;
}

function FavoritesButton({dogId}: Props) {
    const dispatch = useAppDispatch()
    const {favoritesList} = useAppSelector(state => state.favorites)
    const dogInFavorites = !!favoritesList.find(curId => curId === dogId)

    function handleToggleFavorite() {
        dispatch(
            dogInFavorites ? removeFromFavoritesAction(dogId) : addToFavoritesAction(dogId)
        )
    }

    return (
        <button
            className={`favorite-button${dogInFavorites ? ' favorite-button--active' : ''}`}
            type='button'
            onClick={handleToggleFavorite}
            aria-label={dogInFavorites ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={dogInFavorites}
            title={dogInFavorites ? 'Remove from favorites' : 'Add to favorites'}
        >
            <svg aria-hidden='true' viewBox='0 0 24 24'>
                <path d='M12 21s-7.2-4.35-9.42-8.46C.85 9.35 2.15 5.5 5.7 4.38A5.4 5.4 0 0 1 12 6.3a5.4 5.4 0 0 1 6.3-1.92c3.55 1.12 4.85 4.97 3.12 8.16C19.2 16.65 12 21 12 21Z'/>
            </svg>
            <span className='sr-only'>
                {dogInFavorites ? 'Remove from favorites' : 'Add to favorites'}
            </span>
        </button>
    )
}

export default FavoritesButton
