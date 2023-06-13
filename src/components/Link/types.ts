import { ReactNode } from 'react';
import { PathMatch } from 'react-router-dom';

import { ROUTE } from 'router';

export interface ILinkContainerProps {
  children: ReactNode;
  to: ROUTE;
}

export interface ILinkProps extends ILinkContainerProps {
  match: PathMatch<string> | null;
}

export type TIsMatched = {
  match: PathMatch<string> | null;
};
