import React, { useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../styles/CreateProfile.scss';

const CreateProfile = props => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    bio: '',
    isStudent: '',
    linkedin: '',
    youtube: '',
    facebook: '',
    twitter: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

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
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // CreateProfile(formData, history);
  };

  return (
    <div className='create_profile_container'>
      <div className='inner_container'>
        <div className='create_profile_text'>Create Profile</div>
        <form className='form' onSubmit={onSubmit}>
          <div className='form_inner_container'>
            <div className='left_form_container'>
              <div className='header_text'>About You</div>
              <div className='form_group'>
                <div className='form_text'>
                  Which of the following best describes your current status?
                </div>
                <select className='selector' name='status' value={status} onChange={onChange}>
                  <option value='0'>Select One</option>
                  <option value='Full Time'>Full Time Employee</option>
                  <option value='Part Time'>Part Time Employee</option>
                  <option value='Organization Representative'>
                    Organization Representative
                  </option>
                  <option value='Student or Learning'>
                    Student or Learning
                  </option>
                  <option value='Intern'>Intern</option>
                  <option value='Other'>Other</option>
                </select>
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
                  name='Twitter'
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
          <div className="button_inner_container">
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

CreateProfile.propTypes = {};

export default CreateProfile;
