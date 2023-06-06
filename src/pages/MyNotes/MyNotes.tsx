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
        setLastNoteInView={setLastNoteInView}
        handleSetNoteDragEnd={handleSetNoteDragEnd}
        setEditMode={setEditMode}
        editNote={editNote}
      />
      {(isLoading || isFetching) && (
        <StyledBox>
          <CircularProgress color='secondary' />
        </StyledBox>
      )}
    </ListWrapper>
  </StyledMyNotes>
);

export default MyNotes;
