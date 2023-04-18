import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { NoteProps } from 'utils/notes';
import { getShortDescription } from 'utils';
import { Dispatch } from 'react';

interface NoteCardProps {
  note: NoteProps;
  setActiveNote?: Dispatch<React.SetStateAction<NoteProps | null>>;
  activeNote?: NoteProps | null;
}

export const CustomNoteCard = ({
  note,
  setActiveNote,
  activeNote,
}: NoteCardProps) => {
  const { id, title, description, dateCreation } = note;
  const handleActiveNote = () => {
    activeNote?.id === id && setActiveNote
      ? setActiveNote(null)
      : setActiveNote && setActiveNote(note);
  };
  return (
    <Card sx={{ maxWidth: 345, width: '100%' }} onClick={handleActiveNote}>
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
          {getShortDescription(description)}
        </Typography>
      </CardContent>
    </Card>
  );
};
