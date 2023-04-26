import { FC } from 'react';
import { CardContent, Typography } from '@mui/material';

import { IDisplayedNoteProps } from './types';
import { StyledCard } from './styles';

const DisplayedNote: FC<IDisplayedNoteProps> = ({
  note: { id, title, description, dateCreation },
}) => (
  <StyledCard>
    <CardContent>
      <Typography gutterBottom variant='h5' component='p' color='text.primary'>
        {title}
      </Typography>
      <Typography
        gutterBottom
        variant='h6'
        component='span'
        color='text.secondary'
      >
        {dateCreation}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {description}
      </Typography>
    </CardContent>
  </StyledCard>
);

export default DisplayedNote;
