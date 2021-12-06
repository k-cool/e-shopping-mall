import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CollectionItem from '../CollectionItem/CollectionItem';
import WithSpinner from '../SpinnerHOC/WithSpinner';

import './Collection.scss';

const Collection = () => {
  const { categoryUrl } = useParams();
  const collection = useSelector(state => {
    const { collections } = state.shop;
    return collections ? collections[categoryUrl] : null;
  });

  const { title, items } = collection;

  return (
    <div className='CollectionPage'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WithSpinner(Collection);
