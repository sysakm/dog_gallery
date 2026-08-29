import {NavLink} from "react-router-dom";

function HeaderNavBar() {
    return (
        <nav>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/gallery'>Gallery</NavLink>
        </nav>
    )
}

export default HeaderNavBar