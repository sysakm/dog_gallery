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
        <button type='button' onClick={handleToggleFavorite}>
            {dogInFavorites ? 'Remove from favorites' : 'Add to favorites'}
        </button>
    )
}

export default FavoritesButton