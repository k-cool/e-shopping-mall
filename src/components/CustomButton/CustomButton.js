import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'googleSignIn' : ''} CustomButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
