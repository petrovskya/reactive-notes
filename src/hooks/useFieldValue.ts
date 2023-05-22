import { ChangeEvent, useCallback, useState } from 'react';

import { EMPTY_STRING } from 'config/constants';

export const useFieldValue = (initialValue = EMPTY_STRING) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onReset = () => {
    setValue(' ');
  };

  return { value, onChange, onReset };
};
