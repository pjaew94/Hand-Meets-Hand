import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <div className='exp_edu_post' key={exp._id}>
      <div className='content_inner_container'>
        <div className='title'>{exp.title}</div>
        <div className='company'>{exp.company}</div>
        <div className='location'>{exp.location}</div>
        <div className='date'>
          <Moment className='date' format='YYYY/MM/DD'>
            {exp.form}
          </Moment>{' '}
          -{' '}
          {exp.to === null ? (
            ' Current'
          ) : (
            <Moment className='date' format='YYYY/MM/DD'>
              {exp.to}
            </Moment>
          )}
        </div>
      </div>
      <div className='button_container'>
        <button >
          <IconContext.Provider value={{ className: 'icon edit_icon' }}>
            <FiEdit2 />
          </IconContext.Provider>
        </button>
        <button onClick={() => deleteExperience(exp._id)}>
          <IconContext.Provider value={{ className: 'icon trash_icon' }}>
            <FiTrash2 />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  ));

  return <div className='exp_edu_container'>{experiences}</div>;
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
