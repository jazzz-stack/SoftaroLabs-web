'use client';

import React, { useState } from 'react';
import { 
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const NavLink = ({ 
    href, 
    label, 
    className = '' 
  }: { 
    href: string; 
    label: string; 
    className?: string;
  }) => {
    const isActive = location.pathname === href;
    return (
      <Link
        to={href}
        className={cn(
          'transition-colors hover:text-primary',
          isActive ? 'text-primary font-semibold' : 'text-muted-foreground',
          className
        )}
      >
        {label}
      </Link>
    );
  };

  const drawer = (
    <Box sx={{ width: 300, p: 3 }}>
      <Link
        to="/"
        className="mb-8 flex items-center space-x-2"
        onClick={() => setMobileOpen(false)}>
        <img
          src="/assets/image/logo.png"
          alt="Softaro Labs Logo"
          className="h-6 w-6"
        />
        <span className="font-bold font-headline">Softaro Labs</span>
      </Link>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton
              component={Link}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              sx={{
                borderRadius: 2,
                mb: 1,
                position: 'relative',
                "&:hover": {
                  backgroundColor: "rgba(71, 135, 255, 0.1)",
                  color: "#4787FF",
                  transform: 'translateX(4px)',
                  transition: 'all 0.2s ease-in-out',
                },
                ...(location.pathname === link.href && {
                  backgroundColor: "rgba(71, 135, 255, 0.15)",
                  color: "#4787FF",
                  fontWeight: 600,
                  "&::before": {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    backgroundColor: "#4787FF",
                    borderRadius: "0 4px 4px 0",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(71, 135, 255, 0.2)",
                    color: "#4787FF",
                  },
                }),
              }}>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="ml-8  flex items-center pr-4 space-x-2">
            <img
              src="/assets/image/logo.png"
              alt="Softaro Labs Logo"
              className="h-6 w-6"
            />
            <span className="hidden font-bold sm:inline-block font-headline">
              SoftaroLabs
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            display: { md: "none" },
            ml: 1,
          }}>
          <Menu />
        </IconButton>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
            },
          }}>
          {drawer}
        </Drawer>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Can add search bar here in the future */}
          </div>
          <nav className="hidden md:flex items-center">
            <Link to="/contact">
              <Button>Get a Quote</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}