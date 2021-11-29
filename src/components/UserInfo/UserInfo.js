import React from 'react';

import './UserInfo.scss';

const UserInfo = ({ photoURL, displayName }) => {
  return (
    <div className='UserInfo'>
      <div className='imgWrapper'>
        <img
          className='img'
          alt='userPhoto'
          src={photoURL ? photoURL : '/images/person.png'}
        />
      </div>
      <span className='displayName'>{displayName}</span>
    </div>
  );
};

export default UserInfo;
