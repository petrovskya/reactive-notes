import { ChangeEvent, useCallback, useState } from 'react';

import { EMPTY_STRING } from 'config/constants';

export const useFieldValue = (initialValue = EMPTY_STRING) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const onReset = () => {
    setValue(EMPTY_STRING);
  };

  return { value, onChange, onReset };
};
