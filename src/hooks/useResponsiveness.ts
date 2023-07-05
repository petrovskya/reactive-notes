import { useEffect, useState } from 'react';

import { SCREEN_SIZE } from 'config/constants';

export const useResponsiveness = () => {
  const [isMobileView, setMobileView] = useState<boolean>(false);

  useEffect(() => {
    const setMobileResponsiveness = () =>
      window.innerWidth < SCREEN_SIZE.TABLET
        ? setMobileView(true)
        : setMobileView(false);

    window.addEventListener('resize', setMobileResponsiveness);
    setMobileResponsiveness();

    return () => window.removeEventListener('resize', setMobileResponsiveness);
  }, []);

  return isMobileView;
};
