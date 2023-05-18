import { FC } from 'react';
import { ListItem } from '@mui/material';

import { Note } from 'pages/MyNotes';
import { INotesList } from 'pages/MyNotes/types';

import { StyledList, StyledListItemButton } from './styles';

const NotesList: FC<INotesList> = ({ notes, ...props }) => (
  <StyledList>
    {notes?.map((note) => (
      <ListItem disablePadding key={note?.id}>
        <StyledListItemButton $isActive={props.activeNote?.id === note.id}>
          <Note note={note} {...props} />
        </StyledListItemButton>
      </ListItem>
    ))}
  </StyledList>
);

export default NotesList;
