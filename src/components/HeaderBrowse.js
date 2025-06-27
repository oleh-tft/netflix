import { NavLink, Outlet } from 'react-router-dom';
import './HeaderBrowse.css'
import { Logo } from './Logo';

export function HeaderBrowse() {
    return (
        <div>
            <div className="bggrad-br"></div>
            <div id='header-browse'>
                <div className='browse-logo'>
                    <Logo></Logo>
                </div>
                <nav className='browse-nav'>
                    <NavLink to='/browse'>Home</NavLink>
                    <NavLink to='/tvshows'>TV Shows</NavLink>
                    <NavLink to='/movies'>Movies</NavLink>
                    <NavLink to='/latest'>New & Popular</NavLink>
                    <NavLink to='/my-list'>My List</NavLink>
                    <NavLink to='/original-audio'>Browse by Languages</NavLink>
                </nav>
            </div>
        </div>
    );
}