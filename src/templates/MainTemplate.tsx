import { Outlet } from 'react-router-dom';

import { CustomAppBar } from 'components';

import { StyledMainTemplate } from './styles';

export const MainTemplate = () => (
  <StyledMainTemplate>
    <CustomAppBar />
    <Outlet />
  </StyledMainTemplate>
);
