export enum ReportType {
  SALES = 'SALES',
  CUSTOMERS = 'CUSTOMERS',
  PRODUCTS = 'PRODUCTS',
  FINANCE = 'FINANCE',
}

export type ReportModel = {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  type: ReportType;
};
