import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Chip,
  Grid,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ApplyModal({ open, onClose, selectedJob, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverNote: '',
  });
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
    }
  }, [open]);

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
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSubmitSuccess) {
        onSubmitSuccess(selectedJob?.title || 'Position');
      }
      setTimeout(() => {
        onClose();
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          linkedin: '',
          coverNote: '',
        });
        setFileName('');
      }, 1500);
    }, 800);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: { xs: 1, sm: 2 },
        },
      }}
    >
      <DialogTitle sx={{ pb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Chip
            label="Direct Application"
            size="small"
            sx={{
              backgroundColor: '#ecfdf5',
              color: '#059669',
              border: '1px solid #a7f3d0',
              fontWeight: 700,
              fontSize: '0.75rem',
              mb: 1,
            }}
          />
          <Typography variant="h5" component="div" sx={{ fontWeight: 700, color: '#0b1528' }}>
            Apply for Position
          </Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: '#64748b' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ borderColor: '#f1f5f9' }}>
        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <CheckCircleIcon sx={{ fontSize: 60, color: '#10b981', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0b1528', mb: 1 }}>
              Application Received!
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
              Thank you for applying for <strong>{selectedJob?.title}</strong>. A recruiter from 1st Recruit LLC will review your profile shortly.
            </Typography>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} id="applyForm">
            <Grid container spacing={2.2}>
              {/* Job Position (ReadOnly) */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  label="Target Position"
                  value={selectedJob?.title || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ backgroundColor: '#f8fafc' }}
                />
              </Grid>

              {/* Full Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  size="small"
                  label="Your Full Name"
                  name="fullName"
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  size="small"
                  label="Email Address"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>

              {/* Phone */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type="tel"
                  size="small"
                  label="Phone Number"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>

              {/* LinkedIn */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="LinkedIn / Portfolio"
                  name="linkedin"
                  placeholder="linkedin.com/in/username"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </Grid>

              {/* File Upload Resume */}
              <Grid item xs={12}>
                <Button
                  component="label"
                  variant="outlined"
                  fullWidth
                  startIcon={<CloudUploadIcon />}
                  sx={{
                    py: 1.2,
                    borderStyle: 'dashed',
                    borderColor: '#cbd5e1',
                    color: '#475569',
                    justifyContent: 'center',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#2563eb',
                      backgroundColor: 'rgba(37,99,235,0.04)',
                    },
                  }}
                >
                  {fileName ? `Attached: ${fileName}` : 'Upload Resume / CV (PDF, DOCX)'}
                  <input type="file" hidden accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                </Button>
              </Grid>

              {/* Cover Note */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Cover Note / Key Qualifications"
                  name="coverNote"
                  placeholder="Highlight your years of experience, relevant stack, and visa status..."
                  value={formData.coverNote}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        )}
      </DialogContent>

      {!submitted && (
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={onClose} sx={{ color: '#64748b' }}>
            Cancel
          </Button>
          <Button
            type="submit"
            form="applyForm"
            variant="contained"
            disabled={loading}
            endIcon={<SendIcon />}
            sx={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
              color: '#ffffff',
              px: 3,
            }}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
