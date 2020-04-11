import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../../styles/LandingIntro.scss';
import heartSvg from '../../../svgs/homeSvg.svg';
import danceSvg from '../../../svgs/BalletDoodle.svg';

const LandingIntro = ({ isAuthenticated }) => {




  return (
    <div className='landing_intro_container'>
      <div className='inner_container'>
        <div className='upper_container'>
        <div className="h1_container">
          <h1>
            Let's reach out to those who need us.
          </h1>
          </div>
          <img src={heartSvg} alt='Heart Svg'></img>
        </div>
        <div className='lower_container'>
          <img src={danceSvg} alt='Dance Svg'></img>
          <div className='lower_right_container'>
          <div className="h3_container">
            <h3>
              Hand Meets Hand is the number one platform for finding the best
              volunteer opportunties you can participate in! If you or your
              organization is the one need of help, don't be afraid to reach
              out!
            </h3>
            </div>
            <div className='buttons_container'>
              <LinkScroll
                className='how_button'
                activeClass=''
                to='LandingHow'
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={1000}
                isDynamic={true}
              >
                Show How
              </LinkScroll>
              <Link className='post_button' to=''>
                Show Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LandingIntro.propTypes ={
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(LandingIntro);
