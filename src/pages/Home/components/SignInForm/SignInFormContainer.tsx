import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Formik } from 'formik';
import { Typography } from '@mui/material';

import { QUERY_KEYS, fetchUsers } from 'api';
import { HELPER_TEXT } from 'config/constants';
import { ROUTE } from 'router';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setUserAuth, setErrorMessage } from 'store/features';
import { getUser } from 'store/selectors';
import { IUser } from 'types';
import { compareUserEmail, signInValidationSchema } from 'utils';

import { ERROR_MESSAGE, SignInInitialValues } from './constants';
import SignInForm from './SignInForm';

const SignInFormContainer = () => {
  const { data: usersResponse }: UseQueryResult<IUser[], Error> = useQuery<
    IUser[],
    Error,
    IUser[]
  >([QUERY_KEYS.USERS], fetchUsers);

  const { isAuth, errorMessage } = useAppSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (signInFormValues: typeof SignInInitialValues) => {
    const user = usersResponse?.find((user) =>
      compareUserEmail(user, signInFormValues.email),
    );

    const isPasswordCorrect = user?.password === signInFormValues.password;
    user
      ? isPasswordCorrect
        ? dispatch(setUserAuth(user))
        : dispatch(setErrorMessage(ERROR_MESSAGE.PASSWORD))
      : dispatch(setErrorMessage(ERROR_MESSAGE.USER));
  };

  useEffect(() => {
    isAuth && navigate(ROUTE.MY_NOTES);
  }, []);

  return (
    <>
      <Typography variant='h6'>{HELPER_TEXT.HOME_PAGE}</Typography>
      <Formik
        initialValues={SignInInitialValues}
        validationSchema={signInValidationSchema}
        onSubmit={handleSubmit}
        component={SignInForm}
      />
      {errorMessage && <Typography variant='h6'>{errorMessage}</Typography>}
    </>
  );
};

export default SignInFormContainer;
