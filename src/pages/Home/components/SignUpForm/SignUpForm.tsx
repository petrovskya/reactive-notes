import { FC } from 'react';
import { FormikProps } from 'formik';
import { Button, Typography, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { CONSTANTS } from 'config';

import { SignUpInitialValues } from './constants';
import { StyledForm } from './styles';

const SignUpForm: FC<FormikProps<typeof SignUpInitialValues>> = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  touched,
  errors,
  setFieldValue,
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <StyledForm onSubmit={handleSubmit}>
      <Typography variant='h4'>{CONSTANTS.COMPONENT_TITLE.SIGN_UP}</Typography>
      <TextField
        id='firstName'
        name='firstName'
        placeholder={CONSTANTS.PLACEHOLDER_TEXT.FIRST_NAME}
        value={values.firstName}
        onChange={handleChange('firstName')}
        onBlur={handleBlur('firstName')}
      />
      {errors.firstName && touched.firstName && (
        <Typography>{errors.firstName}</Typography>
      )}
      <TextField
        id='lastName'
        name='lastName'
        placeholder={CONSTANTS.PLACEHOLDER_TEXT.LAST_NAME}
        value={values.lastName}
        onChange={handleChange('lastName')}
        onBlur={handleBlur('lastName')}
      />
      {errors.lastName && touched.lastName && (
        <Typography>{errors.lastName}</Typography>
      )}
      <TextField
        id='email'
        name='email'
        placeholder={CONSTANTS.PLACEHOLDER_TEXT.EMAIL}
        value={values.email}
        onChange={handleChange('email')}
        onBlur={handleBlur('email')}
      />
      {errors.email && touched.email && <Typography>{errors.email}</Typography>}
      <DatePicker
        value={values.dateOfBirth}
        slotProps={{
          textField: {
            variant: 'outlined',
            error: Boolean(errors.dateOfBirth),
            helperText: errors.dateOfBirth && 'This field is required!',
          },
        }}
        disableFuture
        onChange={(value) => setFieldValue('dateOfBirth', value, true)}
      />
      <TextField
        id='password'
        name='password'
        placeholder={CONSTANTS.PLACEHOLDER_TEXT.PASSWORD}
        value={values.password}
        onChange={handleChange('password')}
        onBlur={handleBlur('password')}
      />
      {errors.password && touched.password && (
        <Typography>{errors.password}</Typography>
      )}
      <TextField
        id='confirmPassword'
        name='confirmPassword'
        placeholder={CONSTANTS.PLACEHOLDER_TEXT.CONFIRM_PASSWORD}
        value={values.confirmPassword}
        onChange={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <Typography>{errors.confirmPassword}</Typography>
      )}
      <Button color='primary' variant='contained' type='submit'>
        {CONSTANTS.BUTTON_TEXT.SIGN_UP}
      </Button>
    </StyledForm>
  </LocalizationProvider>
);

export default SignUpForm;
