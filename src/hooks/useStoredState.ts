import { SetStateAction, useState } from 'react';

import { INote } from 'types';

export const useStoredState = (key: string, defaultValue: INote[]) => {
  const [state, setState] = useState<INote[]>(() => {
    const storedState = localStorage.getItem(key);
    if (storedState) {
      return JSON.parse(storedState) as INote[];
    }
    return defaultValue instanceof Function ? defaultValue() : defaultValue;
  });
  const setValue = (value: SetStateAction<INote[]>) => {
    const valueToStore = value instanceof Function ? value(state) : value;
    localStorage.setItem(key, JSON.stringify(valueToStore));
    setState(valueToStore);
  };
  return [state, setValue] as const;
};
