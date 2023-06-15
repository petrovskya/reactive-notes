import { FC } from 'react';
import { FormikProps } from 'formik';
import { Button, Typography, TextField } from '@mui/material';

import {
  COMPONENT_TITLE,
  PLACEHOLDER_TEXT,
  BUTTON_TEXT,
  LABEL_TEXT,
} from 'config/types';

import { SIGN_IN_INITIAL_VALUES } from './constants';
import { StyledForm } from './styles';

const SignInForm: FC<FormikProps<typeof SIGN_IN_INITIAL_VALUES>> = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <Typography variant='h4'>{COMPONENT_TITLE.SIGN_IN}</Typography>
    <TextField
      id='email'
      name='email'
      label={LABEL_TEXT.EMAIL}
      placeholder={PLACEHOLDER_TEXT.EMAIL}
      value={values.email}
      error={touched.email && !!errors?.email}
      helperText={touched.email && errors?.email}
      onChange={handleChange('email')}
    />
    <TextField
      id='password'
      name='password'
      type='password'
      label={LABEL_TEXT.PASSWORD}
      placeholder={PLACEHOLDER_TEXT.PASSWORD}
      value={values.password}
      helperText={touched.password && errors?.password}
      onChange={handleChange('password')}
    />
    <Button color='primary' variant='contained' type='submit'>
      {BUTTON_TEXT.SIGN_IN}
    </Button>
  </StyledForm>
);

export default SignInForm;
