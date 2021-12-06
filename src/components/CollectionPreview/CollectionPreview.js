import React from 'react';
import { useNavigate } from 'react-router';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items, routeName }) => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate(`${routeName}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className='CollectionPreview'>
      <h1 className='title' onClick={handleOnclick}>
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
