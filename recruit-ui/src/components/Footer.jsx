import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { label: 'Staff Augmentation', path: '/services' },
    { label: 'Manpower Services', path: '/services' },
    { label: 'Flexible Staffing', path: '/services' },
    { label: 'H1-B Visa Sponsorship', path: '/services' },
    { label: 'H1-B Visa Transfer', path: '/services' },
    { label: 'Legal Services', path: '/services' },
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Our Services', path: '/services' },
    { label: 'Careers & Jobs', path: '/careers' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms-conditions' },
  ];

  return (
    <Box sx={{ position: 'relative', mt: { xs: 8, md: 10 } }}>
      {/* Overlapping Pre-Footer Card */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, mb: -8 }}>
        <Box
          sx={{
            background: 'linear-gradient(135deg, #0b1528 0%, #1e1b4b 60%, #064e3b 100%)',
            borderRadius: 4,
            p: { xs: 3.5, md: 5 },
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#ffffff',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} lg={7}>
              <Chip
                label="Your Premier Recruitment Partner"
                size="small"
                sx={{
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  mb: 2,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '1.8rem', md: '2.4rem' },
                  lineHeight: 1.25,
                  mb: 1.5,
                }}
              >
                Connecting Talent.{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Creating Success.
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1rem',
                  mb: 3,
                  maxWidth: 580,
                }}
              >
                1st-Recruit delivers efficient, reliable hiring solutions, connecting enterprise companies with top-tier technical and executive talent.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  component={Link}
                  to="/contact-us"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                    py: 1.2,
                    px: 3,
                  }}
                >
                  Hire Top Talent
                </Button>
                <Button
                  component={Link}
                  to="/careers"
                  variant="contained"
                  startIcon={<WorkIcon />}
                  sx={{
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    py: 1.2,
                    px: 3,
                    '&:hover': {
                      backgroundColor: '#059669',
                    },
                  }}
                >
                  Explore Careers
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Box
                sx={{
                  p: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#38bdf8' }}>
                  Speak Directly With An Advisor
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: 'rgba(37, 99, 235, 0.2)',
                      p: 1.2,
                      borderRadius: '50%',
                      color: '#60a5fa',
                    }}
                  >
                    <PhoneIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                      CALL US TOLL FREE
                    </Typography>
                    <Typography
                      component="a"
                      href="tel:+1609563891"
                      variant="h6"
                      sx={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700 }}
                    >
                      +1 609-563-891
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      p: 1.2,
                      borderRadius: '50%',
                      color: '#34d399',
                    }}
                  >
                    <EmailIcon />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                      EMAIL INQUIRIES
                    </Typography>
                    <Typography
                      component="a"
                      href="mailto:info@1st-recruit.com"
                      variant="body1"
                      sx={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}
                    >
                      info@1st-recruit.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Main Footer Body */}
      <Box
        sx={{
          backgroundColor: '#070d18',
          color: '#cbd5e1',
          pt: { xs: 14, md: 16 },
          pb: 4,
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Col 1: Brand Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 2 }}>
                <Box
                  component="img"
                  src="/images/2logo.png"
                  alt="1st Recruit LLC"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/logo.png';
                  }}
                  sx={{
                    height: 48,
                    objectFit: 'contain',
                    filter: 'brightness(1.1)',
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, lineHeight: 1.7 }}>
                1st-Recruit provides world-class staffing and technical recruitment services across the United States. Connecting leading companies with top-quality talent and ensuring precision placement.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Chip
                  label="E-Verify Registered"
                  size="small"
                  sx={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#94a3b8', fontSize: '0.72rem' }}
                />
                <Chip
                  label="ISO 9001:2015"
                  size="small"
                  sx={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#94a3b8', fontSize: '0.72rem' }}
                />
              </Box>
            </Grid>

            {/* Col 2: Services */}
            <Grid item xs={6} md={2.5}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  mb: 2.5,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {servicesLinks.map((item) => (
                  <Box
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#38bdf8' },
                    }}
                  >
                    {item.label}
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Col 3: Quick Links */}
            <Grid item xs={6} md={2.5}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  mb: 2.5,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {quickLinks.map((item) => (
                  <Box
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#38bdf8' },
                    }}
                  >
                    {item.label}
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Col 4: Corporate Offices */}
            <Grid item xs={12} md={3}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  mb: 2.5,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Offices
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                <LocationOnIcon sx={{ color: '#2563eb', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 600 }}>
                    USA Headquarters
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', lineHeight: 1.5 }}>
                    3 Germay Dr, Unit 4 #2031<br />Wilmington, DE 19804
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <LocationOnIcon sx={{ color: '#10b981', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 600 }}>
                    India Operations
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', lineHeight: 1.5 }}>
                    iTech Park, Unit No. 1016, Sector 49<br />Gurugram, Haryana 122018
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Certifications Badge Showcase Strip */}
          <Box sx={{ mt: 5, mb: 1, p: 2.5, backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: 3, border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
              {[
                { name: 'E-Verify Registered', img: '/images/certs/everify.svg' },
                { name: 'ISO 9001:2015', img: '/images/certs/iso.svg' },
                { name: 'DUNS Certified', img: '/images/certs/duns.svg' },
                { name: 'State of Delaware', img: '/images/certs/delaware.svg' },
                { name: 'Pennsylvania Vendor', img: '/images/certs/pennsylvania.svg' },
              ].map((cert, i) => (
                <Grid item key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box component="img" src={cert.img} alt={cert.name} sx={{ height: 28, filter: 'brightness(1.2)' }} />
                  <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600 }}>
                    {cert.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.08)' }} />

          {/* Bottom Copyright */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              color: '#64748b',
              fontSize: '0.82rem',
            }}
          >
            <Typography variant="caption">
              &copy; {currentYear} 1st Recruit LLC. All rights reserved. Connecting Talent. Creating Success.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box
                component={Link}
                to="/privacy-policy"
                sx={{ color: '#94a3b8', textDecoration: 'none', '&:hover': { color: '#ffffff' } }}
              >
                Privacy Policy
              </Box>
              <Box
                component={Link}
                to="/terms-conditions"
                sx={{ color: '#94a3b8', textDecoration: 'none', '&:hover': { color: '#ffffff' } }}
              >
                Terms &amp; Conditions
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
