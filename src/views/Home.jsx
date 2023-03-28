import { useMemo } from 'react';
import UserItem from '../components/common/UserItem/UserItem';
import { useTransaction } from '../hooks/useTransactions';
import { useUsers } from '../hooks/useUsers';
import  './Home.css';

const HomePage = () => {
  const { filterTransactions } = useTransaction();
  const { data } = useUsers();

  const ListItems = useMemo(() => data.map((user) => (
    <UserItem {...user} key={'user-' + user.id} translations={filterTransactions(user.id)} />
  )), [data, filterTransactions]);
  
  return (
    <section data-testid="home-page">
      <h1>Users List</h1>
      <ul className='user-list'>
        {ListItems}
      </ul>
    </section>
  );
}

export default HomePage;
