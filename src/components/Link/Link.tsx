import { FC } from 'react';

import { ILinkProps } from './types';
import { StyledLink } from './styles';

const Link: FC<ILinkProps> = ({ children, to, match }) => (
  <StyledLink to={to} match={match}>
    {children}
  </StyledLink>
);

export default Link;
