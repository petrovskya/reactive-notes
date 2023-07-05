import { object, ref, string } from 'yup';

import { VALIDATION_MESSAGES } from 'config';

const signUpValidationSchema = object({
  email: string()
    .email(VALIDATION_MESSAGES.VALIDITY.EMAIL)
    .required(VALIDATION_MESSAGES.REQUIRED.EMAIL),
  password: string()
    .min(8, VALIDATION_MESSAGES.MIN_LENGTH.PASSWORD)
    .required(VALIDATION_MESSAGES.REQUIRED.PASSWORD),
  confirmPassword: string()
    .min(8, VALIDATION_MESSAGES.MIN_LENGTH.PASSWORD)
    .required(VALIDATION_MESSAGES.REQUIRED.PASSWORD)
    .oneOf([ref('password')], VALIDATION_MESSAGES.VALIDITY.CONFIRM_PASSWORD),
  firstName: string()
    .min(3, VALIDATION_MESSAGES.MIN_LENGTH.FIRST_NAME)
    .required(VALIDATION_MESSAGES.REQUIRED.FIRST_NAME),
  lastName: string()
    .min(3, VALIDATION_MESSAGES.MIN_LENGTH.LAST_NAME)
    .required(VALIDATION_MESSAGES.REQUIRED.LAST_NAME),
  dateOfBirth: string().required(VALIDATION_MESSAGES.REQUIRED.DATE_OF_BIRTH),
});

const signInValidationSchema = object({
  email: string()
    .email(VALIDATION_MESSAGES.VALIDITY.EMAIL)
    .required(VALIDATION_MESSAGES.REQUIRED.EMAIL),
  password: string()
    .min(8, VALIDATION_MESSAGES.MIN_LENGTH.PASSWORD)
    .required(VALIDATION_MESSAGES.REQUIRED.PASSWORD),
});

const noteMenuValidationSchema = object({
  title: string().required(VALIDATION_MESSAGES.REQUIRED.TITLE),
  description: string()
    .max(450, VALIDATION_MESSAGES.MAX_LENGTH.DESCRIPTION)
    .required(VALIDATION_MESSAGES.REQUIRED.DESCRIPTION),
});

export {
  signInValidationSchema,
  signUpValidationSchema,
  noteMenuValidationSchema,
};
