import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      dark: '#1d4ed8',
      light: '#60a5fa',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6366f1',
      dark: '#4f46e5',
      light: '#818cf8',
      contrastText: '#ffffff',
    },
    success: {
      main: '#0d9488',
      dark: '#0f766e',
      light: '#2dd4bf',
      contrastText: '#ffffff',
    },
    background: {
      default: '#faf9f6',
      paper: '#ffffff',
    },
    text: {
      primary: '#182230',
      secondary: '#5a687c',
    },
    custom: {
      offwhite: '#faf9f6',
      offwhiteAlt: '#f3efe6',
      offwhiteCard: '#ffffff',
      offwhiteBorder: '#e6e1d5',
      navy: '#0b1528',
      dark: '#070d18',
      gradientPrimary: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
      gradientPurple: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
      gradientGreen: 'linear-gradient(135deg, #0d9488 0%, #047857 100%)',
      gradientButton: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
      borderLight: '#e6e1d5',
    },
  },
  typography: {
    fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.5px',
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.3px',
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '10px 22px',
          fontSize: '0.95rem',
          boxShadow: 'none',
          transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 24px rgba(37, 99, 235, 0.22)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 30px rgba(30, 25, 15, 0.04), 0 1px 3px rgba(0,0,0,0.02)',
          border: '1px solid #e8e4db',
          transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': {
            boxShadow: '0 20px 45px rgba(25, 30, 45, 0.09)',
            transform: 'translateY(-6px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: '10px',
        },
      },
    },
  },
});

export default theme;
