import { ROUTE } from 'router';
import { Link } from 'components';

import { StyledNav } from './styles';
import { NAV_LINKS } from 'config/constants';

const Nav = () => (
  <StyledNav>
    <Link to={ROUTE.HOME}>{NAV_LINKS.HOME}</Link>
    <Link to={ROUTE.MY_NOTES}>{NAV_LINKS.MY_NOTES}</Link>
    <Link to={ROUTE.SHARED_NOTES}>{NAV_LINKS.SHARED_NOTES}</Link>
    <Link to={ROUTE.ABOUT}>{NAV_LINKS.ABOUT}</Link>
  </StyledNav>
);

export default Nav;
