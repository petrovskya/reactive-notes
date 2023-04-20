import { useState } from 'react';

import { NOTES } from 'utils';
import { INote } from 'types';

import { MyNotes } from './MyNotes';

export const MyNotesContainer = () => {
  const [activeNote, setActiveNote] = useState<INote | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  return (
    <MyNotes
      notes={NOTES}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      editMode={editMode}
      setEditMode={setEditMode}
    />
  );
};
