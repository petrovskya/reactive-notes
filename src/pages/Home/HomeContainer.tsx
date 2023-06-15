import { useToggle } from 'hooks';
import { useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';

import Home from './Home';
import { StyledHome } from './styles';

const HomeContainer = () => {
  const [isRegistrationVisible, toggleRegistrationVisible] = useToggle(false);
  const { user, isAuth } = useAppSelector(getUser);

  return (
    <StyledHome>
      <Home
        user={user}
        isAuth={isAuth}
        isRegistrationVisible={isRegistrationVisible}
        toggleRegistrationVisible={toggleRegistrationVisible}
      />
    </StyledHome>
  );
};

export default HomeContainer;
