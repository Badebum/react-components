import React from 'react';

import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/Statistic';
import FriendsList from './components/FriendsList/FriendsList';
import TransactionsHistory from './components/Transactions/TransactionsHistory';
import UserCard from './components/UserList/UsersCard';

import user from './components/Profile/user.json';
import statisticalData from './components/Statistic/statistical-data.json';
import friends from './components/FriendsList/friends.json';
import transactions from './components/Transactions/transactions.json';
import users from './components/UserList/users.json';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles}>
      <Profile {...user} />
      <Statistic title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionsHistory items={transactions} />
      <UserCard users={users} />
    </div>
  );
}

export default App;
