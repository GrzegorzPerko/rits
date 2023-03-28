import React from 'react';
import { render, screen } from '@testing-library/react';
import UserItem from './UserItem';

describe('UserItem component', () => {
  const translations = [
    { transaction_id: 1, customer_id: 1, amount: 10 },
    { transaction_id: 2, customer_id: 1, amount: 20 },
    { transaction_id: 3, customer_id: 1, amount: 30 },
  ];

  it('renders user details and transactions correctly', () => {
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St',
      phone: '555-555-1212',
      translations,
    };
     render(<UserItem {...user} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('E-mail: john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Address: 123 Main St')).toBeInTheDocument();
    expect(screen.getByText('Phone Number: 555-555-1212')).toBeInTheDocument();
    expect(screen.getByText('Total points: 0')).toBeInTheDocument();
    const transactionItems = screen.getAllByTestId('transaction-item');
    expect(transactionItems).toHaveLength(3);
  });

  it('displays 0 total points when there are no translations', () => {
    const user = {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com',
      address: '456 Main St',
      phone: '555-555-1212',
      translations: [],
    };
    const { getByText } = render(<UserItem {...user} />);
    expect(screen.getByText('Total points: 0')).toBeInTheDocument();
  });
});