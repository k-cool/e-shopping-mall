import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/carAction';

import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnGoToCheckoutClicked = () => {
    navigate('checkout');
    dispatch(toggleCartHidden());
  };

  return (
    <div className='CartDropdown'>
      <div className='cartItems'>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='emptyMessage'>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleOnGoToCheckoutClicked}>
        GO TO CHECK OUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
