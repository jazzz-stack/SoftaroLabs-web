'use client';

import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled button to match your design system
const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'hasCustomGradient',
})<{ hasCustomGradient?: boolean }>(({ theme, variant, hasCustomGradient }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: 500,
  padding: '8px 16px',
  
  // Only apply default gradient if no custom gradient is provided
  ...(!hasCustomGradient && variant === 'contained' && {
    background: 'linear-gradient(135deg, #4787FF 0%, #5a96ff 100%)',
    boxShadow: '0 2px 4px rgba(71, 135, 255, 0.2)',
    '&:hover': {
      background: 'linear-gradient(135deg, #3b7aff 0%, #4d89ff 100%)',
      boxShadow: '0 4px 8px rgba(71, 135, 255, 0.3)',
    },
  }),
  
  ...(variant === 'outlined' && {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}08`,
      borderColor: theme.palette.primary.dark,
    },
  }),
  
  ...(variant === 'text' && {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}08`,
    },
  }),
}));

interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  variant?: 'contained' | 'outlined' | 'text' | 'default' | 'destructive' | 'ghost' | 'link' | 'secondary';
  size?: 'small' | 'medium' | 'large' | 'sm' | 'lg' | 'default' | 'icon';
  asChild?: boolean; // Legacy prop from Radix UI - ignored in Material UI
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'contained', 
  size = 'medium', 
  children,
  className = '',
  asChild, // Extract and ignore this prop
  ...props 
}) => {
  // Check if className contains gradient classes
  const hasCustomGradient = className.includes('bg-gradient') || className.includes('from-') || className.includes('to-');
  
  // Map custom variants to MUI variants
  const getMuiVariant = (variant: string) => {
    switch (variant) {
      case 'default':
      case 'contained':
        return 'contained';
      case 'outlined':
        return 'outlined';
      case 'ghost':
      case 'text':
      case 'link':
        return 'text';
      case 'destructive':
        return 'contained';
      case 'secondary':
        return 'outlined';
      default:
        return 'contained';
    }
  };

  // Map custom sizes to MUI sizes
  const getMuiSize = (size: string) => {
    switch (size) {
      case 'sm':
      case 'small':
        return 'small';
      case 'lg':
      case 'large':
        return 'large';
      case 'icon':
        return 'small';
      default:
        return 'medium';
    }
  };

  const muiVariant = getMuiVariant(variant);
  const muiSize = getMuiSize(size);

  const buttonProps: MuiButtonProps & { hasCustomGradient?: boolean } = {
    ...props,
    className,
    variant: muiVariant as 'text' | 'outlined' | 'contained',
    size: muiSize as 'small' | 'medium' | 'large',
    hasCustomGradient,
  };

  // Handle destructive variant
  if (variant === 'destructive') {
    buttonProps.color = 'error';
  }

  return (
    <StyledButton {...buttonProps}>
      {children}
    </StyledButton>
  );
};
