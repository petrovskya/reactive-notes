import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import { QUERY_KEYS, queryClient } from 'api';
import { useSharedNotes } from 'api/hooks';
import { ROUTE } from 'router';
import { useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';
import { INote } from 'types';

import SharedNotes from './SharedNotes';

const SharedNotesContainer = () => {
  const { isAuth } = useAppSelector(getUser);
  const { sharedNotes, hasNextPage, isLoading, isFetching, fetchNextPage } =
    useSharedNotes();
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  const [activeNote, setActiveNote] = useState<INote | null>(null);

  useEffect(() => {
    !isAuth && navigate(ROUTE.HOME);
  }, []);

  useLayoutEffect(() => {
    activeNote && window.scrollTo(0, 20);
  }, [activeNote, setActiveNote]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    queryClient.invalidateQueries([QUERY_KEYS.SHARED_NOTES]);
  }, [sharedNotes?.length]);

  return (
    <SharedNotes
      sharedNotes={sharedNotes}
      activeNote={activeNote}
      isLoading={isLoading}
      isFetching={isFetching}
      refOnView={ref}
      setActiveNote={setActiveNote}
    />
  );
};

export default SharedNotesContainer;
