import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import { QUERY_KEYS, queryClient } from 'api';
import { useNotesOfUser } from 'api/hooks';
import { ROUTE } from 'router';
import { getMyNotes, getUser } from 'store/selectors';
import { useAppSelector } from 'store/hooks';
import { INote } from 'types';

import MyNotes from './MyNotes';

const MyNotesContainer = () => {
  const { user, isAuth } = useAppSelector(getUser);
  const { filterOption, filterValue } = useAppSelector(getMyNotes);
  const userId = user?.userId as string;

  const { notes, hasNextPage, isLoading, isFetching, fetchNextPage } =
    useNotesOfUser(userId, filterOption, filterValue);
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  const [activeNote, setActiveNote] = useState<INote | null>(null);
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const editNote = (
    note: INote,
    newTitle: string,
    newDescription: string,
  ): INote => {
    if (user) {
      return {
        ...note,
        title: newTitle || note.title,
        description: newDescription || note.description,
      };
    } else return note;
  };

  useLayoutEffect(() => {
    activeNote && window.scrollTo(0, 20);
  }, [activeNote, setActiveNote]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    !isAuth && navigate(ROUTE.HOME);
    queryClient.invalidateQueries([QUERY_KEYS.NOTES]);
  }, [isAuth]);

  useEffect(() => {
    queryClient.invalidateQueries([QUERY_KEYS.NOTES]);
  }, [notes?.length, filterOption, filterValue]);

  return (
    <MyNotes
      notes={notes}
      activeNote={activeNote}
      isEditMode={isEditMode}
      isLoading={isLoading}
      isFetching={isFetching}
      refOnView={ref}
      setActiveNote={setActiveNote}
      setEditMode={setEditMode}
      editNote={editNote}
    />
  );
};

export default MyNotesContainer;
