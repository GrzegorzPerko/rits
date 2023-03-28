import React from 'react';
import { render,screen } from '@testing-library/react';
import TransactionItem from './TransactionItem';
import { calcPoints  } from '../../../utils/calcPoints';

describe('TransactionItem', () => {
  test('renders transaction information', () => {
    const transaction = {
      transaction_id: '1234',
      date: '2022-01-01',
      amount: 150,
    };
    render(<TransactionItem {...transaction} />);
    expect(screen.getByText(`Transaction ID: ${transaction.transaction_id}`)).toBeInTheDocument();
    expect(screen.getByText(`Date: ${transaction.date}`)).toBeInTheDocument();
    expect(screen.getByText(`Amount: ${transaction.amount}`)).toBeInTheDocument();
    expect(screen.getByText(`Points: ${calcPoints(transaction.amount)}`)).toBeInTheDocument();
  });

  describe('calcPoints', () => {
    test('calculates points correctly for amounts over 100', () => {
      expect(calcPoints(150)).toBe(150); 
      expect(calcPoints(200)).toBe(250); 
    });

    test('calculates points correctly for amounts between 50 and 100', () => {
      expect(calcPoints(75)).toBe(25); // 1 * (75 - 50)
      expect(calcPoints(90)).toBe(40); // 1 * (90 - 50)
    });

    test('returns 0 points for amounts under 50', () => {
      expect(calcPoints(10)).toBe(0);
      expect(calcPoints(45)).toBe(0);
    });
  });
});