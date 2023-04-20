import React, { useState } from 'react';
import { StyledEditNote } from './styles';
import { Input } from '@mui/material';
import { NOTES } from 'utils';

const ariaLabel = { 'aria-label': 'description' };

export const EditNote = () => {
  return (
    <StyledEditNote>
      <Input defaultValue={NOTES[0].description} />
    </StyledEditNote>
  );
};
