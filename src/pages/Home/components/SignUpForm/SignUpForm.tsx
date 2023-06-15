import { FC } from 'react';
import { FormikProps } from 'formik';
import { Button, Typography, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import {
  COMPONENT_TITLE,
  PLACEHOLDER_TEXT,
  BUTTON_TEXT,
  LABEL_TEXT,
} from 'config/types';

import { REQUIRED_MESSAGE, SIGN_UP_INITIAL_VALUES } from './constants';
import { StyledForm } from './styles';

const SignUpForm: FC<FormikProps<typeof SIGN_UP_INITIAL_VALUES>> = ({
  values,
  touched,
  errors,
  setFieldValue,
  handleChange,
  handleSubmit,
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <StyledForm onSubmit={handleSubmit}>
      <Typography variant='h4'>{COMPONENT_TITLE.SIGN_UP}</Typography>
      <TextField
        id='firstName'
        name='firstName'
        label={LABEL_TEXT.FIRST_NAME}
        placeholder={PLACEHOLDER_TEXT.FIRST_NAME}
        value={values.firstName}
        error={touched.firstName && !!errors?.firstName}
        helperText={touched.firstName && errors?.firstName}
        onChange={handleChange('firstName')}
      />
      <TextField
        id='lastName'
        name='lastName'
        label={LABEL_TEXT.LAST_NAME}
        placeholder={PLACEHOLDER_TEXT.LAST_NAME}
        value={values.lastName}
        error={touched.lastName && !!errors?.lastName}
        helperText={touched.lastName && errors?.lastName}
        onChange={handleChange('lastName')}
      />
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
      <DatePicker
        value={values.dateOfBirth}
        slotProps={{
          textField: {
            variant: 'outlined',
            label: LABEL_TEXT.DATE_OF_BIRTH,
            error: Boolean(errors.dateOfBirth),
            helperText: errors.dateOfBirth && REQUIRED_MESSAGE,
          },
        }}
        disableFuture
        onChange={(value) => setFieldValue('dateOfBirth', value, true)}
      />
      <TextField
        id='password'
        name='password'
        type='password'
        label={LABEL_TEXT.PASSWORD}
        placeholder={PLACEHOLDER_TEXT.PASSWORD}
        value={values.password}
        error={touched.password && !!errors?.password}
        helperText={touched.password && errors?.password}
        onChange={handleChange('password')}
      />
      <TextField
        id='confirmPassword'
        name='confirmPassword'
        type='password'
        label={LABEL_TEXT.CONFIRM_PASSWORD}
        placeholder={PLACEHOLDER_TEXT.CONFIRM_PASSWORD}
        value={values.confirmPassword}
        error={touched.confirmPassword && !!errors?.confirmPassword}
        helperText={touched.confirmPassword && errors?.confirmPassword}
        onChange={handleChange('confirmPassword')}
      />
      <Button color='primary' variant='contained' type='submit'>
        {BUTTON_TEXT.SIGN_UP}
      </Button>
    </StyledForm>
  </LocalizationProvider>
);

export default SignUpForm;
