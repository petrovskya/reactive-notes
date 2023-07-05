import { IUser } from 'types';

export interface ISignUpForm extends Omit<IUser, 'createdAt, id'> {
  confirmPassword: string;
}
