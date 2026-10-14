import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Card,
} from '@mui/material';

export default function TermsConditionsPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* Subpage Banner Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0b1528 0%, #1e1b4b 60%, #064e3b 100%)',
          py: { xs: 6, md: 8 },
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              Home
            </Link>
            <Typography sx={{ color: '#34d399', fontWeight: 600 }}>Terms &amp; Conditions</Typography>
          </Breadcrumbs>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2.2rem', sm: '3rem', md: '3.6rem' },
              mb: 1.5,
            }}
          >
            Terms &amp;{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Conditions
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem' }}>
            The terms that govern your use of our website and recruitment services.
          </Typography>
        </Container>
      </Box>

      {/* Main Terms & Conditions Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#faf9f6' }}>
        <Container maxWidth="md">
          <Card sx={{ p: { xs: 3.5, md: 6 }, borderRadius: 4, backgroundColor: '#ffffff', border: '1px solid #e8e4db', boxShadow: '0 8px 30px rgba(30,25,15,0.04)' }}>
            <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600, display: 'block', mb: 3 }}>
              Last updated: {currentDate}
            </Typography>

            <Typography variant="body1" sx={{ color: '#334155', lineHeight: 1.8, mb: 4 }}>
              Welcome to 1st Recruit LLC ("we", "our", or "us"). By accessing or using our website and services, you ("you", "user", "candidate", or "client") agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use our website or services.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#182230', mt: 4, mb: 2 }}>
              1. Our Services
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 4 }}>
              1st Recruit LLC provides staffing, recruitment, staff augmentation, manpower, flexible staffing, H1-B visa sponsorship and transfer support, and related legal and business services. We act as an intermediary connecting candidates with prospective employers and assisting client organizations in sourcing talent.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#0f172a', mt: 4, mb: 2 }}>
              2. Candidate &amp; Client Obligations
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              Users agree to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 4, color: '#475569', lineHeight: 1.8 }}>
              <li>Provide truthful, accurate information in all applications, resumes, and communications.</li>
              <li>Disclose current work-authorization or visa status honestly and promptly notify us of any changes.</li>
              <li>Not circumvent 1st Recruit LLC by directly soliciting or hiring introduced contacts without consent.</li>
              <li>Comply with all applicable federal, state, and local employment and labor laws.</li>
            </Box>

            <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#0f172a', mt: 4, mb: 2 }}>
              3. H1-B Visa &amp; Immigration Services
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 4 }}>
              Our H1-B sponsorship, transfer, and immigration-compliance services are provided in coordination with qualified immigration counsels. Visa approvals and processing timelines are determined solely by governmental authorities (including USCIS and the U.S. Department of Labor).
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#0f172a', mt: 4, mb: 2 }}>
              4. Contact &amp; Inquiries
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              For any questions regarding these Terms &amp; Conditions, please reach out to us at <a href="mailto:info@1st-recruit.com" style={{ color: '#2563eb', fontWeight: 600 }}>info@1st-recruit.com</a> or call <a href="tel:+1609563891" style={{ color: '#2563eb', fontWeight: 600 }}>+1 609-563-891</a>.
            </Typography>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
