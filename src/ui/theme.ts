import { createTheme } from '@mui/material/styles';

enum Color {
  PRIMARY = '#f5E045',
  PRIMARY_DARK = '#F2CE40',
  PRIMARY_LIGHT = '#F7E878',
  SECONDARY = '#495A65',
  SECONDARY_DARK = '#283239',
  SECONDARY_LIGHT = '7C909E',
  BLACK = '#1c201f',
  ERROR = '#ff5154',
  LIGHT = '#afb2b6',
  WHITE = '#eeeeee',
  GREEN = '#00a340',
  ORANGE = '#f45d2d',
}

const theme = createTheme({
  palette: {
    common: {
      black: Color.BLACK,
      white: Color.WHITE,
    },
    primary: {
      main: Color.PRIMARY,
      light: Color.PRIMARY_LIGHT,
      dark: Color.PRIMARY_DARK,
    },
    secondary: {
      main: Color.SECONDARY,
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
});

export { Color, theme };
