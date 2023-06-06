import { IUser } from 'types';

export interface IUsersState {
  user?: IUser;
  errorMessage: string;
  isLoading: boolean;
  isAuth: boolean;
}
