import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section>
      <ul className={style.friend}>
        {friends.map(item => (
          <li key={item.id} className={style.item}>
            <span className={item.isOnline ? style.isOnline : style.status} />
            <img
              className={style.avatar}
              src={item.avatar}
              alt={item.name}
              width="48"
            />
            <p className={style.name}>{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
