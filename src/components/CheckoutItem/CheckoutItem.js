import React from 'react';

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='CheckoutItem'>
      <div className='imageContainer'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='removeButton'>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
