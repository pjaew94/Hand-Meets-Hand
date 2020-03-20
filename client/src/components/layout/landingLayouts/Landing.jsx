import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../styles/Landing.scss'
import LandingIntro from './LandingIntro'
import LandingHow from './LandingHow'

const Landing = () => {
  return(
    <Fragment>
    <LandingIntro />
    {/* <LandingHow /> */}
    </Fragment>
  )
}

export default Landing