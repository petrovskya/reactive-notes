import { FC } from 'react';
import { CardContent, Typography } from '@mui/material';

import { getShortDescription } from 'utils';

import { INoteProps } from './types';
import {
  StyledAuthorInfo,
  StyledCard,
  StyledDateCreation,
  StyledTitle,
} from './styles';
import { ShareButton } from 'components';

const Note: FC<INoteProps> = ({
  note,
  note: { title, dateCreation, description, author },
  handleActiveNote,
}) => (
  <StyledCard>
    <ShareButton note={note} />
    <CardContent onClick={handleActiveNote}>
      <StyledTitle variant='h3'>{title}</StyledTitle>
      <StyledDateCreation variant='h6'>{dateCreation}</StyledDateCreation>
      <Typography variant='h4'>{getShortDescription(description)}</Typography>
      <StyledAuthorInfo variant='h6'>{author}</StyledAuthorInfo>
    </CardContent>
  </StyledCard>
);

export default Note;
