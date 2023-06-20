import { IUser } from 'types';

export interface IUsersState {
  errorMessage: string;
  isLoading: boolean;
  isAuth: boolean;
  user?: IUser;
}
