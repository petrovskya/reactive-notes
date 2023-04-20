import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { INote } from 'types';

interface IDisplayedNoteProps {
  note: INote;
}

export const DisplayedNote = ({
  note: { id, title, description, dateCreation },
}: IDisplayedNoteProps) => {
  return (
    <Card sx={{ maxWidth: 345, width: '100%' }}>
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='p'
          color='text.primary'
        >
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
    </Card>
  );
};
