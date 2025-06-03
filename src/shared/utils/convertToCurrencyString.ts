export const convertToCurrencyString = (
  value: string | number,
  currency = 'USD'
): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  });

  return formatter.format(Number(value));
};
