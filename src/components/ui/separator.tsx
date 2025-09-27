"use client"

import * as React from "react"
import { Divider } from '@mui/material';

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement> & {
    orientation?: "horizontal" | "vertical"
  }
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <Divider
    orientation={orientation}
    className={cn("shrink-0 bg-border", className)}
  />
))
Separator.displayName = "Separator"

export { Separator }
