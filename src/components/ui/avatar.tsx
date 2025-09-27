"use client"

'use client'

import * as React from "react"
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { cn } from "@/lib/utils"

const StyledAvatar = styled(MuiAvatar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '50%',
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.secondary,
}))

interface AvatarProps extends Omit<MuiAvatarProps, 'className'> {
  className?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, ...props }, ref) => (
    <StyledAvatar
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
)
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn(
      "aspect-square h-full w-full rounded-full object-cover",
      className
    )}
    {...props}
  />
))
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }
