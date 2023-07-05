import { IUser } from 'types';

const FIRST_LETTER = 0;

const SECOND_LETTER = 1;

export const convertToLowerCase = (text: string): string =>
  text.charAt(FIRST_LETTER).toLowerCase() + text.slice(SECOND_LETTER);

export const compareUserEmail = (user: IUser, email: string): boolean =>
  convertToLowerCase(user.email) === convertToLowerCase(email);
