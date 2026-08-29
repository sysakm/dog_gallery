import {NavLink, Outlet} from "react-router-dom";

function AppRouter() {
    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/gallery'>Gallery</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default AppRouter