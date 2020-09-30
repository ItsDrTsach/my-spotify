import React from 'react';
import { Link } from 'react-router-dom';
import logo from './guitar.png';
import person from './person.png';
import './navbar.css';
import { useStateValue } from '../../StateProvider';
function Navbar() {
  const [{ user }] = useStateValue();
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link to='/' className='navbar__link'>
          <img className='navbar__logo' src={logo} alt='music-logo' />
          <p>music Fullstack project</p>
        </Link>
      </div>
      <div className='navbar__container'>
        <Link to='/search' className='navbar__link'>
          <p>Search</p>
        </Link>
        <Link to='/add/song' className='navbar__link' disabled>
          <p>Add</p>
        </Link>
      </div>
      <div className='navbar__container'>
        <Link to='/' className='navbar__link navbar__link--end'>
          <img className='navbar__logo' src={person} alt='music-logo' />
          <p>Hello {user.name || 'Guest'}</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
