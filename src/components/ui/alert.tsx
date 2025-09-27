'use client';

import React from 'react';
import { Alert as MuiAlert, AlertTitle as MuiAlertTitle, AlertProps as MuiAlertProps } from '@mui/material';
import { CheckCircle, Info, Warning, Error } from '@mui/icons-material';

interface AlertProps extends MuiAlertProps {
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ children, severity = 'info', ...props }) => {
  return (
    <MuiAlert
      severity={severity}
      iconMapping={{
        success: <CheckCircle />,
        info: <Info />,
        warning: <Warning />,
        error: <Error />,
      }}
      {...props}
    >
      {children}
    </MuiAlert>
  );
};

interface AlertTitleProps {
  children: React.ReactNode;
}

export const AlertTitle: React.FC<AlertTitleProps> = ({ children }) => {
  return <MuiAlertTitle>{children}</MuiAlertTitle>;
};

interface AlertDescriptionProps {
  children: React.ReactNode;
}

export const AlertDescription: React.FC<AlertDescriptionProps> = ({ children }) => {
  return <div>{children}</div>;
};
