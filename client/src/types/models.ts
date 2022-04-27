import Roles from './roles';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  role: Roles;
  birthday: Date;
  email: string;
  password?: string;
}

export interface Wallet {
  id?: number;
  name: string;
  description: string;
  created: string | Date;
  edited?: Date
}

export interface Asset {
  id?: number;
  walletId: number;
  name: string;
  assetType: string;
  balance: number;
}

export interface Income {
  id?: number;
  walletId: number;
  name: string;
  incomeType: string;
  amount: number;
  grossAmount: number;
  starDate: Date;
  endDate: Date;
}

export interface Expense {
  id?: number;
  walletId: number;
  name: string;
  expenseType: string;
  amount: number;
  grossAmount: number;
  starDate: Date;
  endDate: Date;
}
