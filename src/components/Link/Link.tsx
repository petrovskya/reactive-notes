import { FC } from 'react';

import { StyledLink } from './styles';
import { ILinkProps } from './types';

const Link: FC<ILinkProps> = ({ children, to, match }) => (
  <StyledLink to={to} match={match}>
    {children}
  </StyledLink>
);

export default Link;
