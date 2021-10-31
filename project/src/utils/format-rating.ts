export function convertRatingToPercent(value: number):string {
  if (value < 0 || value > 5) {
    throw new Error('The rating has to be from 0 to 5');
  }

  return `${value * 20}%`;
}
