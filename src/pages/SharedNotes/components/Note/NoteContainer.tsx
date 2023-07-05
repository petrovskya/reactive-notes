import { FC } from 'react';

import { setActiveSharedNote, unsetActiveSharedNote } from 'store/features';
import { useAppDispatch } from 'store/hooks';

import Note from './Note';
import { INoteContainer } from './types';

const NoteContainer: FC<INoteContainer> = ({ note, activeNote }) => {
  const dispatch = useAppDispatch();
  const isNoteActive = activeNote?.id === note?.id;

  const handleSetActiveNote = () => {
    isNoteActive
      ? dispatch(unsetActiveSharedNote())
      : dispatch(setActiveSharedNote(note));
  };

  return (
    <Note
      note={note}
      isNoteActive={isNoteActive}
      handleSetActiveNote={handleSetActiveNote}
    />
  );
};

export default NoteContainer;
