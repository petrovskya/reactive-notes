import { ListItem } from '@mui/material';

import { NoteContainer } from 'pages/MyNotes';

import { INotesList } from '../types';
import { StyledList, StyledListItemButton } from './styles';

export const NotesList = ({ notes, ...props }: INotesList) => (
  <StyledList
    sx={{ width: '100%', bgcolor: 'background.paper' }}
    aria-label='contacts'
  >
    {notes.map((note) => (
      <ListItem disablePadding key={note.id}>
        <StyledListItemButton>
          <NoteContainer note={note} {...props} />
        </StyledListItemButton>
      </ListItem>
    ))}
  </StyledList>
);
