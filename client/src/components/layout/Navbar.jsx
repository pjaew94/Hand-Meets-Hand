import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/Navbar.scss';

const Navbar = () => {
  const authLinks = (
    <ul>
      <li>
        <Link className='basic_li li'  to=''>View Posts</Link>
      </li>
      <li>
        <Link className='basic_li li'  to=''>Create Post</Link>
      </li>
      <li>
        <Link className='color1_li li'  to=''>My Profile</Link>
      </li>
      <li>
        <Link className='color2_li li'  to=''>Logout</Link>
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
        {guestLinks}
      </nav>
    </div>
  );
};

export default Navbar;
