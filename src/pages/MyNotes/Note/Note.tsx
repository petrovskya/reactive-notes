import { Card, CardActions, CardContent, Typography } from '@mui/material';

import { EditMenu } from 'components';
import { getShortDescription } from 'utils';

import { INoteProps } from './types';

export const Note = ({ note, handleActiveNote, editNote }: INoteProps) => (
  <Card sx={{ maxWidth: 345, width: '100%' }}>
    <CardContent onClick={handleActiveNote}>
      <Typography
        gutterBottom
        variant='h3'
        fontSize='20px'
        component='p'
        color='text.primary'
      >
        {note.title}
      </Typography>
      <Typography
        gutterBottom
        variant='body2'
        component='span'
        color='text.secondary'
      >
        {note.dateCreation}
      </Typography>
      <Typography variant='h6' fontSize='16px' color='text.secondary'>
        {getShortDescription(note.description)}
      </Typography>
    </CardContent>
    <CardActions>
      <EditMenu editNote={editNote} note={note} />
    </CardActions>
  </Card>
);
