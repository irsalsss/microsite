import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../styles/layout/header.scss';

const Header = () => {

  const navLink = useCallback((title, to) => {
    return (
      <Link
        className="nav-link white capitalize"
        to={to}
      >
        {title}
      </Link>
    )
  }, [])

  return (
    <div className='container-header'>
      <h2 className="title-header flex white mb-1 capitalize">
        website test
      </h2>
      <nav className='wrapper-nav flex gap-1'>
        {navLink('homepage', '/')}
        {navLink('about', 'about')}
        {navLink('contact', 'contact')}
      </nav>
    </div>
  )
}

export default Header