import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description/Description';
import Stats from './Stats/Stats';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const { avatar, alt, name, tag, location, stats } = user;
  return (
    <div className={styles.profile}>
      <Description
        avatar={avatar}
        alt={alt}
        name={name}
        tag={tag}
        location={location}
      />
      <Stats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;
