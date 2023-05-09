import { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Typography } from '@mui/material';

import { compareUserEmail, validateSignInForm } from 'utils';
import { IUser } from 'types';
import { UseAppDispatch, useAppSelector } from 'store/hooks';
import { setUserAuth, setErrorMessage } from 'store/features';
import { getUser } from 'store/selectors';
import { fetchUsers } from 'api/queries';
import { ROUTE } from 'router';

import { SignInInitialValues } from './constants';
import SignInForm from './SignInForm';

const SignInFormContainer = () => {
  const { isAuth, errorMessage } = useAppSelector(getUser);
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();

  const { data: users }: UseQueryResult<IUser[]> = useQuery<IUser[]>(
    ['users'],
    fetchUsers,
  );

  const handleSubmit = (signInFormValues: typeof SignInInitialValues) => {
    const user = users?.find((user) =>
      compareUserEmail(user, signInFormValues.email),
    );
    const isPasswordCorrect = user?.password === signInFormValues.password;
    user
      ? isPasswordCorrect
        ? dispatch(setUserAuth(user))
        : dispatch(setErrorMessage('Wrong password'))
      : dispatch(setErrorMessage('User not found'));
  };

  useEffect(() => {
    isAuth && navigate(ROUTE.MY_NOTES);
  }, []);

  return (
    <>
      <Formik
        initialValues={SignInInitialValues}
        validationSchema={validateSignInForm}
        onSubmit={handleSubmit}
        component={SignInForm}
      />
      {errorMessage && <Typography>{errorMessage}</Typography>}
    </>
  );
};

export default SignInFormContainer;
