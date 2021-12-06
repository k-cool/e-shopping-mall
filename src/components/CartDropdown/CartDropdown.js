import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/carAction';
import { selectCartItems } from '../../redux/cart/cartSelectors';

import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, dispatch }) => {
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

const mapStateToProps = rootState => ({
  cartItems: selectCartItems(rootState),
});

export default connect(mapStateToProps)(CartDropdown);
