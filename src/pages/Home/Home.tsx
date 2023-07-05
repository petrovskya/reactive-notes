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
  isRegistrationVisible,
  toggleRegistrationVisible,
}) =>
  user && isAuth ? (
    <>
      <UserProfile user={user} />
      <Link to={ROUTE.MY_NOTES}>{NAV_LINKS.MY_NOTES}</Link>
    </>
  ) : (
    <>
      {isRegistrationVisible ? <SignUpForm /> : <SignInForm />}
      <Button
        color='secondary'
        variant='contained'
        onClick={toggleRegistrationVisible}
      >
        {isRegistrationVisible ? BUTTON_TEXT.IS_USER : BUTTON_TEXT.NEW_USER}
      </Button>
    </>
  );

export default Home;
