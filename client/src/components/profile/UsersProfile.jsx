import React from 'react';
import PropTypes from 'prop-types';
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoYoutube,
} from 'react-icons/io';
import { IconContext } from 'react-icons';

const UserProfile = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    bio,
    user: { name, avatar },
  },
}) => {
  return (
    <div className='user_profile_container'>
      <div className='top_container'>
        <img className='avatar_img' src={avatar} alt='' />
        <div className='top_right_container'>
          <div className='name'>{name}</div>
          <div className='status_company'>
            {status} {company && <span>at {company}</span>}
          </div>
          <div className='location_website'>
            {location && <span>{location}</span>}{' '}
            {website && <span>{website}</span>}
          </div>
        </div>
      </div>
      <div className='bottom_container'>
        <div className='bio'>{bio && <span>{bio}</span>}</div>
        <div className='social'>
          {social && social.instagram && (
            <a
              href={social.instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconContext.Provider
                value={{ className: 'social_link' }}
              >
                <IoLogoInstagram />
                {social.instagram}
              </IconContext.Provider>
            </a>
          )}
          {social && social.facebook && (
            <a
              href={social.facebook}
              target='_blank'
              rel='noopener noreferrer'
            >
               <IconContext.Provider
                value={{ className: 'social_link' }}
              >
                <IoLogoFacebook />
                {social.facebook}
              </IconContext.Provider>
            </a>
          )}
          {social && social.twitter && (
            <a
              href={social.twitter}
              target='_blank'
              rel='noopener noreferrer'
            >
               <IconContext.Provider
                value={{ className: 'social_link' }}
              >
                <IoLogoTwitter />
                {social.twitter}
              </IconContext.Provider>
            </a>
          )}
          {social && social.linkedin && (
            <a
              href={social.linkedin}
              target='_blank'
              rel='noopener noreferrer'
            >
               <IconContext.Provider
                value={{ className: 'social_link' }}
              >
                <IoLogoLinkedin />
                {social.linkedin}
              </IconContext.Provider>
            </a>
          )}
          {social && social.youtube && (
            <a
              href={social.youtube}
              target='_blank'
              rel='noopener noreferrer'
            >
               <IconContext.Provider
                value={{ className: 'social_link' }}
              >
                <IoLogoYoutube />
                {social.youtube}
              </IconContext.Provider>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default UserProfile;
