import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from 'api';
import { userActions } from 'api/queries';
import { EMPTY_STRING } from 'config';
import { setUserAuth } from 'store/features';
import { useAppDispatch } from 'store/hooks';
import { ROUTE } from 'router';
import { formatDate, getDateCreation, signUpValidationSchema } from 'utils';

import { SIGN_UP_INITIAL_VALUES } from './constants';
import SignUpForm from './SignUpForm';

const SignUpFormContainer = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const { mutate: addUser } = useMutation({
    mutationFn: userActions.addUser,
    onSuccess: ({ data: newUser }) => {
      navigate(ROUTE.MY_NOTES);
      queryClient.invalidateQueries([QUERY_KEYS.USERS]);
      dispatch(setUserAuth(newUser));
    },
  });

  const handleSubmit = ({
    firstName,
    lastName,
    email,
    dateOfBirth,
    password,
  }: typeof SIGN_UP_INITIAL_VALUES) => {
    const newUser = {
      id: EMPTY_STRING,
      createdAt: getDateCreation(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      dateOfBirth: formatDate(dateOfBirth),
      password: password,
    };
    addUser(newUser);
  };

  return (
    <Formik
      initialValues={SIGN_UP_INITIAL_VALUES}
      validationSchema={signUpValidationSchema}
      component={SignUpForm}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUpFormContainer;
