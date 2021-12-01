import React from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/userSelectors';

import './UserInfo.scss';

const UserInfo = currentUser => {
  const { displayName, photoURL } = currentUser;
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

const mapStateToProps = rootState => ({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(UserInfo);
