import { FC } from 'react';
import { Button } from '@mui/material';

import { Link, UserProfile } from 'components';
import { BUTTON_TEXT, NAV_LINKS } from 'config/types';
import { ROUTE } from 'router';

import { SignInForm, SignUpForm } from './components';
import { IHomeProps } from './types';

const Home: FC<IHomeProps> = ({
  user,
  isAuth,
  isRegistration,
  handleSignOut,
  toggleRegistration,
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
      <Button color='secondary' variant='outlined' onClick={toggleRegistration}>
        {isRegistration ? BUTTON_TEXT.IS_USER : BUTTON_TEXT.NEW_USER}
      </Button>
    </>
  );

export default Home;
