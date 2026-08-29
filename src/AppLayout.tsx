import {Outlet} from "react-router-dom";
import HeaderNavBar from "./components/HeaderNavBar.tsx";
import HeaderStatusBar from "./components/HeaderStatusBar.tsx";

function AppLayout() {
    return (
        <div className='app-shell'>
            <header className='app-header'>
                <HeaderNavBar/>
                <HeaderStatusBar/>
            </header>
            <main className='app-main'>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
