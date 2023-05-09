import { IUser } from 'types';

export interface IUSersState {
  user: IUser | null;
  errorMessage: string;
  isLoading: boolean;
  isAuth: boolean;
}
