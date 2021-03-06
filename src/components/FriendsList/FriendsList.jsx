import React from 'react';
import PropTypes from 'prop-types';
import FriendsListItem from '../FriendsListItem/FriendsListItem';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  const item = friends.map(({ id, name, avatar, isOnline, age }) => (
    <FriendsListItem
      key={id}
      name={name}
      avatar={avatar}
      isOnline={isOnline}
      age={age}
    />
  ));
  return <ul className={styles.friendsList}>{item}</ul>;
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;
