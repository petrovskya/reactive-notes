import { useToggle } from 'hooks';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { unsetUserAuth } from 'store/features';
import { getUser } from 'store/selectors';

import Home from './Home';
import { StyledHome } from './styles';

const HomeContainer = () => {
  const [isRegistration, toggleRegistration] = useToggle(false);
  const { user, isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(unsetUserAuth());
  };

  return (
    <StyledHome>
      <Home
        user={user}
        isAuth={isAuth}
        isRegistration={isRegistration}
        handleSignOut={handleSignOut}
        toggleRegistration={toggleRegistration}
      />
    </StyledHome>
  );
};

export default HomeContainer;
