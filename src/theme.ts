'use client';
import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
      dark: 'black',
      light: 'white'
    },
    secondary: {
      main: '#f50057',
      dark: 'dark-gray',
      light: 'yellow'
    },
  },
};

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  ...themeOptions,
});

export default theme;