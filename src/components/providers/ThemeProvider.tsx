'use client';

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const corporateTechTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E40AF',  // Navy Blue - trustworthy and professional
      light: '#3B82F6', // Sky Blue variant
      dark: '#1E3A8A',  // Darker navy for hover states
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3B82F6',  // Sky Blue - modern and approachable
      light: '#60A5FA',
      dark: '#2563EB',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F9FAFB',  // Light Gray - clean and minimal
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111827',  // Dark Gray - excellent readability
      secondary: '#6B7280',  // Medium gray for secondary text
    },
    success: {
      main: '#10B981',  // Emerald - positive actions
      light: '#34D399',
      dark: '#059669',
      contrastText: '#ffffff',
    },
    info: {
      main: '#3B82F6',  // Sky Blue for info states
      light: '#60A5FA',
      dark: '#2563EB',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#F59E0B',  // Amber for warnings
      light: '#FCD34D',
      dark: '#D97706',
      contrastText: '#000000',
    },
    error: {
      main: '#EF4444',  // Red for errors
      light: '#F87171',
      dark: '#DC2626',
      contrastText: '#ffffff',
    },
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      color: '#111827',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
      color: '#111827',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: '#111827',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      color: '#111827',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#111827',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#6B7280',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 500,
          padding: '10px 20px',
        },
        containedPrimary: {
          backgroundColor: '#1E40AF',
          '&:hover': {
            backgroundColor: '#1E3A8A',
          },
        },
        containedSecondary: {
          backgroundColor: '#3B82F6',
          '&:hover': {
            backgroundColor: '#2563EB',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          border: '1px solid #E5E7EB',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
          borderRight: '1px solid #E5E7EB',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#111827',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          borderBottom: '1px solid #E5E7EB',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

interface CorporateThemeProviderProps {
  children: React.ReactNode;
}

export function CorporateThemeProvider({ children }: CorporateThemeProviderProps) {
  return (
    <ThemeProvider theme={corporateTechTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}