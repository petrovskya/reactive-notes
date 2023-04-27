import { FC } from 'react';

import { ActiveNote, CreateNote } from 'components';

import { NotesList } from './components';
import { StyledBox, StyledMyNotes } from './styles';
import { IMyNotes } from './types';

const MyNotes: FC<IMyNotes> = ({
  notes,
  activeNote,
  isEditMode,
  setEditMode,
  setActiveNote,
  createNote,
  editNote,
}) => (
  <StyledMyNotes>
    <StyledBox>
      <ActiveNote note={activeNote} />
    </StyledBox>
    <NotesList
      notes={notes}
      activeNote={activeNote}
      isEditMode={isEditMode}
      setActiveNote={setActiveNote}
      setEditMode={setEditMode}
      editNote={editNote}
    />
    <CreateNote createNote={createNote} />
  </StyledMyNotes>
);

export default MyNotes;
