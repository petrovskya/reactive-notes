import { Box } from '@mui/material';

import { NotesList } from 'pages/MyNotes';
import { ActiveNote, CustomButton, EditNote } from 'components';

import { StyledMyNotes } from './styles';
import { IMyNotes } from './types';

export const MyNotes = ({
  notes,
  activeNote,
  setActiveNote,
  editMode,
  setEditMode,
}: IMyNotes) => (
  <StyledMyNotes>
    <Box display='flex' flexDirection='row' gap='40px'>
      <ActiveNote note={activeNote} />
      {editMode && <EditNote />}
    </Box>
    <NotesList
      notes={notes}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      setEditMode={setEditMode}
      editMode={editMode}
    />
    <CustomButton />
  </StyledMyNotes>
);
