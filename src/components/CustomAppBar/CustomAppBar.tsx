import React from 'react';
import { Toolbar } from '@mui/material';

import { Logo } from 'components';

import { StyledAppBar } from './styles';

export const CustomAppBar = () => {
  return (
    <StyledAppBar>
      <Logo />
      <Toolbar disableGutters></Toolbar>
    </StyledAppBar>
  );
};
