import { FC } from 'react';

import { ActiveNote } from 'components';

import { NotesList } from './components';
import { StyledBox, StyledSharedNotes } from './styles';
import { ISharedNotes } from './types';

const SharedNotes: FC<ISharedNotes> = ({
  sharedNotes,
  activeNote,
  setActiveNote,
}) => (
  <StyledSharedNotes>
    <StyledBox>
      <ActiveNote note={activeNote} />
    </StyledBox>
    <NotesList
      sharedNotes={sharedNotes}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
    />
  </StyledSharedNotes>
);

export default SharedNotes;
