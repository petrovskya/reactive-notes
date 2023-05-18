import { IUser } from 'types';

export interface IUsersState {
  user: IUser | null;
  errorMessage: string;
  isLoading: boolean;
  isAuth: boolean;
}
