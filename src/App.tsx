import {Navigate, Route, Routes} from "react-router-dom";
import AppRouter from "./AppRouter.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
    return (
        <Routes>
            <Route element={<AppRouter/>}>
                <Route index element={<Navigate to='/home' replace/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/gallery' element={<GalleryPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}

export default App
