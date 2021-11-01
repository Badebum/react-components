import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserListItem.module.css';

const UserListItem = ({ name, tag, location, avatar, stats, age }) => (
  <li className={styles.item}>
    <img src={avatar} alt="avatar" className={styles.avatar} width="300" />
    <p className={styles.tag}>{tag}</p>
    <p className={styles.name}>{name}</p>
    <p className={styles.location}>{location}</p>
    <p className={styles.age}>{age} years</p>
    <ul className={styles.statsList}>
      <li>
        <p className={styles.stats}>followers: {stats.followers}</p>
      </li>
      <li>
        {' '}
        <p className={styles.stats}>views: {stats.views}</p>
      </li>
      <li>
        {' '}
        <p className={styles.stats}>likes: {stats.likes}</p>
      </li>
    </ul>
  </li>
);

UserListItem.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default UserListItem;
