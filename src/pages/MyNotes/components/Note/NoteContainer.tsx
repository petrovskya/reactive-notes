import { FC } from 'react';

import { INoteContainer } from './types';
import Note from './Note';

const NoteContainer: FC<INoteContainer> = ({
  note,
  activeNote,
  setActiveNote,
  editNote,
}) => {
  const isActiveNote = activeNote?.id === note.id;

  const handleActiveNote = () => {
    if (isActiveNote) {
      localStorage.setItem('activeNote', JSON.stringify(null));
      setActiveNote(null);
    } else {
      localStorage.setItem('activeNote', JSON.stringify(note));
      setActiveNote(note);
    }
  };

  return (
    <Note
      note={note}
      isActiveNote={isActiveNote}
      handleActiveNote={handleActiveNote}
      editNote={editNote}
    />
  );
};

export default NoteContainer;
