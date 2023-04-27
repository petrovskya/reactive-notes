import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { NOTES } from 'utils';
import { INote } from 'types';

import MyNotes from './MyNotes';

const MyNotesContainer = () => {
  const [notes, setNotes] = useState<INote[]>(NOTES);
  const [activeNote, setActiveNote] = useState<INote | null>(null);
  const [isEditMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    const notes = localStorage.getItem('notes');
    if (notes) {
      return setNotes(JSON.parse(notes));
    }
  }, []);

  useEffect(() => {
    const activeNote = localStorage.getItem('activeNote');
    if (activeNote) {
      return setActiveNote(JSON.parse(activeNote));
    }
  }, []);

  const createNote = (title: string, description: string) => {
    const date = new Date();

    const newNote = {
      id: uuid(),
      title: title,
      description: description,
      dateCreation: date.toLocaleString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
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
    localStorage.setItem('notes', JSON.stringify(newNotes));
    setEditMode(false);
    setActiveNote(editedNote);
    localStorage.setItem('activeNote', JSON.stringify(editedNote));
  };

  return (
    <MyNotes
      notes={notes}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      isEditMode={isEditMode}
      setEditMode={setEditMode}
      editNote={editNote}
      createNote={createNote}
    />
  );
};

export default MyNotesContainer;
