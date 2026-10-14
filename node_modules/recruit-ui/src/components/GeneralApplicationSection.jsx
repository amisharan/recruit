import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Chip,
  Alert,
  Snackbar,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MagneticButton from './MagneticButton';

export default function GeneralApplicationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    linkedin: '',
    notes: '',
  });
  const [fileName, setFileName] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      linkedin: '',
      notes: '',
    });
    setFileName('');
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f3efe6', borderTop: '1px solid #e8e4db' }}>
      <Container maxWidth="md">
        <Card
          elevation={0}
          className="hover-lift-card"
          sx={{
            p: { xs: 3, md: 5 },
            backgroundColor: '#ffffff',
            borderRadius: 4,
            border: '1px solid #e8e4db',
            borderTop: '5px solid #10b981 !important',
            boxShadow: '0 10px 30px rgba(30, 25, 15, 0.05)',
            textAlign: 'center',
          }}
        >
          <CardContent sx={{ p: '0 !important' }}>
            <Chip
              label="Don't see your exact role?"
              sx={{
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                color: '#7c3aed',
                fontWeight: 700,
                fontSize: '0.8rem',
                mb: 2,
              }}
            />

            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 800,
                color: '#182230',
                fontSize: { xs: '1.6rem', md: '2.2rem' },
                mb: 1.5,
              }}
            >
              Submit Your Resume For Future Openings
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#64748b',
                maxWidth: 680,
                mx: 'auto',
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Our recruiters match talented professionals every month. Send us your resume and we will reach out as soon as a fitting opportunity matches your profile.
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'left' }}>
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Full Name"
                    name="name"
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    label="Email Address"
                    name="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    type="tel"
                    label="Phone Number"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Primary Skill / Job Title"
                    name="role"
                    placeholder="e.g. AWS DevOps / Java Architect"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="LinkedIn Profile / Portfolio URL (Optional)"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    component="label"
                    variant="outlined"
                    fullWidth
                    startIcon={<CloudUploadIcon />}
                    sx={{
                      py: 1.5,
                      borderStyle: 'dashed',
                      borderColor: '#cbd5e1',
                      color: '#475569',
                      justifyContent: 'center',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16,185,129,0.04)',
                      },
                    }}
                  >
                    {fileName ? `Selected Resume: ${fileName}` : 'Attach Resume / CV (PDF, DOCX)'}
                    <input type="file" hidden accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Brief Summary of Experience / Visa Status"
                    name="notes"
                    placeholder="Share your years of experience, core technical stack, and eligibility..."
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sx={{ textAlign: 'center', mt: 1 }}>
                  <MagneticButton strength={0.25}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                        color: '#ffffff',
                        py: 1.5,
                        px: 5,
                        fontSize: '1rem',
                        fontWeight: 700,
                        boxShadow: '0 8px 24px rgba(124, 58, 237, 0.3)',
                      }}
                    >
                      Submit Resume to 1st Recruit
                    </Button>
                  </MagneticButton>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" variant="filled" sx={{ width: '100%' }}>
          Resume received! A recruiter from 1st Recruit LLC will review your profile and reach out.
        </Alert>
      </Snackbar>
    </Box>
  );
}
