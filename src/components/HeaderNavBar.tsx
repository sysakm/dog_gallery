import {NavLink} from "react-router-dom";

function HeaderNavBar() {
    return (
        <nav>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/select'>Select Gallery</NavLink>
            <NavLink to='/gallery'>Full Gallery</NavLink>
        </nav>
    )
}

export default HeaderNavBar