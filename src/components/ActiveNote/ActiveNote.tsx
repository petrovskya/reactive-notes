import { Typography } from '@mui/material';
import { DisplayedNote } from 'components';
import React from 'react';
import { INote } from 'types';

interface ActiveNoteProps {
  note: INote | null;
}
export const ActiveNote = ({ note }: ActiveNoteProps) => {
  return note ? (
    <DisplayedNote note={note} />
  ) : (
    <Typography gutterBottom variant='h5' component='p' color='text.primary'>
      Select note to display...
    </Typography>
  );
};
