import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebaseUtils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='signin'>
            SIGN IN
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
