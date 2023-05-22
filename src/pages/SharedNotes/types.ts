import { Dispatch } from 'react';

import { INote } from 'types';

export interface ISharedNotes {
  sharedNotes?: INote[][];
  activeNote: INote | null;
  isLoading?: boolean;
  isFetching?: boolean;
  refOnView?: (node?: Element | null | undefined) => void;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
}
