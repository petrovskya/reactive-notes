import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useNotesOfUser } from 'api/hooks';
import { ROUTE } from 'router';
import { getUser } from 'store/selectors';
import { useAppSelector } from 'store/hooks';
import { INote } from 'types';

import MyNotes from './MyNotes';

const MyNotesContainer = () => {
  const { user, isAuth } = useAppSelector(getUser);
  const userId = user?.userId as string;
  const notes = useNotesOfUser(userId);
  const navigate = useNavigate();
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

  useEffect(() => {
    !isAuth && navigate(ROUTE.HOME);
  }, []);

  return (
    <MyNotes
      notes={notes}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      isEditMode={isEditMode}
      setEditMode={setEditMode}
      editNote={editNote}
    />
  );
};

export default MyNotesContainer;
