"use client"

'use client';

import React from 'react';
import { FormLabel, FormLabelProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 500,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5),
  display: 'block',
}));

interface LabelProps extends FormLabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({ children, htmlFor, ...props }) => {
  return (
    <StyledLabel component="label" htmlFor={htmlFor} {...props}>
      {children}
    </StyledLabel>
  );
};
