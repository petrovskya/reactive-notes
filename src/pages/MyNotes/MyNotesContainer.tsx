import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { OnDragEndResponder } from 'react-beautiful-dnd';

import { QUERY_KEYS, queryClient } from 'api';
import { useNotesOfUser } from 'api/hooks';
import { ROUTE } from 'router';
import { setNotes } from 'store/features';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getMyNotes, getUser } from 'store/selectors';
import { INote } from 'types';

import MyNotes from './MyNotes';

const MyNotesContainer = () => {
  const { user, isAuth } = useAppSelector(getUser);
  const {
    notes: myNotes,
    filterOption,
    filterValue,
  } = useAppSelector(getMyNotes);
  const userId = user?.userId as string;

  const { notes, hasNextPage, isLoading, isFetching, fetchNextPage } =
    useNotesOfUser(userId, filterOption, filterValue);
  const dispatch = useAppDispatch();

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

  const reorder = (list: INote[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleDragEnd: OnDragEndResponder = ({ destination, source }) => {
    if (!destination) return;

    myNotes &&
      dispatch(setNotes(reorder(myNotes, source.index, destination.index)));
  };

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
      notes={myNotes}
      activeNote={activeNote}
      isEditMode={isEditMode}
      isLoading={isLoading}
      isFetching={isFetching}
      refOnView={ref}
      onDragEnd={handleDragEnd}
      setActiveNote={setActiveNote}
      setEditMode={setEditMode}
      editNote={editNote}
    />
  );
};

export default MyNotesContainer;
