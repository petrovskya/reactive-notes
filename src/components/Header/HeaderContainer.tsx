import { useEffect } from 'react';

import { useResponsiveness, useToggle } from 'hooks';

import Header from './Header';

const HeaderContainer = () => {
  const isMobileView = useResponsiveness();
  const [isMobileNavOpen, toggleMobileNavOpen] = useToggle(false);

  useEffect(() => {
    isMobileNavOpen && !isMobileView && toggleMobileNavOpen();
  }, [isMobileView]);

  return (
    <Header
      isMobileView={isMobileView}
      isMobileNavOpen={isMobileNavOpen}
      handleMobileNavVisibility={toggleMobileNavOpen}
    />
  );
};

export default HeaderContainer;
