import { faker } from '@faker-js/faker';

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const COLORS = ['#6366F1', '#22C55E', '#F97316', '#E11D48'];

export const MONTHLY_SALES = MONTHS.map(month => ({
  name: month,
  sales: faker.number.int({ min: 200, max: 600 }),
}));
