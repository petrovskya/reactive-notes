import { FC } from 'react';
import { Button } from '@mui/material';

import { Link, UserProfile } from 'components';
import { ROUTE } from 'router';
import { BUTTON_TEXT, NAV_LINKS } from 'config/constants';

import { IHomeProps } from './types';
import { SignInForm, SignUpForm } from './components';

const Home: FC<IHomeProps> = ({
  user,
  isAuth,
  isRegistration,
  handleSignOut,
  toggleRegistrarion,
}) =>
  user && isAuth ? (
    <>
      <UserProfile user={user} />
      <Link to={ROUTE.MY_NOTES}>{NAV_LINKS.MY_NOTES}</Link>
      <Button onClick={handleSignOut}>{BUTTON_TEXT.SIGN_OUT}</Button>
    </>
  ) : (
    <>
      {isRegistration ? <SignUpForm /> : <SignInForm />}
      <Button color='secondary' variant='outlined' onClick={toggleRegistrarion}>
        {isRegistration ? BUTTON_TEXT.IS_USER : BUTTON_TEXT.NEW_USER}
      </Button>
    </>
  );

export default Home;
