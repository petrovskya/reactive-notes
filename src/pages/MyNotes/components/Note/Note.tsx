import { FC } from 'react';
import { Button, CardContent, Typography } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Draggable } from 'react-beautiful-dnd';

import { EditMenu, ShareButton } from 'components';
import { BUTTON_TEXT } from 'config/types';
import { INoteProps } from 'pages/MyNotes/types';
import { getShortDescription } from 'utils';

import {
  StyledCard,
  StyledTitle,
  StyledDateCreation,
  StyledCardActions,
  StyledListItemButton,
} from './styles';

const Note: FC<INoteProps> = ({
  note,
  isNoteActive,
  index,
  handleSetActiveNote,
  editNote,
  handleDeleteNote,
}) => {
  const { id, title, description, dateCreation } = note;
  return (
    <Draggable index={index} draggableId={id}>
      {(provided) => (
        <StyledListItemButton $isActive={isNoteActive}>
          <StyledCard
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ShareButton note={note} />
            <CardContent onClick={handleSetActiveNote}>
              <StyledTitle variant='h3'>{title}</StyledTitle>
              <StyledDateCreation variant='h6'>
                {dateCreation}
              </StyledDateCreation>
              <Typography variant='h4'>
                {getShortDescription(description)}
              </Typography>
            </CardContent>
            <StyledCardActions>
              <EditMenu note={note} editNote={editNote} />
              <Button
                variant='contained'
                color='secondary'
                endIcon={<DeleteIcon />}
                onClick={handleDeleteNote}
              >
                {BUTTON_TEXT.DELETE}
              </Button>
            </StyledCardActions>
          </StyledCard>
        </StyledListItemButton>
      )}
    </Draggable>
  );
};

export default Note;
