import { createTheme } from '@mui/material/styles';
import { Color } from './color';

export const theme = createTheme({
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
    fontFamily: 'inherit',
  },
});
