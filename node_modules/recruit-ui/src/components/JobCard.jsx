import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import MagneticButton from './MagneticButton';

export default function JobCard({ job, onApply }) {
  return (
    <Card
      elevation={0}
      className="hover-lift-card"
      sx={{
        backgroundColor: '#ffffff',
        border: '1px solid #e8e4db',
        borderLeft: `4px solid ${job.accentColor || '#2563eb'}`,
        borderRadius: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 2.5, md: 3 },
        boxShadow: '0 8px 25px rgba(30,25,15,0.04)',
      }}
    >
      <CardContent sx={{ p: '0 !important', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Top Header: Title, Client, Badge */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5, gap: 1 }}>
          <Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontWeight: 700,
                color: '#182230',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.3,
                mb: 0.5,
              }}
            >
              {job.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#5a687c', fontSize: '0.85rem' }}>
              <BusinessIcon sx={{ fontSize: 16, color: '#94a3b8' }} />
              <span>
                {job.client} &bull; {job.locationLabel}
              </span>
            </Box>
          </Box>

          <Chip
            label={job.badgeType}
            size="small"
            sx={{
              backgroundColor: job.badgeBg || '#eff6ff',
              color: job.badgeColor || '#2563eb',
              border: `1px solid ${job.badgeBorder || '#bfdbfe'}`,
              fontWeight: 700,
              fontSize: '0.75rem',
            }}
          />
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: '#475569',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            my: 2,
            flexGrow: 1,
          }}
        >
          {job.description}
        </Typography>

        {/* Skill Tags */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2.5 }}>
          {job.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              sx={{
                backgroundColor: '#f3efe6',
                color: '#182230',
                border: '1px solid #e8e4db',
                fontSize: '0.78rem',
                fontWeight: 500,
              }}
            />
          ))}

          {job.visaEligible && (
            <Chip
              icon={<CheckCircleOutlineIcon sx={{ fontSize: '1rem !important', color: '#059669 !important' }} />}
              label="H1-B Transfer OK"
              size="small"
              sx={{
                backgroundColor: '#ecfdf5',
                color: '#059669',
                border: '1px solid #a7f3d0',
                fontSize: '0.78rem',
                fontWeight: 600,
              }}
            />
          )}
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Bottom Strip: Salary & Apply Button */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              color: job.accentColor || '#2563eb',
              fontSize: '1rem',
            }}
          >
            {job.salary}
          </Typography>

          <MagneticButton strength={0.25}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={() => onApply(job)}
              sx={{
                background:
                  job.accentColor === '#10b981'
                    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                    : job.accentColor === '#7c3aed'
                    ? 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)'
                    : 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                color: '#ffffff',
                fontSize: '0.88rem',
                py: 0.8,
                px: 2,
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              Apply Now
            </Button>
          </MagneticButton>
        </Box>
      </CardContent>
    </Card>
  );
}
