import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <div className='exp_edu_post' key={edu._id}>
      <div className='content_inner_container'>
        <div className='title'>{edu.school}</div>
        <div className='company'>{edu.degree}</div>
        <div className='location'>{edu.fieldofstudy}</div>
        <div className='date'>
          <Moment className='date' format='YYYY/MM/DD'>
            {edu.form}
          </Moment>{' '}
          -{' '}
          {edu.to === null ? (
            ' Current'
          ) : (
            <Moment className='date' format='YYYY/MM/DD'>
              {edu.to}
            </Moment>
          )}
        </div>
      </div>
      <div className='button_container'>
        <button>
          <IconContext.Provider value={{ className: 'icon edit_icon' }}>
            <FiEdit2 />
          </IconContext.Provider>
        </button>
        <button onClick={() => deleteEducation(edu._id)}>
          <IconContext.Provider value={{ className: 'icon trash_icon' }}>
            <FiTrash2 />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  ));

  return <div className='exp_edu_container'>{educations}</div>;
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
