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
} from './styles';

const Note: FC<INoteProps> = ({ note, index, handleActiveNote, editNote }) => (
  <Draggable index={index} draggableId={note.id}>
    {(provided) => (
      <StyledCard
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <ShareButton note={note} />
        <CardContent onClick={handleActiveNote}>
          <StyledTitle variant='h3'>{note.title}</StyledTitle>
          <StyledDateCreation variant='h6'>
            {note.dateCreation}
          </StyledDateCreation>
          <Typography variant='h4'>
            {getShortDescription(note.description)}
          </Typography>
        </CardContent>
        <StyledCardActions>
          <EditMenu note={note} editNote={editNote} />
          <Button
            variant='contained'
            color='secondary'
            endIcon={<DeleteIcon />}
          >
            {BUTTON_TEXT.DELETE}
          </Button>
        </StyledCardActions>
      </StyledCard>
    )}
  </Draggable>
);

export default Note;