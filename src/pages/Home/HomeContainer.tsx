import { useToggle } from 'hooks';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { unsetUserAuth } from 'store/features';
import { getUser } from 'store/selectors';

import Home from './Home';
import { StyledHome } from './styles';

const HomeContainer = () => {
  const [isRegistrationVisible, toggleRegistrationVisible] = useToggle(false);
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
        isRegistrationVisible={isRegistrationVisible}
        handleSignOut={handleSignOut}
        toggleRegistrationVisible={toggleRegistrationVisible}
      />
    </StyledHome>
  );
};

export default HomeContainer;
