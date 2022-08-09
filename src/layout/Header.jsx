import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {

  const navLink = (title, to) => {
    return (
      <Link
        className="nav-link white"
        to={to}
      >
        {title}
      </Link>
    )
  }
  return (
    <div className='container-header'>
      <h2 className="title-header flex white mb-1">
        Website Test
      </h2>
      <nav className='wrapper-nav flex gap-1'>
        {navLink('Homepage', '/')}
        {navLink('About', 'about')}
        {navLink('Contact', 'contact')}
      </nav>
    </div>
  )
}

export default Header