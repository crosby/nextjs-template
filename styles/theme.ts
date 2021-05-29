import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Inter',
      fontSize: 64,
      lineHeight: 1.4,
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: 48,
      lineHeight: 1.4,
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 1.4,
      fontWeight: 'normal',
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: 'Inter',
      fontSize: 18,
      lineHeight: 1.8,
      fontWeight: 'normal',
    },
    body2: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 1.8,
      fontWeight: 'normal',
    },
    button: {
      fontFamily: 'Inter',
      textTransform: 'none',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        height: 78,
        paddingTop: 24,
        paddingBottom: 24,
      },
      colorPrimary: {
        backgroundColor: '#150c21',
      },
    },
    MuiFilledInput: {
      input: {
        paddingTop: 10,
      },
    },
  },
});

export default theme;
