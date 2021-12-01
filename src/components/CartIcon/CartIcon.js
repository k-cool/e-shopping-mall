import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/carAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='CartIcon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shoppingIcon' />
      <span className='itemCount'>{itemCount}</span>
    </div>
  );
};

const mapStataeToProps = rootState => ({
  itemCount: selectCartItemsCount(rootState),
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStataeToProps, mapDispatchToProps)(CartIcon);
