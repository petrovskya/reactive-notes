import { IUser } from 'types';

export interface IMobileNavProps {
  isAuth: boolean;
  handleSignOut: () => void;
  user?: IUser;
}
