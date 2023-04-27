import React, { FC } from 'react';
import { useMatch } from 'react-router-dom';

import { ILinkContainerProps } from './types';
import Link from './Link';

const LinkContainer: FC<ILinkContainerProps> = ({ children, to }) => {
  const match = useMatch(to);

  return <Link to={to} match={match} children={children} />;
};

export default LinkContainer;
