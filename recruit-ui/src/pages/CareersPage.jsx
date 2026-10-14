import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import CareersHeader from '../components/CareersHeader';
import JobFilterSidebar from '../components/JobFilterSidebar';
import JobCard from '../components/JobCard';
import ApplyModal from '../components/ApplyModal';
import WhyWorkSection from '../components/WhyWorkSection';
import GeneralApplicationSection from '../components/GeneralApplicationSection';
import { INITIAL_JOBS } from '../data/jobs';

export default function CareersPage() {
  const [jobs] = useState(INITIAL_JOBS);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [jobTypeFilter, setJobTypeFilter] = useState('all');

  // Modal State
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Notification Toast State
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  // Filter Jobs Logic matching careers.php
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Keyword Match (Title, terms, skills)
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.searchTerms.toLowerCase().includes(q) ||
        job.skills.some((s) => s.toLowerCase().includes(q));

      // Location Match
      const matchesLocation =
        locationFilter === 'all' || job.location === locationFilter;

      // Job Type Match
      const matchesType =
        jobTypeFilter === 'all' || job.jobType === jobTypeFilter;

      return matchesQuery && matchesLocation && matchesType;
    });
  }, [jobs, searchQuery, locationFilter, jobTypeFilter]);

  // Handlers
  const handleOpenApply = (job) => {
    setSelectedJob(job);
    setApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setApplyModalOpen(false);
    setSelectedJob(null);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setLocationFilter('all');
    setJobTypeFilter('all');
  };

  const handleApplySuccess = (applicantName, jobTitle) => {
    setSnackbar({
      open: true,
      message: `Thank you, ${applicantName}! Your application for "${jobTitle}" has been submitted successfully.`,
      severity: 'success',
    });
  };

  const handleGeneralSubmitSuccess = (name) => {
    setSnackbar({
      open: true,
      message: `Thank you, ${name}! Your resume has been added to our talent network. Our recruiting team will contact you.`,
      severity: 'success',
    });
  };

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', backgroundColor: '#faf9f6' }}>
      {/* 1. Header Banner */}
      <CareersHeader totalJobsCount={jobs.length} />

      {/* 2. Main Job Listings with Sidebar */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }} id="jobListings">
        <Grid container spacing={3.5}>
          {/* Left Column: Filter Sidebar */}
          <Grid item xs={12} md={4} lg={3.5}>
            <JobFilterSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              locationFilter={locationFilter}
              onLocationChange={setLocationFilter}
              jobTypeFilter={jobTypeFilter}
              onJobTypeChange={setJobTypeFilter}
              totalJobs={jobs.length}
              filteredCount={filteredJobs.length}
              onResetFilters={handleResetFilters}
            />
          </Grid>

          {/* Right Column: Job Cards Grid */}
          <Grid item xs={12} md={8} lg={8.5}>
            {/* Header info bar */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
                pb: 1.5,
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                Showing{' '}
                <Box component="strong" sx={{ color: '#0f172a' }}>
                  {filteredJobs.length}
                </Box>{' '}
                open roles
              </Typography>

              {(searchQuery || locationFilter !== 'all' || jobTypeFilter !== 'all') && (
                <Button
                  size="small"
                  startIcon={<RestartAltIcon />}
                  onClick={handleResetFilters}
                  sx={{ color: '#64748b', fontSize: '0.8rem' }}
                >
                  Clear Filters
                </Button>
              )}
            </Box>

            {/* List of Job Cards */}
            {filteredJobs.length > 0 ? (
              <Grid container spacing={2.5}>
                {filteredJobs.map((job) => (
                  <Grid item xs={12} key={job.id}>
                    <JobCard job={job} onApply={handleOpenApply} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              /* No Results State */
              <Box
                sx={{
                  textAlign: 'center',
                  py: 8,
                  px: 3,
                  backgroundColor: '#ffffff',
                  borderRadius: 4,
                  border: '1px dashed #cbd5e1',
                }}
              >
                <WorkOffIcon sx={{ fontSize: 48, color: '#94a3b8', mb: 2 }} />
                <Typography variant="h6" sx={{ color: '#0f172a', fontWeight: 700, mb: 1 }}>
                  No open positions found matching your filters
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 3, maxWidth: 450, mx: 'auto' }}>
                  Try adjusting your search criteria, selecting a different location, or reset the filters to see all available roles.
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<RestartAltIcon />}
                  onClick={handleResetFilters}
                >
                  Reset All Filters
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* 3. Why Work With Us Section */}
      <WhyWorkSection />

      {/* 4. General Application / Resume Drop Section */}
      <GeneralApplicationSection onGeneralSubmit={handleGeneralSubmitSuccess} />

      {/* Modal Application Dialog */}
      <ApplyModal
        open={applyModalOpen}
        job={selectedJob}
        onClose={handleCloseApply}
        onSubmitSuccess={handleApplySuccess}
      />

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
