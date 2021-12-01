import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/carAction';

import CustomButton from '../CustomButton/CustomButton';

import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className='CollectionItem'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collectionFooter'>
        <span className='name'>{name}</span>
        <span className='price'>{'$' + price}</span>
      </div>
      <CustomButton
        className='CustomButton'
        inverted
        onClick={() => addItem(item)}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
