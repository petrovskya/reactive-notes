import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import { QUERY_KEYS, queryClient } from 'api';
import { useGetSharedNotes } from 'api/hooks';
import { ROUTE } from 'router';
import { useAppSelector } from 'store/hooks';
import { getNotes, getUser } from 'store/selectors';
import { INote } from 'types';

import SharedNotes from './SharedNotes';

const SharedNotesContainer = () => {
  const { isAuth } = useAppSelector(getUser);
  const { activeSharedNote } = useAppSelector(getNotes);
  const [displayedSharedNotes, setDisplayedSharedNotes] = useState<INote[]>();
  const { sharedNotes, hasNextPage, isLoading, isFetching, fetchNextPage } =
    useGetSharedNotes();
  const { inView: isLastNoteInView, ref: setLastNoteInView } = useInView();
  const navigate = useNavigate();

  useEffect(() => {
    !isAuth && navigate(ROUTE.HOME);
  }, []);

  useLayoutEffect(() => {
    activeSharedNote && window.scrollTo(0, 20);
  }, [activeSharedNote]);

  useEffect(() => {
    if (isLastNoteInView && hasNextPage) {
      fetchNextPage();
    }
  }, [isLastNoteInView]);

  useEffect(() => {
    queryClient.invalidateQueries([QUERY_KEYS.SHARED_NOTES]);
    sharedNotes && setDisplayedSharedNotes(sharedNotes.flat());
  }, [sharedNotes?.flat().length]);

  return (
    <SharedNotes
      sharedNotes={displayedSharedNotes}
      activeNote={activeSharedNote}
      isLoading={isLoading}
      isFetching={isFetching}
      setLastNoteInView={setLastNoteInView}
    />
  );
};

export default SharedNotesContainer;
