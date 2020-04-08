import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import '../styles/Login.scss';

import loginSvg from '../../svgs/IceCreamDoodle.svg';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login_container'>
      <div className='login_form_container'>
        <div className='login_img_container'>
          <img src={loginSvg} alt='icecream'></img>
        </div>
        <div className='form_container'>
          <form className='form' onSubmit={e => onSubmit(e)}>
            <input
              className='login_form_input'
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />

            <input
              className='login_form_input'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              minLength='6'
            />
            <input type='submit' className='login_button' value='Login' />
            <div className='new_user_prompt'>
              New to Hand Meets Hand? <Link class='prompt_link' to='/register'>Sign up</Link> now!
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
