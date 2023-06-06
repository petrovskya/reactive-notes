import { IUser } from 'types';

export interface IHomeProps {
  user?: IUser;
  isAuth: boolean;
  isRegistrationVisible: boolean;
  handleSignOut: () => void;
  toggleRegistrationVisible: () => void;
}
