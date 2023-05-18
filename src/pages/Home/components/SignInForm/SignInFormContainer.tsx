import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Formik } from 'formik';
import { Typography } from '@mui/material';

import { fetchUsers } from 'api/queries';
import { ROUTE } from 'router';
import { UseAppDispatch, useAppSelector } from 'store/hooks';
import { setUserAuth, setErrorMessage } from 'store/features';
import { getUser } from 'store/selectors';
import { IUser } from 'types';
import { compareUserEmail, signInValidationSchema } from 'utils';

import { SignInInitialValues } from './constants';
import SignInForm from './SignInForm';

const SignInFormContainer = () => {
  const { data: users }: UseQueryResult<IUser[], Error> = useQuery<
    IUser[],
    Error,
    IUser[]
  >(['users'], fetchUsers);

  const { isAuth, errorMessage } = useAppSelector(getUser);
  const navigate = useNavigate();
  const dispatch = UseAppDispatch();

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
        validationSchema={signInValidationSchema}
        onSubmit={handleSubmit}
        component={SignInForm}
      />
      {errorMessage && <Typography>{errorMessage}</Typography>}
    </>
  );
};

export default SignInFormContainer;
