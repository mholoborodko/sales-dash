import { faker } from '@faker-js/faker';

import { MONTHS } from '@/shared/constants';

export const COLORS = ['#6366F1', '#22C55E', '#F97316', '#E11D48'];

export const MONTHLY_SALES = MONTHS.map(month => ({
  name: month,
  sales: faker.number.int({ min: 200, max: 600 }),
}));
