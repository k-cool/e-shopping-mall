import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/carAction';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='CartIcon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shoppingIcon' />
      <span className='itemCount'>0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
