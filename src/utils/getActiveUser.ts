import { IUser } from 'types';

export const getActiveUser = (): IUser => {
  const user = localStorage.getItem('user');
  return user ? (JSON.parse(user) as IUser) : ({} as IUser);
};
