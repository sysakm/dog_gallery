import {createBrowserRouter, Navigate} from "react-router-dom";
import AppLayout from "../AppLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import GalleryPage from "../pages/GalleryPage.tsx";
import SelectPage from "../pages/SelectPage.tsx";
import DogCardPage from "../pages/DogCardPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import {store} from "./store.ts";
import {requestGalleryData} from "../features/gallery/galleryThunks.ts";

async function galleryLoader() {
    const status = store.getState().gallery.status
    if (status === 'idle') {
        void store.dispatch(requestGalleryData())
    }
    return null
}

async function favoritesLoader() {
    const status = store.getState().gallery.status
    const anyFavorites = store.getState().favorites.favoritesList.length > 0
    if (status === 'idle' && anyFavorites) {
        void store.dispatch(requestGalleryData())
    }
    return null
}

export const router = createBrowserRouter([{
    element: <AppLayout/>,
    children: [
        {index: true, element: <Navigate to='/home' replace/>},
        {path: '/home', element: <HomePage/>, loader: favoritesLoader},
        {path: '/gallery', element: <GalleryPage/>, loader: galleryLoader},
        {path: '/select', element: <SelectPage/>, loader: galleryLoader},
        {path: '/:from/dogcard/:dogId', element: <DogCardPage/>, loader: galleryLoader},
        {path: '*', element: <NotFoundPage/>}
    ]
}])