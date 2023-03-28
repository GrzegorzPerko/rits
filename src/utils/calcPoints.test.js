import { calcAllPoints, calcPoints } from './calcPoints';

describe('calcPoints', () => {
  it('returns the correct points for a transaction over $100', () => {
    const result = calcPoints(150);
    expect(result).toBe(150); 
  });

  it('returns the correct points for a transaction between $50 and $100', () => {
    const result = calcPoints(75);
    expect(result).toBe(25); 
  });

  it('returns 0 points for a transaction under $50', () => {
    const result = calcPoints(30);
    expect(result).toBe(0);
  });
});

describe('calcAllPoints', () => {
  it('returns the correct total points for transactions made in April', () => {
    const transactions = [
      { date: '2022-11-01', amount: 75 },
      { date: '2023-02-10', amount: 150 },
      { date: '2023-03-15', amount: 50 },
      { date: '2023-03-21', amount: 25 },
    ];
    const result = calcAllPoints(transactions);
    expect(result).toBe(150);
  });

  it('returns 0 points when there are no transactions made in April', () => {
    const transactions = [
      { date: '2022-01-01', amount: 75 },
      { date: '2022-05-01', amount: 150 },
      { date: '2022-07-01', amount: 50 },
      { date: '2022-08-21', amount: 25 },
    ];
    const result = calcAllPoints(transactions);
    expect(result).toBe(0);
  });
});