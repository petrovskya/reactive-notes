import { IUser } from 'types';

export const convertToLowerCase = (text: string): string => {
  const FIRST_LETTER = 0;
  const SECOND_LETTER = 1;
  return text.charAt(FIRST_LETTER).toLowerCase() + text.slice(SECOND_LETTER);
};

export const compareUserEmail = (user: IUser, email: string): boolean => {
  return convertToLowerCase(user.email) === convertToLowerCase(email);
};
