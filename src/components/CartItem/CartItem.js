import React from 'react';

import './CartItem.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className='CartItem'>
      <img alt='item' src={imageUrl} />
      <div className='itemDetails'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
