import React from 'react';
import { StyledAppBar } from './styles';
import { Toolbar } from '@mui/material';
import { CustomNavTabs, Logo } from 'components';

export const CustomAppBar = () => {
  return (
    <StyledAppBar>
      <Logo />
      <Toolbar disableGutters>
        <CustomNavTabs />
      </Toolbar>
    </StyledAppBar>
  );
};
