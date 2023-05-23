import { createTheme } from '@mui/material/styles';

enum Color {
  PRIMARY = '#f5E045',
  PRIMARY_DARK = '#EDD837',
  PRIMARY_LIGHT = '#FFE51F',
  SECONDARY = '#495A65',
  SECONDARY_DARK = '#283239',
  SECONDARY_LIGHT = '#7C909E',
  BLACK = '#1c201f',
  ERROR = '#ff5154',
  LIGHT = '#afb2b6',
  WHITE = '#ebecef',
  CLEAR_WHITE = '#fff',
  GREEN = '#00a340',
  ORANGE = '#f45d2d',
  TRANSPARENT = 'transparent',
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
    h2: {
      marginBottom: 5,
      fontSize: '24px',
      fontWeight: 600,
    },
    h3: {
      marginBottom: 5,
      fontSize: '20px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '20px',
      fontWeight: 300,
    },
    h6: {
      marginBottom: 10,
      fontSize: '14px',
      fontWeight: 300,
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          backgroundColor: Color.CLEAR_WHITE,
          borderRadius: 6,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: Color.SECONDARY,
          '&.Mui-focused': {
            top: -10,
            backgroundColor: Color.SECONDARY_DARK,
            borderRadius: 3,
            color: Color.PRIMARY,
          },
        },
      },
    },
  },
});

export { Color, theme };
