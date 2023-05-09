import { FC } from 'react';
import { CardActions, CardContent } from '@mui/material';

import { EditMenu } from 'components';
import { getShortDescription } from 'utils';

import { INoteProps } from './types';
import {
  StyledCard,
  StyledDateCreation,
  StyledDescription,
  StyledTitle,
} from './styles';

const Note: FC<INoteProps> = ({
  note,
  note: { title, dateCreation, description },
  isActiveNote,
  handleActiveNote,
  editNote,
}) => (
  <StyledCard>
    <CardContent onClick={handleActiveNote}>
      <StyledTitle active={isActiveNote.toString()}>{title}</StyledTitle>
      <StyledDateCreation>{dateCreation}</StyledDateCreation>
      <StyledDescription>{getShortDescription(description)}</StyledDescription>
    </CardContent>
    <CardActions>
      <EditMenu note={note} editNote={editNote} />
    </CardActions>
  </StyledCard>
);

export default Note;
