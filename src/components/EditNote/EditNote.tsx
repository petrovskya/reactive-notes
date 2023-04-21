import { Input } from '@mui/material';

import { NOTES } from 'utils';

import { StyledEditNote } from './styles';

export const EditNote = () => {
  return (
    <StyledEditNote>
      <Input defaultValue={NOTES[0].description} />
    </StyledEditNote>
  );
};
