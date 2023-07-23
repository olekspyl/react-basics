import { Profile, Statistics, FriendList, TransactionHistory} from './index';
import { user, data, friends, transactions } from '../path/to';
import {Container } from './profile/Profile.styled'


export const App = () => {
  return (
    <Container>
   <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      /> 
      <Statistics title="Upload stats" stats={data} ></Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
     );
};
