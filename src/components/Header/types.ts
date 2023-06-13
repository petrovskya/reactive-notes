export interface IHeaderProps {
  isMobileView: boolean;
  isMobileNavOpen: boolean;
  handleMobileNavOpen: () => void;
}

export type TIsMobileNavOpen = {
  $isMobileNavOpen: boolean;
};

export type TIsMobileView = {
  $isMobileView: boolean;
};
