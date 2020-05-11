import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

import '../styles/CreateProfile.scss';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {

  const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    bio: '',
    linkedin: '',
    youtube: '',
    facebook: '',
    twitter: '',
    instagram: '',
  }
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      setFormData(profileData);
    }

  }, [loading, getCurrentProfile, profile])

  const {
    company,
    website,
    location,
    status,
    bio,
    linkedin,
    youtube,
    facebook,
    twitter,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <div className='create_profile_container'>
      <div className='inner_container'>
        <div className='create_profile_text'>Create Profile</div>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form_inner_container'>
            <div className='left_form_container'>
              <div className='header_text'>About You</div>
              <div className='form_group'>
                <div className='form_text'>
                  What is your current status? (Ex: Job Title or Student)
                </div>
                <input
                  className='selector'
                  name='status'
                  value={status}
                  onChange={onChange}
                >
                </input>
              </div>

              <div className='form_group'>
                <div className='form_text'>
                  What is the name of the company or organization you are
                  representing or involved in?
                </div>
                <input
                  className='create_profile_form_input'
                  type='text'
                  placeholder='Company'
                  name='company'
                  value={company}
                  onChange={onChange}
                />
              </div>
              <div className='form_group'>
                <div className='form_text'>
                  If applicable, what is the website of the company/organization
                  you're representing?
                </div>
                <input
                  className='create_profile_form_input'
                  type='text'
                  placeholder='Website'
                  name='website'
                  value={website}
                  onChange={onChange}
                />
              </div>
              <div className='form_group'>
                <div className='form_text'>
                  Location of your company or organization? Address if you are
                  not involved in either option.
                </div>
                <input
                  className='create_profile_form_input'
                  type='text'
                  placeholder='Location'
                  name='location'
                  value={location}
                  onChange={onChange}
                />
              </div>
              <div className='form_group'>
                <div className='form_text'>Tell us a little about yourself</div>
                <textarea
                  className='create_profile_form_text'
                  placeholder='A short bio of yourself'
                  name='bio'
                  value={bio}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className='right_form_container'>
              <div className='header_text'>
                Social Media <span>&#40;Optional&#41;</span>
              </div>
              <div className='form_group'>
                <div className='form_text'>LinkedIn</div>
                <input
                  className='create_profile_form_input'
                  type='text'
                  placeholder='LinkedIn URL'
                  name='linkedin'
                  value={linkedin}
                  onChange={onChange}
                />
              </div>
              <div className='form_group'>
                <div className='form_text'>Facebook</div>
                <input
                  className='create_profile_form_input'
                  type='text'
                  placeholder='Facebook URL'
                  name='facebook'
                  value={facebook}
                  onChange={onChange}
                />
              </div>
              <div className='form_group'>
                <div className='form_text'>Twitter</div>
                <input
                  className='create_profile_form_input'
                  type='text'
                  placeholder='Twitter URL'
                  name='twitter'
                  value={twitter}
                  onChange={onChange}
                />
              </div>
              <div className='form_group'>
                <div className='form_text'>Instagram</div>
                <input
                  className='create_profile_form_input'
                  type='text'
                  placeholder='Instagram URL'
                  name='instagram'
                  value={instagram}
                  onChange={onChange}
                />
              </div>
              <div className='form_group'>
                <div className='form_text'>Youtube</div>
                <input
                  className='create_profile_form_input'
                  type='text'
                  placeholder='Youtube URL'
                  name='youtube'
                  value={youtube}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className='button_container'>
            <div className='button_inner_container'>
              <input type='submit' className='submit_button' />
              <Link className='back_button' to='/dashboard'>
                Go Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
