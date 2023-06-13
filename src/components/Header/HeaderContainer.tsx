import { useEffect } from 'react';

import { useResponsiveness, useToggle } from 'hooks';

import Header from './Header';

const HeaderContainer = () => {
  const isMobileView = useResponsiveness();
  const [isMobileNavOpen, setMobileNavOpen] = useToggle(false);

  useEffect(() => {
    isMobileNavOpen && !isMobileView && setMobileNavOpen();
  }, [isMobileView]);

  return (
    <Header
      isMobileView={isMobileView}
      isMobileNavOpen={isMobileNavOpen}
      handleMobileNavOpen={setMobileNavOpen}
    />
  );
};

export default HeaderContainer;
