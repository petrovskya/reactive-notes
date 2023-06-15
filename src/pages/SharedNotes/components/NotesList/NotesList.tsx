import { FC } from 'react';
import { ListItem } from '@mui/material';

import { SEPARATOR_INDEX, ZERO_INDEX } from 'config';
import { Note } from 'pages/SharedNotes';
import { ISharedNotes } from 'pages/SharedNotes/types';

import { StyledList } from './styles';

const NotesList: FC<ISharedNotes> = ({
  sharedNotes,
  activeNote,
  setLastNoteInView,
}) => {
  const isLastNoteInView = (index: number): boolean =>
    !(index % SEPARATOR_INDEX) && index !== ZERO_INDEX;
  return (
    <StyledList>
      {sharedNotes?.map((note, index) => {
        return isLastNoteInView(index) ? (
          <ListItem disablePadding key={note?.id} ref={setLastNoteInView}>
            <Note note={note} activeNote={activeNote} />
          </ListItem>
        ) : (
          <ListItem disablePadding key={note?.id}>
            <Note note={note} activeNote={activeNote} />
          </ListItem>
        );
      })}
    </StyledList>
  );
};

export default NotesList;
