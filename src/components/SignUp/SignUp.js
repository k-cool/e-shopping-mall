import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import './SignUp.scss';

const SignUp = props => {
  const [userCredential, setUserCredential] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredential;

  const handleSubmit = async event => {
    console.log('wow');
    event.preventDefault();

    if (password.length < 6)
      return alert('비밀번호는 최소 6글자 이상이어야 합니다.');
    if (password !== confirmPassword)
      return alert('비밀번호가 일치하지 않습니다.');

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
    } catch (err) {
      if (err.code === 'auth/invalid-email')
        alert('이메일이 유효하지 않습니다.');
      else console.error(err);
    } finally {
      setUserCredential({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredential({ ...userCredential, [name]: value });
  };

  return (
    <div className='SignUp'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='signUpForm' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
