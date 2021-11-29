import React, { Component } from 'react';
import { signInWithGoogle } from '../../firebase/firebaseUtils';

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

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  renderSwitch = selected => {
    switch (selected) {
      case 'green':
        return <span>green</span>;
      case 'red':
        return <span>red</span>;
      case 'yellow':
        return <span>yellow</span>;
      default:
        return <span>not selected</span>;
    }
  };

  render() {
    const { email, password } = this.state;
    const selected = 'asdkf';

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
        <div className='test'>
          <h2>selected color</h2>
          {this.renderSwitch(selected)}
        </div>
      </div>
    );
  }
}
