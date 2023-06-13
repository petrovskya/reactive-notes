import { useEffect, useState } from 'react';

export const useResponsiveness = () => {
  const [isMobileView, setMobileView] = useState<boolean>(false);

  useEffect(() => {
    const setMobileResponsiveness = () => {
      return window.innerWidth < 768
        ? setMobileView(true)
        : setMobileView(false);
    };

    window.addEventListener('resize', setMobileResponsiveness);
    setMobileResponsiveness();

    return () => window.removeEventListener('resize', setMobileResponsiveness);
  }, []);

  return isMobileView;
};
