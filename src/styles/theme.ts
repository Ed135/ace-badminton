import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#FCFCFC'
    },
    primary: {
      main: '#1b774f'
    },
    secondary: {
      main: '#4783bf',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
