import { INoteContainer } from './types';
import { Note } from './Note';

export const NoteContainer = ({
  note,
  setActiveNote,
  activeNote,
  editNote,
}: INoteContainer) => {
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
