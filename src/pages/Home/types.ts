import { IUser } from 'types';

export interface IHomeProps {
  isAuth: boolean;
  isRegistrationVisible: boolean;
  toggleRegistrationVisible: () => void;
  user?: IUser;
}
