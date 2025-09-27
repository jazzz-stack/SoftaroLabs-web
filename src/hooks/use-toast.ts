'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Snackbar, Alert, AlertProps } from '@mui/material';

interface ToastContextType {
  toast: (options: ToastOptions) => void;
}

interface ToastOptions {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
  duration?: number;
}

const ToastContext = createContext<ToastContextType>({
  toast: () => {},
});

export const useToast = () => {
  const context = useContext(ToastContext);
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [open, setOpen] = useState(false);
  const [toastData, setToastData] = useState<ToastOptions>({});

  const toast = useCallback((options: ToastOptions) => {
    setToastData(options);
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const getSeverity = (variant?: string) => {
    switch (variant) {
      case 'destructive':
        return 'error';
      default:
        return 'success';
    }
  };

  return React.createElement(
    ToastContext.Provider,
    { value: { toast } },
    children,
    React.createElement(
      Snackbar,
      {
        open: open,
        autoHideDuration: toastData.duration || 6000,
        onClose: handleClose,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' }
      },
      React.createElement(Alert, {
        onClose: handleClose,
        severity: getSeverity(toastData.variant),
        variant: 'filled',
        sx: { width: '100%' }
      }, [
        toastData.title && React.createElement('strong', { key: 'title' }, toastData.title),
        toastData.description && toastData.title && React.createElement('br', { key: 'br' }),
        toastData.description && React.createElement('span', { key: 'desc' }, toastData.description)
      ].filter(Boolean))
    )
  );
};
