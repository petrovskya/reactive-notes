import { Box } from '@mui/material';

import { NotesList } from 'pages/MyNotes';
import { ActiveNote, CreateNote } from 'components';

import { StyledMyNotes } from './styles';
import { IMyNotes } from './types';

export const MyNotes = ({
  notes,
  activeNote,
  isEditMode,
  setEditMode,
  setActiveNote,
  createNote,
  editNote,
}: IMyNotes) => (
  <StyledMyNotes>
    <Box display='flex' flexDirection='row' gap='40px'>
      <ActiveNote note={activeNote} />
    </Box>
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
