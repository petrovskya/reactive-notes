import * as React from 'react';
import { ListItem, ListItemButton, styled } from '@mui/material';
import { CustomNoteCard } from 'components';
import { StyledList } from './styles';
import { NoteProps } from 'utils/notes';
import { Dispatch } from 'react';
import { Color } from 'ui';

interface BasicListProps {
  notes: NoteProps[];
  setActiveNote: Dispatch<React.SetStateAction<NoteProps | null>>;
  activeNote: NoteProps | null;
}

export const StyledListItemButton = styled(ListItemButton)`
  max-width: 345px;
  &:hover {
    background-color: ${Color.PRIMARY};
    opacity: 1;
  }
`;

export const CustomBasicList = ({
  notes,
  activeNote,
  setActiveNote,
}: BasicListProps) => {
  return (
    <StyledList
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      aria-label='contacts'
    >
      {notes.map((note) => (
        <ListItem disablePadding key={note.id}>
          <StyledListItemButton>
            <CustomNoteCard
              note={note}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
            />
          </StyledListItemButton>
        </ListItem>
      ))}
    </StyledList>
  );
};
