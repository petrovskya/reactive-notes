import { createGlobalStyle } from 'styled-components';

import { Color } from 'ui';

export const GlobalStyles = createGlobalStyle({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  body: {
    fontFamily: `Inter, san-serif`,
    backgroundColor: Color.WHITE,
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
    scrollbarColor: `${Color.SECONDARY} ${Color.PRIMARY}`,

    '&::-webkit-scrollbar': {
      width: '6px',
    },

    '&::-webkit-scrollbar-track': {
      borderRadius: '16px',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: Color.SECONDARY,
      borderRadius: '16px',
    },
  },
  button: {
    border: 'none',
    fontFamily: 'inherit',
  },
  ul: {
    listStyleType: 'none',
  },
  a: {
    textDecoration: 'none',
  },
});
