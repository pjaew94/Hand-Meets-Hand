import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

import '../styles/AddExperience.scss';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='add_experience_container'>
      <div className='inner_container'>
        <div className='inner_inner_container'>
          <div className='add_experience_text'>Add Experience</div>
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              addExperience(formData, history);
            }}
          >
            <div className='form_group'>
              <div className='form_text'>Job Title</div>
              <input
              className='input'
                type='text'
                placeholder='Job Title'
                name='title'
                value={title}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='form_group'>
              <div className='form_text'>Name of Company</div>
              <input
              className='input'
                type='text'
                placeholder='Company'
                name='company'
                value={company}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='form_group'>
              <div className='form_text'>Location of the Company</div>
              <input
              className='input'
                type='text'
                placeholder='Location'
                name='location'
                value={location}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form_group'>
              <div className='form_text'>From Date</div>
              <input
              className='input'
                type='date'
                name='from'
                value={from}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form_group_to_date'>
              <div className='to_date_group'>
                <div className='form_text'>To Date</div>
                <input
                className='input'
                  type='date'
                  name='to'
                  value={to}
                  onChange={(e) => onChange(e)}
                  disabled={toDateDisabled ? 'disabled' : ''}
                />
              </div>
              <p>
                <input
                className='checkbox'
                  type='checkbox'
                  name='current'
                  checked={current}
                  value={current}
                  onChange={() => {
                    setFormData({ ...formData, current: !current });
                    toggleDisabled(!toDateDisabled);
                  }}
                />{' '}
                Current Job
              </p>
            </div>

            <div className='form_group_textarea'>
              <div className='form_text'>
                Brief Description of Job and Responsibilities
              </div>
              <textarea
              
                name='description'
                cols='30'
                rows='5'
                placeholder='Job Description'
                value={description}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='button_container'>
              <input type='submit' className='button_1' />
              <Link className='button_2' to='/dashboard'>
                Go Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
