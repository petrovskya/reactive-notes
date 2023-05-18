import { FC } from 'react';

import Note from './Note';
import { INoteContainer } from './types';

const NoteContainer: FC<INoteContainer> = ({
  note,
  activeNote,
  setActiveNote,
}) => {
  const isActiveNote = activeNote?.id === note?.id;

  const handleActiveNote = () => {
    if (isActiveNote) {
      localStorage.setItem('activeNote', JSON.stringify(null));
      setActiveNote(null);
    } else {
      localStorage.setItem('activeNote', JSON.stringify(note));
      setActiveNote(note);
    }
  };

  return <Note note={note} handleActiveNote={handleActiveNote} />;
};

export default NoteContainer;
