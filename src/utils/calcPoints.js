import { compareDates } from './date'

export const calcAllPoints = (transactions) => 
  transactions.reduce((prev, current) => {
    const currentDate = new Date();
    const prevDate = currentDate.setMonth(currentDate.getMonth()-3);
    if(compareDates(prevDate, current.date)) {
      prev += calcPoints(current.amount);
    }
    return prev;
  }, 0)

export const calcPoints = (transaction) => {
  let points = 0;
  if (transaction > 100) {
    points += 2 * (transaction - 100);
    points += 1 * Math.min(transaction, 100) - 50;
  } else if (transaction > 50) {
    points += 1 * (transaction - 50);
  }
  return points;
}
