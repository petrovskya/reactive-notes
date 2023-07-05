import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { OnDragEndResponder } from 'react-beautiful-dnd';

import { QUERY_KEYS, queryClient } from 'api';
import { useGetNotesOfUser } from 'api/notes';
import { ROUTE } from 'router';
import { setNotes } from 'store/features';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getNotes, getUser } from 'store/selectors';
import { INote } from 'types';

import { DELETE_COUNT, NUMBER_OF_REMOVED_NOTES } from './constants';
import MyNotes from './MyNotes';

const MyNotesContainer = () => {
  const dispatch = useAppDispatch();
  const { user, isAuth } = useAppSelector(getUser);
  const { notes: myNotes, activeNote, filters } = useAppSelector(getNotes);
  const navigate = useNavigate();

  const userId = user?.id as string;

  const { notes, hasNextPage, isLoading, isFetching, fetchNextPage } =
    useGetNotesOfUser(userId, filters);

  const { inView: isLastNoteInView, ref: setLastNoteInView } = useInView();
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const editNote = (
    note: INote,
    newTitle: string,
    newDescription: string,
  ): INote =>
    user
      ? {
          ...note,
          title: newTitle || note.title,
          description: newDescription || note.description,
        }
      : note;

  const reorderNotesList = (
    list: INote[],
    startIndex: number,
    endIndex: number,
  ) => {
    const reorderedNotesList = Array.from(list);
    const [removedNote] = reorderedNotesList.splice(
      startIndex,
      NUMBER_OF_REMOVED_NOTES,
    );
    reorderedNotesList.splice(endIndex, DELETE_COUNT, removedNote);
    return reorderedNotesList;
  };

  const handleSetNoteDragEnd: OnDragEndResponder = ({
    destination,
    source,
  }) => {
    destination &&
      myNotes &&
      dispatch(
        setNotes(reorderNotesList(myNotes, source.index, destination.index)),
      );
  };

  useEffect(() => {
    if (isLastNoteInView && hasNextPage) {
      fetchNextPage();
    }
  }, [isLastNoteInView]);

  useEffect(() => {
    !isAuth && navigate(ROUTE.HOME);
    queryClient.invalidateQueries([QUERY_KEYS.NOTES]);
  }, [isAuth]);

  useEffect(() => {
    queryClient.invalidateQueries([QUERY_KEYS.NOTES]);
  }, [notes?.length, filters]);

  return (
    <MyNotes
      notes={myNotes}
      activeNote={activeNote}
      isEditMode={isEditMode}
      isLoading={isLoading}
      isFetching={isFetching}
      hasNextPage={hasNextPage}
      setLastNoteInView={setLastNoteInView}
      handleSetNoteDragEnd={handleSetNoteDragEnd}
      handleSetEditMode={setEditMode}
      editNote={editNote}
    />
  );
};

export default MyNotesContainer;
