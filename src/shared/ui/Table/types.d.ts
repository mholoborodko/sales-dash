/* eslint-disable unused-imports/no-unused-vars */
import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends unknown, TValue> {
    headerClassName?: string;
    cellClassName?: string;
    width?: string | number;
  }
}
