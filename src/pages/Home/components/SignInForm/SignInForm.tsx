import { FC } from 'react';
import { FormikProps } from 'formik';
import { Button, Typography, TextField } from '@mui/material';

import { COMPONENT_TITLE, PLACEHOLDER_TEXT, BUTTON_TEXT } from 'config/types';

import { SignInInitialValues } from './constants';
import { StyledForm } from './styles';

const SignInForm: FC<FormikProps<typeof SignInInitialValues>> = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  touched,
  errors,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <Typography variant='h4'>{COMPONENT_TITLE.SIGN_IN}</Typography>
    <TextField
      id='email'
      name='email'
      placeholder={PLACEHOLDER_TEXT.EMAIL}
      value={values.email}
      onChange={handleChange('email')}
      onBlur={handleBlur('email')}
    />
    {errors.email && touched.email && <Typography>{errors.email}</Typography>}
    <TextField
      id='password'
      name='password'
      type='password'
      placeholder={PLACEHOLDER_TEXT.PASSWORD}
      value={values.password}
      onChange={handleChange('password')}
      onBlur={handleBlur('password')}
    />
    {errors.password && touched.password && (
      <Typography>{errors.password}</Typography>
    )}

    <Button color='primary' variant='contained' type='submit'>
      {BUTTON_TEXT.SIGN_IN}
    </Button>
  </StyledForm>
);

export default SignInForm;
