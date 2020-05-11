import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

import '../styles/AddExperience.scss'

const AddEducation = ({ addEducation, history}) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='add_experience_container'>
    <div className='inner_container'>
      <div className='inner_inner_container'>
        <div className='add_experience_text'>Add Education</div>
        <form
          className='form'
          onSubmit={(e) => {
            e.preventDefault();
            addEducation(formData, history);
          }}
        >
          <div className='form_group'>
            <div className='form_text'>Name of School</div>
            <input
            className='input'
              type='text'
    
              name='school'
              value={school}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form_group'>
            <div className='form_text'>Degree</div>
            <input
            className='input'
              type='text'
         
              name='degree'
              value={degree}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form_group'>
            <div className='form_text'>Field of Study</div>
            <input
            className='input'
              type='text'
          
              name='fieldofstudy'
              value={fieldofstudy}
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
              Current School
            </p>
          </div>

          <div className='form_group_textarea'>
            <div className='form_text'>
              Description of the Program
            </div>
            <textarea
            
              name='description'
              cols='30'
              rows='5'
              placeholder='Program Description'
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
  )
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { addEducation }
)(withRouter(AddEducation));