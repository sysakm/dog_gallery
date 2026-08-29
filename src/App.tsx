import {Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./AppLayout.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import DogCardPage from "./pages/DogCardPage.tsx";
import SelectPage from "./pages/SelectPage.tsx";

function App() {
    return (
        <Routes>
            <Route element={<AppLayout/>}>
                <Route index element={<Navigate to='/home' replace/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/select' element={<SelectPage/>}/>
                <Route path='/gallery' element={<GalleryPage/>}/>
                <Route path='/:from/dogcard/:dogId' element={<DogCardPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}

export default App
