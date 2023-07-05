import { IUser } from 'types';

export const getAuthorInfo = (user: IUser): string => {
  const { firstName, lastName, email } = user;
  const authorInfo = `${firstName} ${lastName}, ${email}`;
  return authorInfo;
};
