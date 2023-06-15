import { EMPTY_STRING } from 'config';

export const SIGN_UP_INITIAL_VALUES = {
  email: EMPTY_STRING,
  password: EMPTY_STRING,
  confirmPassword: EMPTY_STRING,
  firstName: EMPTY_STRING,
  lastName: EMPTY_STRING,
  dateOfBirth: new Date(),
};

export const REQUIRED_MESSAGE = 'This field is required!';
