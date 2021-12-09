import React, { useState } from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebaseUtils';
import { signInWithEmailAndPassword } from 'firebase/auth';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import './SignIn.scss';

const SignIn = props => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err.code === 'auth/user-not-found')
        alert('존재하지 않는 계정입니다.');
      else if (err.code === 'auth/wrong-password')
        alert('비밀번호가 잘못되었습니다.');
      else console.error(err);
    } finally {
      setUserCredentials({
        email: '',
        password: '',
      });
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='SignIn'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          required
          handleChange={handleChange}
          label='Email'
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          required
          handleChange={handleChange}
          label='Password'
        />
        <div className='buttons'>
          <CustomButton type='submit' value='Submit Form'>
            Sign in
          </CustomButton>
          <CustomButton
            className='CustomButton'
            type='button'
            onClick={signInWithGoogle}
            googleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
