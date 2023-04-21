import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { NOTES } from 'utils';
import { INote } from 'types';

import { MyNotes } from './MyNotes';
import { useStoredState } from 'hooks';

export const MyNotesContainer = () => {
  const [notes, setNotes] = useStoredState('notes', NOTES);
  const [activeNote, setActiveNote] = useState<INote | null>(null);
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const addNote = (title: string, description: string) => {
    const date = new Date();
    const newNote = {
      id: uuid(),
      title: title,
      description: description,
      dateCreation: date.toString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const editNote = (id: string, title: string, description: string) => {
    const date = new Date();
    const editedNote = {
      id: id,
      title: title,
      description: description,
      dateCreation: date.toLocaleString(),
    };
    const indexOfNote = notes.findIndex((note) => note.id === id);
    notes.splice(indexOfNote, 1, editedNote);
    const newNotes = notes;
    setNotes(newNotes);
    setEditMode(false);
  };
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
