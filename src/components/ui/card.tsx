'use client';

import React from 'react';
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader as MuiCardHeader,
  CardActions as MuiCardActions,
  Typography,
  CardProps as MuiCardProps,
  CardContentProps as MuiCardContentProps,
  CardHeaderProps as MuiCardHeaderProps,
  CardActionsProps as MuiCardActionsProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled card
const StyledCard = styled(MuiCard)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
  '&:hover': {
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    transform: 'translateY(-1px)',
  },
}));

interface CardProps extends MuiCardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <StyledCard {...props}>
      {children}
    </StyledCard>
  );
};

interface CardHeaderProps extends MuiCardHeaderProps {
  children?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, ...props }) => {
  return (
    <MuiCardHeader {...props}>
      {children}
    </MuiCardHeader>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, variant = 'h5' }) => {
  return (
    <Typography variant={variant} component="h2" gutterBottom>
      {children}
    </Typography>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      {children}
    </Typography>
  );
};

interface CardContentProps extends MuiCardContentProps {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children, ...props }) => {
  return (
    <MuiCardContent {...props}>
      {children}
    </MuiCardContent>
  );
};

interface CardFooterProps extends MuiCardActionsProps {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, ...props }) => {
  return (
    <MuiCardActions {...props}>
      {children}
    </MuiCardActions>
  );
};
