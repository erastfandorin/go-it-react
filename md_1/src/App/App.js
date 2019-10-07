import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import statistics from './Statistics/statistics.json';
import friends from './FriendList/friends.json';
import transaction from './TransactionHistory/transactions.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};

export default App;
