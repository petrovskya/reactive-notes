import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';
import { ROUTE } from 'router';

import SharedNotes from './SharedNotes';

const SharedNotesContainer = () => {
  const { isAuth } = useAppSelector(getUser);
  const navigate = useNavigate();

  useEffect(() => {
    !isAuth && navigate(ROUTE.HOME);
  }, []);

  return <SharedNotes />;
};

export default SharedNotesContainer;
