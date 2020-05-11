import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from '../profile/UsersProfile'
import Experience from './Experience';
import Education from './Education'
import { connect } from 'react-redux';

import { IconContext } from 'react-icons';
import { FiPlus, FiEdit3 } from 'react-icons/fi';
import '../styles/DashboardActions.scss';

const DashboardActions = ({ profile: { profile, loading } }) => {
  return (
    <div className='dashboard_actions_container'>
      <div className='inner_container'>
        <div className='profile_container content_container'>
          <div className='header_container'>
            <div className='type_text'>Profile</div>
            <Link to='/edit-profile' className='plus_icon'>
              <IconContext.Provider value={{ className: 'icon' }}>
                <FiEdit3 />
              </IconContext.Provider>
            </Link>
          </div>
          <UserProfile profile={profile} />
        </div>

        <div className='experience_education_container'>
          <div className='experience_container content_container'>
            <div className='header_container'>
              <div className='type_text'>Experience</div>
              <Link to='/add-experience' className='plus_icon'>
                <IconContext.Provider value={{ className: 'icon' }}>
                  <FiPlus />
                </IconContext.Provider>
              </Link>
            </div>
            <Experience experience={profile.experience} />
          </div>
          <div className='education_container content_container'>
            <div className='header_container'>
              <div className='type_text'>Education</div>
              <Link to='/add-education' className='plus_icon'>
                <IconContext.Provider value={{ className: 'icon' }}>
                  <FiPlus />
                </IconContext.Provider>
              </Link>
            </div>
            <Education education={profile.education} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps)(DashboardActions);
