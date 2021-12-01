import React from 'react';

import './CustomButton.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'googleSignIn' : ''
      } CustomButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
