import { Outlet } from 'react-router-dom';

import { Header } from 'components';

import { StyledMainTemplate } from './styles';

const MainTemplate = () => (
  <StyledMainTemplate>
    <Header />
    <Outlet />
  </StyledMainTemplate>
);

export default MainTemplate;
