import { FC } from 'react';
import { ListItem } from '@mui/material';

import { SEPARATOR_INDEX } from 'config';
import { Note } from 'pages/SharedNotes';
import { ISharedNotes } from 'pages/SharedNotes/types';

import { StyledList } from './styles';

const NotesList: FC<ISharedNotes> = ({
  sharedNotes,
  activeNote,
  setLastNoteInView,
}) => (
  <StyledList>
    {sharedNotes?.map((note, index) => {
      if (index % SEPARATOR_INDEX) {
        return (
          <ListItem disablePadding key={note?.id}>
            <Note note={note} activeNote={activeNote} />
          </ListItem>
        );
      }

      return (
        <ListItem ref={setLastNoteInView} disablePadding key={note?.id}>
          <Note note={note} activeNote={activeNote} />
        </ListItem>
      );
    })}
  </StyledList>
);

export default NotesList;
