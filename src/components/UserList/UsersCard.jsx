import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.css';
import UsersListItem from '../UserListItem/UserListItem';

const UsersList = ({ users }) => {
  const item = users.map(({ id, name, tag, location, avatar, stats, age }) => (
    <UsersListItem
      key={id}
      name={name}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
      age={age}
    />
  ));
  return (
    <div className={styles.card}>
      <ul className={styles.userList}>{item}</ul>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersList;
