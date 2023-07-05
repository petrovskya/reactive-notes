import { unsetUserAuth } from 'store/features';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';

import MobileNav from './MobileNav';

const NavContainer = () => {
  const { user, isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(unsetUserAuth());
  };

  return (
    <MobileNav user={user} isAuth={isAuth} handleSignOut={handleSignOut} />
  );
};

export default NavContainer;
