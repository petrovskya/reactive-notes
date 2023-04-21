import { Card, Button, CardContent, Typography } from '@mui/material';

import { getShortDescription } from 'utils';
import { INoteProps } from './types';

export const Note = ({
  note,
  handleActiveNote,
  activeNote,
  handleEditMode,
  editMode,
}: INoteProps) => (
  <Card sx={{ maxWidth: 345, width: '100%' }}>
    <CardContent onClick={handleActiveNote}>
      <Typography gutterBottom variant='h5' component='p' color='text.primary'>
        {note.title}
      </Typography>
      <Typography
        gutterBottom
        variant='h6'
        component='span'
        color='text.secondary'
      >
        {note.dateCreation}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {getShortDescription(note.description)}
      </Typography>
    </CardContent>
    <Button
      variant='contained'
      onClick={handleEditMode}
      size='large'
      fullWidth
      color='secondary'
    >
      {editMode && activeNote?.id === note.id ? 'Save' : 'Edit'}
    </Button>
  </Card>
);
