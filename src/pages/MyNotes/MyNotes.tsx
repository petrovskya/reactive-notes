import { FC } from 'react';
import { Typography } from '@mui/material';

import { ActiveNote, CreateNote } from 'components';
import { FETCH_STATUS } from 'config';

import { FilterMenu, NotesList } from './components';
import { ListWrapper, StyledBox, StyledMyNotes } from './styles';
import { INotesList } from './types';

const MyNotes: FC<INotesList> = ({
  notes,
  activeNote,
  isEditMode,
  isLoading,
  isFetching,
  refOnView,
  onDragEnd,
  setEditMode,
  setActiveNote,
  editNote,
}) => (
  <StyledMyNotes>
    <StyledBox>
      <ActiveNote note={activeNote} />
      <CreateNote />
      <FilterMenu />
    </StyledBox>
    <ListWrapper>
      <NotesList
        notes={notes}
        activeNote={activeNote}
        isEditMode={isEditMode}
        refOnView={refOnView}
        onDragEnd={onDragEnd}
        setActiveNote={setActiveNote}
        setEditMode={setEditMode}
        editNote={editNote}
      />
      {(isLoading || isFetching) && (
        <Typography variant='h6'>{FETCH_STATUS.LOADING}</Typography>
      )}
    </ListWrapper>
  </StyledMyNotes>
);

export default MyNotes;
