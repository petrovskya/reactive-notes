import { ChangeEvent, useCallback, useState } from 'react';

export const useFieldValue = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return { value, onChange };
};
