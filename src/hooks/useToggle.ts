import { useState, useCallback } from 'react';

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [state, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((state) => !state);
  }, []);
  return [state, toggle];
};
