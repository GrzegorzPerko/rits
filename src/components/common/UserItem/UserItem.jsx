import './UserItem.css';
import TransactionItem from '../TransactionItem/TransactionItem'
import { useCallback } from 'react';
import { calcAllPoints } from '../../../utils/calcPoints';

const UserItem = ({ id, name, email , address, phone, translations }) => {
  const translationAmounts = useCallback(() => calcAllPoints(translations), [translations])
  return (
    <li className='user-item'>
      <h2>User details:</h2>
      <div className='user-details'>
        <strong key={'name-' + id}>{name}</strong>
        <span key={'email-' + id}>E-mail: {email}</span>
        <span key={'address-' + id}>Address: {address}</span>
        <span key={'phone-' + id}>Phone Number: {phone}</span>
        <strong key={'points-' + id}>Total points: {translationAmounts()}</strong>
      </div>
      <h2>Transactions:</h2>
      <ul>
        {translations.map(translation => (
          <TransactionItem key={translation.transaction_id} {...translation} />
        ))}
      </ul>
    </li>
  );
}

export default UserItem;
