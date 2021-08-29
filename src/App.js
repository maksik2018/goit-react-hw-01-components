import './App.css';
import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import user from './user.json';
import friends from './friends.json';
import statisticalData from './statistical-data.json';
import Statistics from './components/Statistics/Statistics.jsx';
import transactions from './transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory.jsx';

function App() {
  return (
    <div>
    <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<FriendList friends={friends} />
<Statistics title="Upload stats" stats={statisticalData} />
<TransactionHistory items={transactions} />
</div>
  );
}

export default App;
