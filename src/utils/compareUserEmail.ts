import { IUser } from 'types';

const convertToLoweCase = (text: string): string => {
  const FIRST_LETTER = 0;
  const SECOND_LETTER = 1;
  return text.charAt(FIRST_LETTER).toLowerCase() + text.slice(SECOND_LETTER);
};

export const compareUserEmail = (user: IUser, email: string): boolean => {
  return convertToLoweCase(user.email) === convertToLoweCase(email)
    ? true
    : false;
};
