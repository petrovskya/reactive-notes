import { FC } from 'react';

import { INoteContainer } from './types';
import Note from './Note';

const NoteContainer: FC<INoteContainer> = ({
  note,
  activeNote,
  setActiveNote,
  editNote,
}) => {
  const handleActiveNote = () => {
    if (activeNote?.id === note.id) {
      localStorage.setItem('activeNote', JSON.stringify(null));
      setActiveNote(null);
    } else {
      localStorage.setItem('activeNote', JSON.stringify(note));
      setActiveNote(note);
    }
  };

  return (
    <Note note={note} handleActiveNote={handleActiveNote} editNote={editNote} />
  );
};

export default NoteContainer;
