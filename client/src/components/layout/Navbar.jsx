import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

import '../styles/Navbar.scss';

const Navbar = ({ auth: {isAuthenticated, loading}, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link className='basic_li li'  to=''>View Posts</Link>
      </li>
      <li>
        <Link className='basic_li li'  to=''>Create Post</Link>
      </li>
      <li>
        <Link className='color1_li li'  to='/dashboard'>My Profile</Link>
      </li>
      <li>
        <a className='color2_li li' onClick={logout} href='#!'>Logout</a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>

      </li>
      <li>
        <Link className='basic_li li' to=''>View Posts</Link>
      </li>
      <li>
        <Link className='color1_li li'  to='/login'>Log In</Link>
      </li>
      <li>
        <Link className='color2_li li'  to='/register'>Sign Up</Link>
      </li>
    </ul>
  );

  return (
    <div className='nav_container'>
      <nav className='nav_inner_container'>
        <Link className='logo_text' to='/'>
          HmH
        </Link>
        { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect (mapStatetoProps, { logout }) (Navbar);
