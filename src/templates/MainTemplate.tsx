import { Header, Menu } from 'components';
import React from 'react';
import { StyledMainTemplate } from './styles';
import { MyNotes } from 'pages';

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <Menu />
      <MyNotes />
    </StyledMainTemplate>
  );
};
