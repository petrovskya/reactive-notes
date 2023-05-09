import * as yup from 'yup';

const validateSignUpForm = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  firstName: yup
    .string()
    .min(3, 'First name should be of minimum 3 characters length')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(3, 'Last name should be of minimum 3 characters length')
    .required('Last name is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
});

const validateSignInForm = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export { validateSignInForm, validateSignUpForm };
