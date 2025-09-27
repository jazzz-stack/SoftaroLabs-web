'use client';

import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    '& fieldset': {
      borderColor: theme.palette.grey[300],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
}));

interface InputProps extends Omit<TextFieldProps, 'variant'> {
  type?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  ...props
}) => {
  return (
    <StyledTextField
      type={type}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      size="medium"
      {...props}
    />
  );
};
