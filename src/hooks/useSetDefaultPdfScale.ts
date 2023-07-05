import { useEffect, useState } from 'react';

import { DEFAULT_SCALE, SCREEN_SIZE } from 'config/constants';

export const useSetDefaultPdfScale = () => {
  const [defaultScale, setDefaultScale] = useState<number>(
    DEFAULT_SCALE.DESKTOP,
  );

  useEffect(() => {
    const setResponsiveness = () =>
      window.innerWidth < SCREEN_SIZE.DESKTOP
        ? window.innerWidth < SCREEN_SIZE.LAPTOP
          ? window.innerWidth < SCREEN_SIZE.MOBILE
            ? setDefaultScale(DEFAULT_SCALE.MOBILE)
            : setDefaultScale(DEFAULT_SCALE.LAPTOP)
          : setDefaultScale(DEFAULT_SCALE.DESKTOP)
        : setDefaultScale(DEFAULT_SCALE.LARGE_SCREEN);

    window.addEventListener('resize', setResponsiveness);
    setResponsiveness();

    return () => window.removeEventListener('resize', setResponsiveness);
  }, []);

  return defaultScale;
};
