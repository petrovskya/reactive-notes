import { Box } from '@mui/material';

import { NotesList } from 'pages/MyNotes';
import { ActiveNote, CustomButton } from 'components';

import { StyledMyNotes } from './styles';
import { IMyNotes } from './types';

export const MyNotes = ({
  notes,
  activeNote,
  setActiveNote,
  isEditMode,
  setEditMode,
  editNote,
}: IMyNotes) => (
  <StyledMyNotes>
    <Box display='flex' flexDirection='row' gap='40px'>
      <ActiveNote note={activeNote} />
    </Box>
    <NotesList
      notes={notes}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      setEditMode={setEditMode}
      isEditMode={isEditMode}
      editNote={editNote}
    />
    <CustomButton />
  </StyledMyNotes>
);
