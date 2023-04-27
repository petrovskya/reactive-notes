import { FC } from 'react';
import { ListItem } from '@mui/material';

import { StyledList, StyledListItemButton } from './styles';
import Note from '../Note';
import { INotesList } from '../../types';

const NotesList: FC<INotesList> = ({ notes, ...props }) => (
  <StyledList>
    {notes?.map((note) => (
      <ListItem disablePadding key={note?.id}>
        <StyledListItemButton>
          <Note note={note} {...props} />
        </StyledListItemButton>
      </ListItem>
    ))}
  </StyledList>
);

export default NotesList;
