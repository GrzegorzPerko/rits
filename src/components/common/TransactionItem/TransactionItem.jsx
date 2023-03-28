import './TransactionItem.css';
import { calcPoints } from '../../../utils/calcPoints';

const TransactionItem = ({ transaction_id, date, amount }) => {
  return (
    <li className='transaction-item' data-testid='transaction-item'>
      <strong>Transaction ID: {transaction_id}</strong>
      <span className='user-item-email'>Date: {date}</span>
      <span className='user-item-address'>Amount: {amount}</span>
      <strong>Points: {calcPoints(amount)}</strong>
    </li>
  );
}

export default TransactionItem;
