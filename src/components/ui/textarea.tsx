'use client';

import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextArea = styled(TextField)(({ theme }) => ({
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
    '& textarea': {
      resize: 'vertical',
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
}));

interface TextareaProps extends Omit<TextFieldProps, 'variant' | 'multiline'> {
  placeholder?: string;
  rows?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  rows = 4,
  ...props
}) => {
  return (
    <StyledTextArea
      placeholder={placeholder}
      variant="outlined"
      multiline
      rows={rows}
      fullWidth
      {...props}
    />
  );
};
