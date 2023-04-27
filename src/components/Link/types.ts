import { ReactNode } from 'react';
import { PathMatch } from 'react-router-dom';

import { ROUTE } from 'router';

interface ILinkContainerProps {
  children: ReactNode;
  to: ROUTE;
}

interface ILinkProps extends ILinkContainerProps {
  match: PathMatch<string> | null;
}

export type { ILinkContainerProps, ILinkProps };
