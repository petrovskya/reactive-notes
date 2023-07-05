import { FC } from 'react';
import { CardContent, Typography } from '@mui/material';

import { StyledCard, StyledDateCreation, StyledTitle } from './styles';
import { IDisplayedNoteProps } from './types';

const DisplayedNote: FC<IDisplayedNoteProps> = ({
  note: { title, description, dateCreation, author },
}) => (
  <StyledCard data-testid='displayed-note'>
    <CardContent>
      <StyledTitle variant='h2'>{title}</StyledTitle>
      <StyledDateCreation variant='h6'>{dateCreation}</StyledDateCreation>
      <Typography variant='h4'>{description}</Typography>
      <Typography variant='h6'>{author}</Typography>
    </CardContent>
  </StyledCard>
);

export default DisplayedNote;
