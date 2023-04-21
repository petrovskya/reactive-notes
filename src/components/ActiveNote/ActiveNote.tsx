import { Typography } from '@mui/material';

import { DisplayedNote } from 'components';

import { INote } from 'types';

interface IActiveNote {
  note: INote | null;
}

export const ActiveNote = ({ note }: IActiveNote) => {
  return note ? (
    <DisplayedNote note={note} />
  ) : (
    <Typography gutterBottom variant='h5' component='p' color='text.primary'>
      Select note to display...
    </Typography>
  );
};
