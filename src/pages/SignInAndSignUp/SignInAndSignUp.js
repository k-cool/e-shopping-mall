import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './SignInAndSignUp.scss';

const SignInAndSignUp = props => {
  return (
    <div className='SignInAndSignUp'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
