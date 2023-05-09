import { useEffect, useState } from 'react';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { getUser } from 'store/selectors';
import { useAppSelector } from 'store/hooks';
import { INote } from 'types';
import { ROUTE } from 'router';
import { fetchNotesOfUser } from 'api';

import MyNotes from './MyNotes';

const MyNotesContainer = () => {
  const { user, isAuth } = useAppSelector(getUser);
  const navigate = useNavigate();

  const { data: notes }: UseQueryResult<INote[], Error> = useQuery<
    INote[],
    Error,
    INote[]
  >(['notes'], () =>
    user ? fetchNotesOfUser(user.userId) : fetchNotesOfUser(''),
  );

  const [activeNote, setActiveNote] = useState<INote | null>(null);
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const editNote = (id: string, title: string, description: string): INote => {
    const date = new Date();

    return {
      id: id,
      userId: user ? user.userId : '',
      title: title,
      description: description,
      dateCreation: date.toLocaleString(),
    };
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
