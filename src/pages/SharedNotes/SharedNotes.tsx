import { FC } from 'react';
import { Typography } from '@mui/material';

import { ActiveNote } from 'components';
import { FETCH_STATUS } from 'config';

import { NotesList } from './components';
import { StyledBox, StyledSharedNotes } from './styles';
import { ISharedNotes } from './types';

const SharedNotes: FC<ISharedNotes> = ({
  sharedNotes,
  activeNote,
  isLoading,
  isFetching,
  refOnView,
  setActiveNote,
}) => (
  <StyledSharedNotes>
    <StyledBox>
      <ActiveNote note={activeNote} />
    </StyledBox>
    <NotesList
      sharedNotes={sharedNotes}
      activeNote={activeNote}
      refOnView={refOnView}
      setActiveNote={setActiveNote}
    />
    {(isLoading || isFetching) && (
      <Typography variant='h6'>{FETCH_STATUS.LOADING}</Typography>
    )}
  </StyledSharedNotes>
);

export default SharedNotes;
