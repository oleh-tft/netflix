import { NavLink, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './HeaderBrowse.css'
import { Logo } from './Logo';
import { useNavigate } from 'react-router-dom';

export function HeaderBrowse() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id='header-browse' className={scrolled ? 'scrolled' : ''}>
      <div className='browse-logo'>
        <Logo cursor="pointer" onClick={() => navigate('/browse')}/>
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

  );
}