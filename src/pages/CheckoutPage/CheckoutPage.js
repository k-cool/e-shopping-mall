import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';

import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className='CheckoutPage'>
      <div className='checkoutHeader'>
        <div className='headerBlock'>
          <span>Product</span>
        </div>
        <div className='headerBlock'>
          <span>Description</span>
        </div>
        <div className='headerBlock'>
          <span>Quantity</span>
        </div>
        <div className='headerBlock'>
          <span>Price</span>
        </div>
        <div className='headerBlock'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>TOTAL: $ {total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
