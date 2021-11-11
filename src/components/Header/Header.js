import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

const Header = props => {
  return (
    <div className='Header'>
      <Link className='logoContainer' to='/'>
        <Logo />
      </Link>
      <nav className='options'>
        <Link className='option' to='/'>
          MAIN
        </Link>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
      </nav>
    </div>
  );
};

export default Header;
