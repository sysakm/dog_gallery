import {Link, NavLink} from "react-router-dom";

function HeaderNavBar() {
    return (
        <div className='header-nav-bar'>
            <Link className='app-brand' to='/home' aria-label='Dog Gallery home'>
                <span className='app-brand__mark' aria-hidden='true'>DG</span>
                <span>Dog Gallery</span>
            </Link>
            <nav className='app-nav' aria-label='Main navigation'>
                <NavLink
                    className={({isActive}) => `app-nav__link${isActive ? ' active' : ''}`}
                    to='/home'
                >Home</NavLink>
                <NavLink
                    className={({isActive}) => `app-nav__link${isActive ? ' active' : ''}`}
                    to='/select'
                >Select Gallery</NavLink>
                <NavLink
                    className={({isActive}) => `app-nav__link${isActive ? ' active' : ''}`}
                    to='/gallery'
                >Full Gallery</NavLink>
            </nav>
        </div>
    )
}

export default HeaderNavBar
