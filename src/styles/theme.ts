import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#FCFCFC'
    },
    primary: {
      main: '#60AFE0'
    },
    secondary: {
      main: '#7FC791',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
