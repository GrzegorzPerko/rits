export const compareDates = (d1, d2) => {
  const date1 = new Date(d1).getTime();
  const date2 = new Date(d2).getTime();
  return date1 < date2;
};