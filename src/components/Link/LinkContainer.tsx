import { FC } from 'react';
import { useMatch } from 'react-router-dom';

import Link from './Link';
import { ILinkContainerProps } from './types';

const LinkContainer: FC<ILinkContainerProps> = ({ children, to }) => {
  const match = useMatch(to);

  return (
    <Link to={to} match={match}>
      {children}
    </Link>
  );
};

export default LinkContainer;
