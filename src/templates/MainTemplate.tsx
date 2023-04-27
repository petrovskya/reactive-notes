import { Outlet } from 'react-router-dom';

import { CustomAppBar } from 'components';

import { StyledMainTemplate } from './styles';

const MainTemplate = () => (
  <StyledMainTemplate>
    <CustomAppBar />
    <Outlet />
  </StyledMainTemplate>
);

export default MainTemplate;
