"use client"

import * as React from "react"
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';

interface TooltipProps {
  children: React.ReactElement;
  content?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

const Tooltip = ({ children, content, side = "top" }: TooltipProps) => {
  if (!content) return children;
  
  return (
    <MuiTooltip title={content} placement={side}>
      {children}
    </MuiTooltip>
  );
};

const TooltipTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const TooltipContent = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
