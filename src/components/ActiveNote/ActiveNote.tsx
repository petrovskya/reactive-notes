import { Typography } from '@mui/material';
import { CustomNoteCard } from 'components';
import React from 'react';
import { NoteProps } from 'utils/notes';

interface ActiveNoteProps {
  note: NoteProps | null;
}
export const ActiveNote = ({ note }: ActiveNoteProps) => {
  return note ? (
    <CustomNoteCard note={note} fullDescription />
  ) : (
    <Typography gutterBottom variant='h5' component='p' color='text.primary'>
      Select note to display...
    </Typography>
  );
};
