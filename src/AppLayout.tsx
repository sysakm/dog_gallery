import {Outlet} from "react-router-dom";
import HeaderNavBar from "./components/HeaderNavBar.tsx";
import HeaderStatusBar from "./components/HeaderStatusBar.tsx";

function AppLayout() {
    return (
        <>
            <header>
                <HeaderNavBar/>
                <HeaderStatusBar/>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout