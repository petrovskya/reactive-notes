import { IUser } from 'types';

export interface IHomeProps {
  user: IUser | null;
  isAuth: boolean;
  isRegistration: boolean;
  handleSignOut: () => void;
  toggleRegistration: () => void;
}
