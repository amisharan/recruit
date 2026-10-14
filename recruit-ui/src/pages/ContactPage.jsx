import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Grid,
  Card,
  TextField,
  MenuItem,
  Button,
  Chip,
  Snackbar,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import MagneticButton from '../components/MagneticButton';

export default function ContactPage() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryReason: 'Staff Augmentation',
    company: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryReason: serviceParam,
      }));
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnackbar({
      open: true,
      message: `Thank you, ${formData.name}! Your message has been sent to 1st Recruit LLC. Our team will contact you within 24 hours.`,
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryReason: 'Staff Augmentation',
      company: '',
      message: '',
    });
  };

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
            <Typography sx={{ color: '#34d399', fontWeight: 600 }}>Contact Us</Typography>
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
            Contact{' '}
            <Box component="span" className="text-mask-reveal">
              1st Recruit LLC
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem' }}>
            Have questions about talent hiring or careers? We are here to help.
          </Typography>
        </Container>
      </Box>

      {/* Main Contact Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#faf9f6' }}>
        <Container maxWidth="lg">
          <Card
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              border: '1px solid #e8e4db',
              boxShadow: '0 20px 45px rgba(30,25,15,0.06)',
            }}
          >
            <Grid container>
              {/* Left Column: Global Offices & Contact Info with Map Watermark */}
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  background:
                    'linear-gradient(135deg, rgba(11, 21, 40, 0.94) 0%, rgba(30, 27, 75, 0.92) 60%, rgba(6, 78, 59, 0.9) 100%), url(/images/bg/map.png) center/cover no-repeat',
                  color: '#ffffff',
                  p: { xs: 4, md: 5 },
                }}
              >
                <Chip
                  label="GET IN TOUCH"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(16, 185, 129, 0.35)',
                    color: '#34d399',
                    fontWeight: 700,
                    mb: 2,
                  }}
                />
                <Typography variant="h4" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, mb: 2 }}>
                  Have You Any Queries? Contact Us Now.
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4, lineHeight: 1.7 }}>
                  Whether you are an enterprise seeking skilled technical talent or an IT professional looking for your next career role, our recruitment advisors are ready to assist.
                </Typography>

                {/* Office 1: USA */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3.5, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      backgroundColor: '#2563eb',
                      color: '#ffffff',
                      p: 1.2,
                      borderRadius: '50%',
                      display: 'flex',
                      flexShrink: 0,
                    }}
                  >
                    <BusinessIcon sx={{ fontSize: 22 }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff' }}>
                      Headquarters - USA
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                      3 Germay Dr, Unit 4 #2031<br />Wilmington, DE 19804, United States
                    </Typography>
                  </Box>
                </Box>

                {/* Office 2: India */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3.5, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      backgroundColor: '#10b981',
                      color: '#ffffff',
                      p: 1.2,
                      borderRadius: '50%',
                      display: 'flex',
                      flexShrink: 0,
                    }}
                  >
                    <PublicIcon sx={{ fontSize: 22 }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff' }}>
                      Operations - India
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                      iTech Park, Unit No. 1016, Sector 49<br />Gurugram, Haryana 122018, India
                    </Typography>
                  </Box>
                </Box>

                {/* Phone Numbers */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3.5, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      backgroundColor: '#7c3aed',
                      color: '#ffffff',
                      p: 1.2,
                      borderRadius: '50%',
                      display: 'flex',
                      flexShrink: 0,
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: 22 }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff' }}>
                      Phone Numbers
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                      Direct:{' '}
                      <Typography
                        component="a"
                        href="tel:+1609563891"
                        sx={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700 }}
                      >
                        +1 609-563-891
                      </Typography>
                    </Typography>
                  </Box>
                </Box>

                {/* Mailing Address */}
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      backgroundColor: '#2563eb',
                      color: '#ffffff',
                      p: 1.2,
                      borderRadius: '50%',
                      display: 'flex',
                      flexShrink: 0,
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 22 }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff' }}>
                      Mailing Address
                    </Typography>
                    <Typography
                      component="a"
                      href="mailto:info@1st-recruit.com"
                      variant="body2"
                      sx={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}
                    >
                      info@1st-recruit.com
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Right Column: Interactive Form */}
              <Grid item xs={12} md={7} sx={{ p: { xs: 4, md: 5 }, backgroundColor: '#ffffff' }}>
                <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#0f172a', mb: 1 }}>
                  Send Us a Direct Message
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 3.5 }}>
                  Complete this form and our recruitment team will get back to you within 24 hours.
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        type="email"
                        label="Corporate Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        type="tel"
                        label="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        label="Purpose of Inquiry"
                        value={formData.inquiryReason}
                        onChange={(e) => setFormData({ ...formData, inquiryReason: e.target.value })}
                        size="small"
                      >
                        <MenuItem value="Hiring Talent">We Want To Hire Talent</MenuItem>
                        <MenuItem value="Staff Augmentation">Staff Augmentation</MenuItem>
                        <MenuItem value="Flexible Staffing">Flexible Staffing</MenuItem>
                        <MenuItem value="H1-B Visa Sponsorship">H1-B Visa Sponsorship</MenuItem>
                        <MenuItem value="H1-B Visa Transfer">H1-B Visa Transfer</MenuItem>
                        <MenuItem value="Manpower Services">Manpower Services</MenuItem>
                        <MenuItem value="Legal Services">Legal Services</MenuItem>
                        <MenuItem value="Consumer Products">Consumer Products &amp; Services</MenuItem>
                        <MenuItem value="Business Services">Business Services</MenuItem>
                        <MenuItem value="Career Opportunities">I Am Looking For a Job</MenuItem>
                        <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Company / Organization Name (If Applicable)"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={4}
                        label="Your Message / Staffing Requirements"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MagneticButton strength={0.25} sx={{ width: '100%' }}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{
                            background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                            py: 1.4,
                            fontWeight: 700,
                            fontSize: '1rem',
                          }}
                        >
                          Send Message
                        </Button>
                      </MagneticButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* Google Map Section */}
      <Box sx={{ py: 6, backgroundColor: '#f3efe6', borderTop: '1px solid #e8e4db' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Chip
              label="OUR LOCATION"
              size="small"
              sx={{
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                color: '#7c3aed',
                fontWeight: 700,
                mb: 1,
              }}
            />
            <Typography variant="h4" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#182230' }}>
              Visit Our United States Headquarters
            </Typography>
            <Typography variant="body2" sx={{ color: '#5a687c' }}>
              3 Germay Dr, Unit 4 #2031 Wilmington, DE 19804
            </Typography>
          </Box>

          <Card sx={{ borderRadius: 4, overflow: 'hidden', height: 380, border: '1px solid #e8e4db', boxShadow: '0 8px 25px rgba(30,25,15,0.04)' }}>
            <iframe
              title="1st Recruit LLC Wilmington Office"
              src="https://maps.google.com/maps?q=3%20Germay%20Dr%2C%20Unit%204%20%232031%20Wilmington%2C%20DE%2019804&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </Card>
        </Container>
      </Box>

      {/* Floating Notification Toast */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%', borderRadius: 3, boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
