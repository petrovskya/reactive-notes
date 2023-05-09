import { UseAppDispatch, useAppSelector } from 'store/hooks';
import { unsetUserAuth } from 'store/features';
import { getUser } from 'store/selectors';
import { useToggle } from 'hooks';

import Home from './Home';
import { StyledHome } from './styles';

const HomeContainer = () => {
  const [isRegistration, toggleRegistrarion] = useToggle(false);
  const { user, isAuth } = useAppSelector(getUser);
  const dispatch = UseAppDispatch();

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
        toggleRegistrarion={toggleRegistrarion}
      />
    </StyledHome>
  );
};

export default HomeContainer;
