import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Breadcrumbs, Link, Chip, Grid } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';

export default function CareersHeader() {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(135deg, rgba(11, 21, 40, 0.93) 0%, rgba(30, 27, 75, 0.9) 55%, rgba(6, 78, 59, 0.85) 100%), url(/images/career_banner.jpg) center/cover no-repeat',
        color: '#ffffff',
        pt: { xs: 5, md: 7 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background glow circles */}
      <Box
        className="parallax-float-slow"
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        className="parallax-float-fast"
        sx={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" sx={{ color: 'rgba(255,255,255,0.6)' }} />}
          aria-label="breadcrumb"
          sx={{ mb: 2 }}
        >
          <Link
            component={RouterLink}
            to="/"
            underline="hover"
            sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}
          >
            Home
          </Link>
          <Typography sx={{ color: '#10b981', fontWeight: 600, fontSize: '0.9rem' }}>
            Careers
          </Typography>
        </Breadcrumbs>

        <Chip
          icon={<AutoAwesomeIcon sx={{ fontSize: '1rem !important', color: '#38bdf8 !important' }} />}
          label="Direct Enterprise Placements"
          size="small"
          sx={{
            mb: 2,
            backgroundColor: 'rgba(124, 58, 237, 0.3)',
            color: '#ffffff',
            border: '1px solid rgba(124, 58, 237, 0.5)',
            fontWeight: 600,
            fontSize: '0.8rem',
            px: 1,
          }}
        />

        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '2.8rem', md: '3.4rem' },
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 2,
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          Careers &amp;{' '}
          <Box component="span" className="text-mask-reveal">
            Open Opportunities
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: { xs: '1rem', md: '1.2rem' },
            maxWidth: 760,
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          Connecting top technical and business talent with premier enterprise employers. Discover contract, full-time, and H1-B eligible positions.
        </Typography>

        {/* Quick Highlights Strip */}
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {[
            { icon: <GroupsIcon sx={{ color: '#38bdf8' }} />, title: '500+ Annual Placements' },
            { icon: <VerifiedUserIcon sx={{ color: '#34d399' }} />, title: 'H1-B Transfers & Visa Support' },
            { icon: <PublicIcon sx={{ color: '#a78bfa' }} />, title: 'Global USA & India Network' },
          ].map((item, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 1.5,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {item.icon}
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#f1f5f9' }}>
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
