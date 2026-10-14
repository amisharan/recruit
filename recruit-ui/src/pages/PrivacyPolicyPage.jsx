import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Card,
  CardContent,
} from '@mui/material';

export default function PrivacyPolicyPage() {
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
            <Typography sx={{ color: '#34d399', fontWeight: 600 }}>Privacy Policy</Typography>
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
            Privacy{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Policy
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem' }}>
            How 1st Recruit LLC collects, uses, and protects your personal information.
          </Typography>
        </Container>
      </Box>

      {/* Main Privacy Policy Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#faf9f6' }}>
        <Container maxWidth="md">
          <Card sx={{ p: { xs: 3.5, md: 6 }, borderRadius: 4, backgroundColor: '#ffffff', border: '1px solid #e8e4db', boxShadow: '0 8px 30px rgba(30,25,15,0.04)' }}>
            <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600, display: 'block', mb: 3 }}>
              Last updated: {currentDate}
            </Typography>

            <Typography variant="body1" sx={{ color: '#334155', lineHeight: 1.8, mb: 4 }}>
              1st Recruit LLC ("we", "our", or "us") is committed to protecting the privacy of candidates, clients, and visitors to our website. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#182230', mt: 4, mb: 2 }}>
              1. Information We Collect
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              We may collect the following types of information:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 4, color: '#475569', lineHeight: 1.8 }}>
              <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and other contact details you provide through our forms.</li>
              <li><strong>Professional Information:</strong> Resume/CV, work history, education, skills, certifications, visa or work-authorization status, and salary expectations submitted for recruitment purposes.</li>
              <li><strong>Business Information:</strong> Company name, role, staffing requirements, and project details shared by clients seeking talent solutions.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, pages visited, and referring URLs collected automatically through cookies and similar technologies.</li>
            </Box>

            <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#0f172a', mt: 4, mb: 2 }}>
              2. How We Use Your Information
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 4, color: '#475569', lineHeight: 1.8 }}>
              <li>Match candidates with suitable job opportunities and present candidate profiles to prospective employers.</li>
              <li>Respond to inquiries, staffing requests, and consultation bookings.</li>
              <li>Facilitate H1-B visa sponsorship, transfer, and related immigration-compliance services.</li>
              <li>Communicate updates about open positions, services, and industry insights.</li>
              <li>Improve our website, services, and user experience.</li>
              <li>Comply with legal, regulatory, and contractual obligations.</li>
            </Box>

            <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#0f172a', mt: 4, mb: 2 }}>
              3. Sharing of Information
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              We do not sell your personal information. We may share your information with:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 4, color: '#475569', lineHeight: 1.8 }}>
              <li><strong>Prospective Employers / Clients:</strong> Candidate details are shared only for the purpose of evaluating employment or contract opportunities, and with your consent where required.</li>
              <li><strong>Service Providers:</strong> Trusted third parties who assist with hosting, email delivery, background verification, and legal or immigration processing, bound by confidentiality obligations.</li>
              <li><strong>Legal Authorities:</strong> When required by law, regulation, legal process, or to protect our rights, safety, or property.</li>
            </Box>

            <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#0f172a', mt: 4, mb: 2 }}>
              4. Data Security &amp; Retention
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 4 }}>
              We implement reasonable administrative, technical, and physical safeguards to protect your information against unauthorized access, loss, misuse, or alteration. We retain candidate and client information for as long as necessary to fulfill recruitment purposes or as required by applicable law.
            </Typography>

            <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#0f172a', mt: 4, mb: 2 }}>
              5. Your Rights &amp; Contact
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              You may request access to, correction of, or deletion of your personal information at any time by contacting us directly at <a href="mailto:info@1st-recruit.com" style={{ color: '#2563eb', fontWeight: 600 }}>info@1st-recruit.com</a>.
            </Typography>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
