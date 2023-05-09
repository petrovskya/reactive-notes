import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query';

import { setNewId, validateSignUpForm } from 'utils';
import { UseAppDispatch } from 'store/hooks';
import { setUserAuth } from 'store/features';

import { fetchUsers, userActions } from 'api/queries';
import { ROUTE } from 'router';

import { SignUpInitialValues } from './constants';
import SignUpForm from './SignUpForm';
import { IUser } from 'types';

const SignUpFormContainer = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = UseAppDispatch();

  const { data: users }: UseQueryResult<IUser[]> = useQuery<IUser[]>(
    ['users'],
    fetchUsers,
  );

  const { mutate: addUser } = useMutation({
    mutationFn: userActions.addUser,
    onSuccess: () => {
      navigate(ROUTE.MY_NOTES);
      queryClient.invalidateQueries(['users']);
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
      validationSchema={validateSignUpForm}
      onSubmit={handleSubmit}
      component={SignUpForm}
    />
  );
};

export default SignUpFormContainer;
