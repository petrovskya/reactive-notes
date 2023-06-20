import { useEffect, useState } from 'react';

import { TABLET_SCREEN_SIZE } from 'config/constants';

export const useResponsiveness = () => {
  const [isMobileView, setMobileView] = useState<boolean>(false);

  useEffect(() => {
    const setMobileResponsiveness = () =>
      window.innerWidth < TABLET_SCREEN_SIZE
        ? setMobileView(true)
        : setMobileView(false);

    window.addEventListener('resize', setMobileResponsiveness);
    setMobileResponsiveness();

    return () => window.removeEventListener('resize', setMobileResponsiveness);
  }, []);

  return isMobileView;
};
