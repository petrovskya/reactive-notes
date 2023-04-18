import * as React from 'react';
import { Tabs, Tab } from '@mui/material';
import { StyledNavTabs } from './styles';
import { useState } from 'react';

interface LinkTabProps {
  label?: string;
  href?: string;
}

export const LinkTab = (props: LinkTabProps) => {
  return (
    <Tab
      component='a'
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
};

export const CustomNavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledNavTabs sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='nav tabs example'
        textColor='inherit'
      >
        <LinkTab label='My Notes' href='#' />
        <LinkTab label='Shared Notes' href='#' />
        <LinkTab label='About' href='#' />
      </Tabs>
    </StyledNavTabs>
  );
};
