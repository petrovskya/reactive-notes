import { FC } from 'react';
import { ListItem } from '@mui/material';

import { Note } from 'pages/SharedNotes';
import { ISharedNotes } from 'pages/SharedNotes/types';

import { StyledList, StyledListItemButton } from './styles';

const NotesList: FC<ISharedNotes> = ({ sharedNotes, refOnView, ...props }) => (
  <StyledList>
    {sharedNotes?.map((page) =>
      page.map((note, i) => {
        if (page.length === i + 1) {
          return (
            <ListItem ref={refOnView} disablePadding key={note?.id}>
              <StyledListItemButton
                $isActive={props.activeNote?.id === note?.id}
              >
                <Note note={note} {...props} />
              </StyledListItemButton>
            </ListItem>
          );
        }
        return (
          <ListItem disablePadding key={note?.id}>
            <StyledListItemButton $isActive={props.activeNote?.id === note?.id}>
              <Note note={note} {...props} />
            </StyledListItemButton>
          </ListItem>
        );
      }),
    )}
  </StyledList>
);

export default NotesList;
