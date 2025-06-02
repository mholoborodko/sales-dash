import { format } from 'date-fns';

export function toDateFormat(date: string | Date, dateFormat: string) {
  return format(new Date(date), dateFormat);
}
