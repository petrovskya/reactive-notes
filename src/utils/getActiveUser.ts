import { IUser } from 'types';

export const getActiveUser = (): IUser | null => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  } else return null;
};
