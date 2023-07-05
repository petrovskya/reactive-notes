import { LOCAL_STORAGE_KEYS } from 'config';
import { IUser } from 'types';

export const getActiveUser = () => {
  const userResponse = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);
  if (userResponse) {
    const user = JSON.parse(userResponse) as IUser;
    return user;
  }
};
