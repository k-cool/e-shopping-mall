import React, { Component } from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebaseUtils';
import { signInWithEmailAndPassword } from 'firebase/auth';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import './SignIn.scss';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const tm = await signInWithEmailAndPassword(auth, email, password);
      console.log(tm);
      this.setState({ email: '', password: '' });
    } catch (err) {
      if (err.code === 'auth/user-not-found')
        alert('존재하지 않는 계정입니다.');
      else if (err.code === 'auth/wrong-password')
        alert('비밀번호가 잘못되었습니다.');
      else console.error(err);
    } finally {
      this.setState({ email: '', password: '' });
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='SignIn'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={email}
            required
            handleChange={this.handleChange}
            label='Email'
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            required
            handleChange={this.handleChange}
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
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
