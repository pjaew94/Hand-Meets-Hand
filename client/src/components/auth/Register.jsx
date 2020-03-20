import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

import '../styles/Register.scss';
import registerSvg from '../../svgs/CoffeeDoddle.svg';

const Register = ({ setAlert, register, isAuthenticated }) => {
  // To use for onChange handler.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className='register_container'>
      <div className='register_form_container'>
        <div className='form_container'>
          <form className='form' onSubmit={e => onSubmit(e)}>
            <input
              className='register_form_input'
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={e => onChange(e)}
            />
            <input
              className='register_form_input'
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={e => onChange(e)}
            />
            <input
              className='register_form_input'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
            />
            <input
              className='register_form_input'
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={e => onChange(e)}
            />
            
            <input type='submit' className='register_button' value='Register' />
              
          </form>
            
        </div>
        <div className='register_img_container'>
          <img src={registerSvg} alt='Coffee Boy'></img>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
  };
  // const mapStateToProps = state => ({
  //   isAuthenticated: state.auth.isAuthenticated
  // });

export default connect(null, { setAlert })(Register);
