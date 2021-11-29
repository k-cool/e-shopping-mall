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
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.error(err);
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
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
