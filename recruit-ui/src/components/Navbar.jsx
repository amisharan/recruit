import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services' },
    { label: 'Careers', path: '/careers', badge: 'Hiring' },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
      {/* Top Contact Bar */}
      <Box
        sx={{
          backgroundColor: '#0b1528',
          color: '#cbd5e1',
          fontSize: '0.8rem',
          py: 0.8,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: { xs: 'none', lg: 'block' },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <PhoneIcon sx={{ fontSize: 16, color: '#38bdf8' }} />
                <span>Call Us:</span>
                <a href="tel:+1609563891" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                  +1 609-563-891
                </a>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <EmailIcon sx={{ fontSize: 16, color: '#10b981' }} />
                <span>Email:</span>
                <a href="mailto:info@1st-recruit.com" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                  info@1st-recruit.com
                </a>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#94a3b8' }}>
              <LocationOnIcon sx={{ fontSize: 16, color: '#a78bfa' }} />
              <span>Wilmington, DE (USA) &amp; Gurugram (India)</span>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Glass Navbar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(250, 249, 246, 0.94)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #e8e4db',
          color: '#182230',
          py: 0.5,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                src="/images/brand_logo.jpg"
                alt="1st Recruit LLC"
                sx={{
                  height: { xs: 44, sm: 54 },
                  maxWidth: { xs: 200, sm: 240 },
                  objectFit: 'contain',
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navLinks.map((item) => {
                const active = isActive(item.path);
                return (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: active ? '#2563eb' : '#334155',
                      fontWeight: active ? 700 : 500,
                      fontSize: '0.92rem',
                      position: 'relative',
                      px: 1.8,
                      py: 1,
                      '&::after': active ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '3px',
                        borderRadius: '2px',
                        backgroundColor: '#2563eb',
                      } : {},
                      '&:hover': {
                        backgroundColor: 'rgba(37, 99, 235, 0.06)',
                        color: '#2563eb',
                      },
                    }}
                  >
                    {item.label}
                    {item.badge && (
                      <Chip
                        label={item.badge}
                        size="small"
                        sx={{
                          ml: 1,
                          height: 20,
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          backgroundColor: '#10b981',
                          color: '#ffffff',
                        }}
                      />
                    )}
                  </Button>
                );
              })}
            </Box>

            {/* Mobile Hamburger Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: '#0f172a' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 280,
            p: 3,
            backgroundColor: '#ffffff',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box
            component={Link}
            to="/"
            onClick={handleDrawerToggle}
          >
            <Box
              component="img"
              src="/images/brand_logo.jpg"
              alt="1st Recruit LLC"
              sx={{ height: 42, objectFit: 'contain' }}
            />
          </Box>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navLinks.map((item) => {
            const active = isActive(item.path);
            return (
              <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: active ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                  }}
                >
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: active ? 700 : 500,
                            color: active ? '#2563eb' : '#1e293b',
                          }}
                        >
                          {item.label}
                        </Typography>
                        {item.badge && (
                          <Chip
                            label={item.badge}
                            size="small"
                            sx={{
                              height: 20,
                              fontSize: '0.65rem',
                              fontWeight: 700,
                              backgroundColor: '#10b981',
                              color: '#ffffff',
                            }}
                          />
                        )}
                      </Box>
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
