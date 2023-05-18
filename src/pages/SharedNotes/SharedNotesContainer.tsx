import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSharedNotes } from 'api/hooks';
import { ROUTE } from 'router';
import { useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';
import { INote } from 'types';

import SharedNotes from './SharedNotes';

const SharedNotesContainer = () => {
  const { isAuth } = useAppSelector(getUser);
  const sharedNotes = useSharedNotes();
  const navigate = useNavigate();
  const [activeNote, setActiveNote] = useState<INote | null>(null);

  useEffect(() => {
    !isAuth && navigate(ROUTE.HOME);
  }, []);

  return (
    <SharedNotes
      sharedNotes={sharedNotes}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
    />
  );
};

export default SharedNotesContainer;
