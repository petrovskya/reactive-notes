import { FC } from 'react';
import { CardContent, Typography } from '@mui/material';

import { IDisplayedNoteProps } from './types';
import {
  StyledAuthorInfo,
  StyledCard,
  StyledDateCreation,
  StyledTitle,
} from './styles';

const DisplayedNote: FC<IDisplayedNoteProps> = ({
  note: { title, description, dateCreation, author },
}) => (
  <StyledCard>
    <CardContent>
      <StyledTitle variant='h2'>{title}</StyledTitle>
      <StyledDateCreation variant='h6'>{dateCreation}</StyledDateCreation>
      <Typography variant='h4'>{description}</Typography>
      <StyledAuthorInfo variant='h6'>{author}</StyledAuthorInfo>
    </CardContent>
  </StyledCard>
);

export default DisplayedNote;
