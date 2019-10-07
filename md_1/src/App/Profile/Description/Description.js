import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css';

const Description = ({ avatar, alt, name, tag, location }) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt={alt} className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

Description.defaultProps = {
  alt: 'user avatar',
};

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
