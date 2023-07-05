import { FC } from 'react';
import { CircularProgress, Typography } from '@mui/material';

import { ActiveNote, CreateNote } from 'components';
import { NOTES_NOT_FOUND_MESSAGE } from 'config/constants';

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
  handleSetEditMode,
  editNote,
}) => {
  const isLoaderVisible = isLoading || isFetching;
  const isNotesListEmpty = !notes?.length && !isLoaderVisible;

  return (
    <StyledMyNotes data-testid='my-notes'>
      <StyledBox data-testid='my-notes-styled-box'>
        <ActiveNote note={activeNote} />
        <CreateNote />
        <FilterMenu />
      </StyledBox>
      <ListWrapper data-testid='my-notes-list-wrapper'>
        <Typography>{isNotesListEmpty && NOTES_NOT_FOUND_MESSAGE}</Typography>
        <NotesList
          notes={notes}
          activeNote={activeNote}
          isEditMode={isEditMode}
          setLastNoteInView={setLastNoteInView}
          handleSetNoteDragEnd={handleSetNoteDragEnd}
          handleSetEditMode={handleSetEditMode}
          editNote={editNote}
        />
        {isLoaderVisible && (
          <StyledBox data-testid='loader'>
            <CircularProgress color='secondary' />
          </StyledBox>
        )}
      </ListWrapper>
    </StyledMyNotes>
  );
};

export default MyNotes;
