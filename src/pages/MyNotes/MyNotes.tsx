import { FC } from 'react';
import { Typography } from '@mui/material';

import { ActiveNote, CreateNote } from 'components';
import { FETCH_STATUS } from 'config';

import { FilterMenu, NotesList } from './components';
import { StyledBox, StyledMyNotes } from './styles';
import { INotesList } from './types';

const MyNotes: FC<INotesList> = ({
  notes,
  activeNote,
  isEditMode,
  isLoading,
  isFetching,
  refOnView,
  setEditMode,
  setActiveNote,
  editNote,
}) => (
  <StyledMyNotes>
    <StyledBox>
      <ActiveNote note={activeNote} />
    </StyledBox>
    <CreateNote />
    <FilterMenu />
    <NotesList
      notes={notes}
      activeNote={activeNote}
      isEditMode={isEditMode}
      setActiveNote={setActiveNote}
      setEditMode={setEditMode}
      editNote={editNote}
    />
    {(isLoading || isFetching) && (
      <Typography variant='h6'>{FETCH_STATUS.LOADING}</Typography>
    )}
    <CreateNote refOnView={refOnView} />
  </StyledMyNotes>
);

export default MyNotes;
