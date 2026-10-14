import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import { LOCATION_OPTIONS, JOB_TYPE_BUTTONS } from '../data/jobs';

export default function JobFilterSidebar({
  searchQuery,
  onSearchChange,
  locationFilter,
  onLocationChange,
  jobTypeFilter,
  onJobTypeChange,
  onResetFilters,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        p: { xs: 2.5, md: 3 },
        backgroundColor: '#ffffff',
        border: '1px solid #e8e4db',
        borderRadius: 4,
        boxShadow: '0 8px 25px rgba(30,25,15,0.04)',
        position: { lg: 'sticky' },
        top: 100,
      }}
    >
      <CardContent sx={{ p: '0 !important' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TuneIcon sx={{ color: '#2563eb' }} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#182230' }}>
              Filter Jobs
            </Typography>
          </Box>
          <Button
            size="small"
            startIcon={<RestartAltIcon />}
            onClick={onResetFilters}
            sx={{
              color: '#64748b',
              fontSize: '0.8rem',
              p: 0.5,
              '&:hover': { color: '#2563eb', backgroundColor: 'transparent' },
            }}
          >
            Reset
          </Button>
        </Box>

        <Divider sx={{ mb: 2.5, borderColor: '#e8e4db' }} />

        {/* Keyword Search */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontWeight: 700,
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              mb: 1,
            }}
          >
            Keyword
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Job title, skill, or keyword..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: '#f8fafc',
                '&:hover fieldset': {
                  borderColor: '#2563eb',
                },
              },
            }}
          />
        </Box>

        {/* Location Dropdown */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontWeight: 700,
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              mb: 1,
            }}
          >
            Location
          </Typography>
          <FormControl fullWidth size="small">
            <Select
              value={locationFilter}
              onChange={(e) => onLocationChange(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <LocationOnIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
                </InputAdornment>
              }
              sx={{
                borderRadius: 2,
                backgroundColor: '#f8fafc',
              }}
            >
              {LOCATION_OPTIONS.map((loc) => (
                <MenuItem key={loc.value} value={loc.value}>
                  {loc.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Job Type Pill Buttons */}
        <Box sx={{ mb: 3.5 }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontWeight: 700,
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              mb: 1.5,
            }}
          >
            Job Type
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {JOB_TYPE_BUTTONS.map((item) => {
              const isActive = jobTypeFilter === item.type;
              return (
                <Chip
                  key={item.type}
                  label={item.label}
                  clickable
                  onClick={() => onJobTypeChange(item.type)}
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    py: 2,
                    px: 0.5,
                    borderRadius: '20px',
                    transition: 'all 0.2s ease',
                    ...(isActive
                      ? {
                          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                          color: '#ffffff',
                          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #1d4ed8 0%, #6d28d9 100%)',
                          },
                        }
                      : {
                          backgroundColor: '#f1f5f9',
                          color: '#334155',
                          border: '1px solid #cbd5e1',
                          '&:hover': {
                            backgroundColor: '#e2e8f0',
                          },
                        }),
                  }}
                />
              );
            })}
          </Box>
        </Box>

        {/* Apply / Status Notification */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            pt: 2,
            borderTop: '1px solid #e2e8f0',
            color: '#64748b',
            fontSize: '0.8rem',
          }}
        >
          <InfoOutlinedIcon sx={{ fontSize: 18, color: '#2563eb' }} />
          <span>Updated Daily &bull; Direct Enterprise Placements</span>
        </Box>
      </CardContent>
    </Card>
  );
}
