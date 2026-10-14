import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PaidIcon from '@mui/icons-material/Paid';
import SchoolIcon from '@mui/icons-material/School';

export default function WhyWorkSection() {
  const perks = [
    {
      title: 'Enterprise Clients',
      desc: 'Direct access to Fortune 500 banks, tech giants, and innovative growth companies.',
      borderColor: '#2563eb',
      iconColor: '#2563eb',
      icon: <AccountBalanceIcon sx={{ fontSize: 36, color: '#2563eb' }} />,
    },
    {
      title: 'Visa & Mobility',
      desc: 'Compliant H1-B transfers and dedicated legal documentation support throughout your career.',
      borderColor: '#10b981',
      iconColor: '#10b981',
      icon: <AssignmentIndIcon sx={{ fontSize: 36, color: '#10b981' }} />,
    },
    {
      title: 'Top Compensation',
      desc: 'Highly competitive salary packages, on-time bi-weekly payroll, and performance bonuses.',
      borderColor: '#7c3aed',
      iconColor: '#7c3aed',
      icon: <PaidIcon sx={{ fontSize: 36, color: '#7c3aed' }} />,
    },
    {
      title: 'Career Growth',
      desc: 'Continuous coaching, resume refinement, and direct interview prep with senior technical mentors.',
      borderColor: '#2563eb',
      iconColor: '#2563eb',
      icon: <SchoolIcon sx={{ fontSize: 36, color: '#2563eb' }} />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(180deg, #0b1528 0%, #0f172a 100%)',
        color: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Chip
            label="Why Join Us"
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
            variant="h3"
            component="h2"
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              mb: 1.5,
            }}
          >
            Elevate Your{' '}
            <Box component="span" className="text-mask-reveal">
              Professional Journey
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: 700,
              mx: 'auto',
              fontSize: '1.05rem',
            }}
          >
            When you partner with 1st Recruit LLC, you gain access to industry-defining technical assignments and transparent recruiter guidance.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {perks.map((perk, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} className={`stagger-item stagger-delay-${index + 1}`}>
              <Card
                elevation={0}
                className="hover-lift-card"
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  backgroundColor: '#ffffff',
                  borderRadius: 3,
                  border: '1px solid #e8e4db',
                  borderTop: `4px solid ${perk.borderColor} !important`,
                  boxShadow: '0 8px 25px rgba(30, 25, 15, 0.04)',
                }}
              >
                <CardContent sx={{ p: '0 !important' }}>
                  <Box sx={{ mb: 2 }}>{perk.icon}</Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: '#182230',
                      mb: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    {perk.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5a687c', lineHeight: 1.6 }}>
                    {perk.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
