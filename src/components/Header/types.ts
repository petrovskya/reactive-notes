export interface IHeaderProps {
  isMobileView: boolean;
  isMobileNavOpen: boolean;
  handleMobileNavVisibility: () => void;
}

export type TIsMobileNavOpen = {
  $isMobileNavOpen: boolean;
};

export type TIsMobileView = {
  $isMobileView: boolean;
};
