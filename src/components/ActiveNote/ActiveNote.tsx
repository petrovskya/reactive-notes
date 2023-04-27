import { FC } from 'react';
import { Typography } from '@mui/material';

import { DisplayedNote } from 'components';
import { CONSTANTS } from 'config';

import { IActiveNoteProps } from './types';

const ActiveNote: FC<IActiveNoteProps> = ({ note }) => {
  return note ? (
    <DisplayedNote note={note} />
  ) : (
    <Typography gutterBottom variant='h5' component='p' color='text.primary'>
      {CONSTANTS.COMPONENT_TITLE.ACTIVE_NOTE}
    </Typography>
  );
};

export default ActiveNote;
