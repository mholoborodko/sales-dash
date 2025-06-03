export type Customer = {
  id: string;
  customer: {
    fullName: string;
    photo: string | null;
  };

  email: string;
  phone: string;
  company: string;
  country: string;
  city: string;
  createdAt: string;
  isActive: boolean;
};

export enum CustomerStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
