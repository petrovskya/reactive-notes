import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from 'api';
import { useUsers } from 'api/hooks';
import { userActions } from 'api/queries';
import { setUserAuth } from 'store/features';
import { UseAppDispatch } from 'store/hooks';
import { ROUTE } from 'router';
import { setNewId, signUpValidationSchema } from 'utils';

import { SignUpInitialValues } from './constants';
import SignUpForm from './SignUpForm';

const SignUpFormContainer = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = UseAppDispatch();

  const users = useUsers();

  const { mutate: addUser } = useMutation({
    mutationFn: userActions.addUser,
    onSuccess: () => {
      navigate(ROUTE.MY_NOTES);
      queryClient.invalidateQueries([QUERY_KEYS.USERS]);
    },
  });

  const handleSubmit = (signUpFormValues: typeof SignUpInitialValues) => {
    const newUser = {
      userId: setNewId(users),
      createdAt: new Date().toDateString(),
      firstName: signUpFormValues.firstName,
      lastName: signUpFormValues.lastName,
      email: signUpFormValues.email,
      dateOfBirth: signUpFormValues.dateOfBirth.toDateString(),
      password: signUpFormValues.password,
    };
    addUser(newUser);
    dispatch(setUserAuth(newUser));
  };

  return (
    <Formik
      initialValues={SignUpInitialValues}
      validationSchema={signUpValidationSchema}
      onSubmit={handleSubmit}
      component={SignUpForm}
    />
  );
};

export default SignUpFormContainer;
