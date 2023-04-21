import { INoteContainer } from './types';
import { Note } from './Note';

export const NoteContainer = ({
  note,
  setActiveNote,
  activeNote,
  setEditMode,
  editMode,
}: INoteContainer) => {
  const handleActiveNote = () => {
    activeNote?.id === note.id ? setActiveNote(null) : setActiveNote(note);
  };
  const handleEditMode = () => {
    setActiveNote(note);
    setEditMode(!editMode);
  };
  return (
    <Note
      note={note}
      editMode={editMode}
      activeNote={activeNote}
      handleActiveNote={handleActiveNote}
      handleEditMode={handleEditMode}
    />
  );
};
