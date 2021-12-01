import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebaseUtils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectHidden } from '../../redux/cart/cartSelectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import UserInfo from '../UserInfo/UserInfo';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import './Header.scss';

const Header = ({ currentUser, hidden }) => {
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
        {currentUser && <CartIcon />}
        {currentUser && <UserInfo {...currentUser} />}
      </nav>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

export default connect(mapStateToProps)(Header);
