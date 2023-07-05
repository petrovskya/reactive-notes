import { FC } from 'react';
import { CircularProgress } from '@mui/material';

import { ActiveNote } from 'components';

import { NotesList } from './components';
import { StyledBox, StyledSharedNotes } from './styles';
import { ISharedNotes } from './types';

const SharedNotes: FC<ISharedNotes> = ({
  sharedNotes,
  activeNote,
  isLoading,
  isFetching,
  setLastNoteInView,
}) => (
  <StyledSharedNotes>
    <StyledBox>
      <ActiveNote note={activeNote} />
    </StyledBox>
    <NotesList
      sharedNotes={sharedNotes}
      activeNote={activeNote}
      setLastNoteInView={setLastNoteInView}
    />
    {(isLoading || isFetching) && (
      <StyledBox>
        <CircularProgress color='secondary' />
      </StyledBox>
    )}
  </StyledSharedNotes>
);

export default SharedNotes;
