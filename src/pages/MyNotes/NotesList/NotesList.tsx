import { ListItem } from '@mui/material';

import { CustomNoteCard } from 'components';

import { StyledList, StyledListItemButton } from './styles';
import { INotesList } from '../types';

export const NotesList = ({ notes, ...props }: INotesList) => (
  <StyledList
    sx={{ width: '100%', bgcolor: 'background.paper' }}
    aria-label='contacts'
  >
    {notes.map((note) => (
      <ListItem disablePadding key={note.id}>
        <StyledListItemButton>
          <CustomNoteCard note={note} {...props} />
        </StyledListItemButton>
      </ListItem>
    ))}
  </StyledList>
);
