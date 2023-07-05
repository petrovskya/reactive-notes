import { FC } from 'react';
import { Typography } from '@mui/material';

import { DisplayedNote } from 'components';
import { COMPONENT_TITLE } from 'config/types';

import { IActiveNoteProps } from './types';

const ActiveNote: FC<IActiveNoteProps> = ({ note }) => {
  return note ? (
    <DisplayedNote data-testid='displayed-note' note={note} />
  ) : (
    <Typography gutterBottom variant='h5' component='p' color='text.primary'>
      {COMPONENT_TITLE.ACTIVE_NOTE}
    </Typography>
  );
};

export default ActiveNote;
