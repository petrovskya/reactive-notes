import { FC } from 'react';
import { ListItem } from '@mui/material';

import { Note } from 'pages/SharedNotes';
import { ISharedNotes } from 'pages/SharedNotes/types';

import { StyledList, StyledListItemButton } from './styles';

const NotesList: FC<ISharedNotes> = ({ sharedNotes, ...props }) => (
  <StyledList>
    {sharedNotes?.map((note) => (
      <ListItem disablePadding key={note?.id}>
        <StyledListItemButton $isActive={props.activeNote?.id === note?.id}>
          <Note note={note} {...props} />
        </StyledListItemButton>
      </ListItem>
    ))}
  </StyledList>
);

export default NotesList;
