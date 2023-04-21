import { INoteContainer } from './types';
import { Note } from './Note';

export const NoteContainer = ({
  note,
  setActiveNote,
  activeNote,
  editNote,
}: INoteContainer) => {
  const handleActiveNote = () => {
    activeNote?.id === note.id ? setActiveNote(null) : setActiveNote(note);
  };

  return (
    <Note note={note} handleActiveNote={handleActiveNote} editNote={editNote} />
  );
};
