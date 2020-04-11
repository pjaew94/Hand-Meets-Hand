import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

import noProfileSvg from '../../svgs/PettingDoodle.svg';
import '../styles/Dashboard.scss';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className='dashboard_container'>
      {profile === null ? (
        <div className='no_profile_dashboard_container'>
          <div className='inner_container'>
            <div className='left_container'>
              <div className='text_container'>
                <div className='greeting_text'>Hey, {user && user.name}!</div>
                <div className='text_1'>
                  It looks like you haven't set up your profile yet!{' '}
                </div>
                <div className='text_2'>
                  It's important to set up your profile so that other helpers and
                  organizations can get a better understanding of who you are!
                </div>
                <div className="text_3">
                  Click the button below to start!
                </div>
                <div className='button_container'>
                  <Link className='button' to='/create-profile'>
                    Create Profile
                  </Link>
                </div>  
              </div>
            </div>
            <div className='right_container'>
              <img src={noProfileSvg} alt='dog petting'></img>
            </div>
          </div>
        </div>
      ) : (
        <div className='profile_dashboard_container'></div>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
