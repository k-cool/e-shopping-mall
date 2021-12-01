import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, addItem, removeItem } from '../../redux/cart/carAction';

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, deleteItem, addItem, removeItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='CheckoutItem'>
      <div className='imageContainer'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='removeButton' onClick={() => deleteItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
