import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import CartItem from '../CartItem/CartItem';

import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='CartDropdown'>
      <div className='cartItems'>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  );
};

const mapStateToProps = rootState => ({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
