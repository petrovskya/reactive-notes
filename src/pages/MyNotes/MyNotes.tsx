import { FC } from 'react';
import { CircularProgress } from '@mui/material';

import { ActiveNote, CreateNote } from 'components';

import { FilterMenu, NotesList } from './components';
import { ListWrapper, StyledBox, StyledMyNotes } from './styles';
import { INotesList } from './types';

const MyNotes: FC<INotesList> = ({
  notes,
  activeNote,
  isEditMode,
  isLoading,
  isFetching,
  setLastNoteInView,
  handleSetNoteDragEnd,
  setEditMode,
  editNote,
}) => (
  <StyledMyNotes data-testid='my-notes'>
    <StyledBox data-testid='my-notes-styled-box'>
      <ActiveNote note={activeNote} />
      <CreateNote />
      <FilterMenu />
    </StyledBox>
    <ListWrapper data-testid='my-notes-list-wrapper'>
      <NotesList
        notes={notes}
        activeNote={activeNote}
        isEditMode={isEditMode}
        setLastNoteInView={setLastNoteInView}
        handleSetNoteDragEnd={handleSetNoteDragEnd}
        setEditMode={setEditMode}
        editNote={editNote}
      />
      {(isLoading || isFetching) && (
        <StyledBox data-testid='loader'>
          <CircularProgress color='secondary' />
        </StyledBox>
      )}
    </ListWrapper>
  </StyledMyNotes>
);

export default MyNotes;
