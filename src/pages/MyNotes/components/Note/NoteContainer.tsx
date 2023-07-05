import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';

import { QUERY_KEYS, notesActions, queryClient } from 'api';
import { INoteContainer } from 'pages/MyNotes/types';
import { setActiveNote, unsetActiveNote } from 'store/features';
import { useAppDispatch } from 'store/hooks';

import Note from './Note';

const NoteContainer: FC<INoteContainer> = ({
  note,
  index,
  activeNote,
  editNote,
}) => {
  const dispatch = useAppDispatch();

  const { mutate: deleteNote } = useMutation({
    mutationFn: notesActions.deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.NOTES]);
    },
  });

  const isNoteActive = activeNote?.id === note?.id;

  const handleSetActiveNote = () => {
    isNoteActive ? dispatch(unsetActiveNote()) : dispatch(setActiveNote(note));
  };

  const handleDeleteNote = () => {
    deleteNote(note);
    isNoteActive && dispatch(unsetActiveNote());
  };

  return (
    <Note
      note={note}
      isNoteActive={isNoteActive}
      index={index}
      editNote={editNote}
      handleSetActiveNote={handleSetActiveNote}
      handleDeleteNote={handleDeleteNote}
    />
  );
};

export default NoteContainer;
