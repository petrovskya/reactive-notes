import { IUser } from 'types';

export interface INavProps {
  isAuth: boolean;
  handleSignOut: () => void;
  user?: IUser;
}
