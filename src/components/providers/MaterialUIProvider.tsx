'use client';

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#4787FF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#29A6A6',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F0F2F7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

interface MaterialUIThemeProviderProps {
  children: React.ReactNode;
}

export function MaterialUIThemeProvider({ children }: MaterialUIThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}