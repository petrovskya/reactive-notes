import { unsetUserAuth } from 'store/features';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';

import Nav from './Nav';

const NavContainer = () => {
  const { user, isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(unsetUserAuth());
  };

  return <Nav user={user} isAuth={isAuth} handleSignOut={handleSignOut} />;
};

export default NavContainer;
