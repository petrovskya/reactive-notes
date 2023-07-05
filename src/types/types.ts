import { FILTER_OPTIONS } from 'config';

export interface INote {
  id: string;
  userId: string;
  title: string;
  description: string;
  dateCreation: string;
  author: string;
  isShared: boolean;
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  dateOfBirth: string;
}

export interface IFilters {
  filterOption?: FILTER_OPTIONS;
  filterValue?: string;
}
