import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Grid,
  Card,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PsychologyIcon from '@mui/icons-material/Psychology';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import AnimatedCounter from '../components/AnimatedCounter';

export default function AboutPage() {
  const [expandedFaq, setExpandedFaq] = useState('panel1');

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  const pillars = [
    {
      title: 'Goal Setting & Accountability',
      desc: 'Clear milestones, rapid pipeline turnaround, and complete hiring accountability for every requisition.',
      icon: <TrackChangesIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
      borderColor: '#2563eb',
    },
    {
      title: 'Mindset & Confidence',
      desc: 'Empowering candidates with technical interview preparation, soft skill coaching, and cultural alignment.',
      icon: <PsychologyIcon sx={{ fontSize: 32, color: '#10b981' }} />,
      borderColor: '#10b981',
    },
    {
      title: 'Strategic Business Planning',
      desc: 'Workforce forecasting that anticipates scaling needs before high-stakes project deadlines occur.',
      icon: <QueryStatsIcon sx={{ fontSize: 32, color: '#7c3aed' }} />,
      borderColor: '#7c3aed',
    },
    {
      title: 'Creative & Award-Winning',
      desc: 'Innovative talent sourcing models recognized by leading Fortune 500 corporate partners nationwide.',
      icon: <WorkspacePremiumIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
      borderColor: '#2563eb',
    },
  ];

  const faqs = [
    {
      id: 'panel1',
      question: 'What Makes 1st Recruit LLC Different From Other Agencies?',
      answer:
        '1st-Recruit provides a personalized, precision matching methodology backed by multi-tier technical vetting, compliance assurance (E-Verify, ISO 9001:2015, DUNS), and dedicated account managers who understand your technical stack and company culture.',
    },
    {
      id: 'panel2',
      question: 'How Are Candidates Screened And Vetted?',
      answer:
        'Our process includes initial skills assessment, in-depth technical interviews conducted by senior domain engineers, reference checks, identity validation, and immigration/work authorization checks before any profile is submitted to a client.',
    },
    {
      id: 'panel3',
      question: 'What Results Can I Expect From Partnering with 1st Recruit?',
      answer:
        'Clients experience significantly shorter hiring cycles (often candidate submissions within 24-48 hours), higher retention rates (>98.3%), transparent pricing models, and seamless onboarding support.',
    },
    {
      id: 'panel4',
      question: 'Do You Provide H1-B Visa Sponsorship and Transfer Support?',
      answer:
        'Yes. We specialize in compliant H1-B visa sponsorships and smooth visa transfers with complete legal documentation and USCIS guideline adherence for qualified technical professionals.',
    },
  ];

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* Subpage Banner Header with Text Mask Reveal (Effect #2) */}
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
            <Typography sx={{ color: '#34d399', fontWeight: 600 }}>About Us</Typography>
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
            About{' '}
            <Box component="span" className="text-mask-reveal">
              1st Recruit LLC
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem' }}>
            Connecting Talent. Creating Success.
          </Typography>
        </Container>
      </Box>

      {/* Main About Section with Parallax Float */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  className="img-zoom-container"
                  sx={{
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/about_team.jpg"
                    alt="1st Recruit Leadership"
                    sx={{
                      width: '100%',
                      maxHeight: 480,
                      objectFit: 'cover',
                      borderRadius: 4,
                    }}
                  />
                </Box>
                <Box
                  className="parallax-float-slow"
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    backgroundColor: '#ffffff',
                    p: 2.5,
                    borderRadius: 3,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    borderBottom: '4px solid #10b981',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    maxWidth: 250,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      borderRadius: '50%',
                      p: 1.2,
                      display: 'flex',
                    }}
                  >
                    <EmojiEventsIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0f172a' }}>
                      Award Winning
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748b' }}>
                      Top Tier Staffing Partner
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Chip
                label="ABOUT US"
                size="small"
                sx={{
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  color: '#7c3aed',
                  fontWeight: 700,
                  mb: 2,
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 800,
                  color: '#0f172a',
                  lineHeight: 1.25,
                  mb: 2.5,
                }}
              >
                Expert Guidance And{' '}
                <Box component="span" className="text-mask-reveal">
                  Personalized Staffing
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, mb: 2.5 }}>
                1st-Recruit is a top provider of recruiting services. We work with companies of all sizes to find the best candidates for their open positions.
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.7, mb: 4 }}>
                With deep expertise in global talent sourcing, executive recruiting, staff augmentation, and immigration compliance (H1-B visa sponsorship &amp; transfer), we provide an end-to-end recruitment ecosystem tailored to enterprise business acceleration.
              </Typography>

              {/* Stats Row with Animated Number Counter */}
              <Box sx={{ borderTop: '1px solid #e8e4db', borderBottom: '1px solid #e8e4db', py: 3, my: 2 }}>
                <Grid container spacing={2} textAlign="center">
                  <Grid item xs={4} className="stagger-item stagger-delay-1">
                    <AnimatedCounter
                      target={30}
                      suffix="+"
                      variant="h4"
                      sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#2563eb', display: 'block' }}
                    />
                    <Typography variant="caption" sx={{ color: '#5a687c', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>
                      Years Industry Exp.
                    </Typography>
                  </Grid>
                  <Grid item xs={4} className="stagger-item stagger-delay-2" sx={{ borderLeft: '1px solid #e8e4db', borderRight: '1px solid #e8e4db' }}>
                    <AnimatedCounter
                      target={5200}
                      suffix="+"
                      variant="h4"
                      sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#10b981', display: 'block' }}
                    />
                    <Typography variant="caption" sx={{ color: '#5a687c', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>
                      Five Star Reviews
                    </Typography>
                  </Grid>
                  <Grid item xs={4} className="stagger-item stagger-delay-3">
                    <AnimatedCounter
                      target={100}
                      suffix="+"
                      variant="h4"
                      sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#7c3aed', display: 'block' }}
                    />
                    <Typography variant="caption" sx={{ color: '#5a687c', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>
                      Clients Nationwide
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Strategic Core Pillars with Stagger Animation (Effect #3) */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#f3efe6', borderTop: '1px solid #e8e4db', borderBottom: '1px solid #e8e4db' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="OUR CORE PILLARS"
              size="small"
              sx={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#059669',
                fontWeight: 700,
                mb: 1.5,
              }}
            />
            <Typography variant="h3" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#182230', mb: 1.5 }}>
              Building Long-Term Recruitment Success
            </Typography>
            <Typography variant="body1" sx={{ color: '#5a687c', maxWidth: 600, mx: 'auto' }}>
              Our core values guide every candidate engagement and enterprise corporate partnership.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {pillars.map((p, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx} className={`stagger-item stagger-delay-${idx + 1}`}>
                <Card
                  className="hover-lift-card"
                  sx={{
                    p: 3.5,
                    borderRadius: 4,
                    height: '100%',
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e8e4db',
                    borderTop: `4px solid ${p.borderColor} !important`,
                    boxShadow: '0 8px 25px rgba(30, 25, 15, 0.04)',
                  }}
                >
                  <Box sx={{ mb: 2 }}>{p.icon}</Box>
                  <Typography variant="h6" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#182230', mb: 1.5 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#5a687c', lineHeight: 1.6 }}>
                    {p.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, #0b1528 0%, #1e1b4b 60%, #064e3b 100%)',
          color: '#ffffff',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="WHY WE EXIST"
              size="small"
              sx={{
                backgroundColor: 'rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                fontWeight: 700,
                mb: 1.5,
              }}
            />
            <Typography variant="h3" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, mb: 1.5 }}>
              Our Mission &amp;{' '}
              <Box component="span" className="text-mask-reveal">
                Vision
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 620, mx: 'auto' }}>
              The purpose that drives every placement and the future we are building for talent and enterprises alike.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Mission Card */}
            <Grid item xs={12} md={6} className="stagger-item stagger-delay-1">
              <Box
                className="hover-lift-card"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderTop: '4px solid #38bdf8',
                  borderRadius: 4,
                  p: { xs: 3.5, md: 5 },
                  height: '100%',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      backgroundColor: 'rgba(56, 189, 248, 0.2)',
                      color: '#38bdf8',
                      p: 1.5,
                      borderRadius: 3,
                      display: 'flex',
                    }}
                  >
                    <AdsClickIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: 'rgba(255,255,255,0.2)' }}>
                    01
                  </Typography>
                </Box>
                <Chip label="OUR MISSION" size="small" sx={{ backgroundColor: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', mb: 2, fontWeight: 700 }} />
                <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, mb: 2 }}>
                  Empowering Growth Through the Right Talent
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, mb: 3 }}>
                  To provide world-class staffing, recruiting, and technical talent acquisition solutions that empower organizations to innovate and scale with precision and speed, while providing candidates with career opportunities that change lives.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                  {[
                    'Precision talent matching for every requisition',
                    'Speed and scale for enterprise business growth',
                    'Life-changing career trajectories for candidates',
                  ].map((pt, i) => (
                    <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      <CheckCircleOutlineIcon sx={{ color: '#38bdf8', fontSize: 18 }} />
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                        {pt}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Vision Card */}
            <Grid item xs={12} md={6} className="stagger-item stagger-delay-2">
              <Box
                className="hover-lift-card"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(52, 211, 153, 0.3)',
                  borderTop: '4px solid #34d399',
                  borderRadius: 4,
                  p: { xs: 3.5, md: 5 },
                  height: '100%',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      backgroundColor: 'rgba(52, 211, 153, 0.2)',
                      color: '#34d399',
                      p: 1.5,
                      borderRadius: 3,
                      display: 'flex',
                    }}
                  >
                    <VisibilityIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: 'rgba(255,255,255,0.2)' }}>
                    02
                  </Typography>
                </Box>
                <Chip label="OUR VISION" size="small" sx={{ backgroundColor: 'rgba(52, 211, 153, 0.2)', color: '#34d399', mb: 2, fontWeight: 700 }} />
                <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, mb: 2 }}>
                  The Most Trusted Global Recruitment Partner
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, mb: 3 }}>
                  To be the most trusted global recruitment partner, recognized for exceptional integrity, diversity, and operational excellence, bridging elite international talent with top-tier enterprise opportunities across the United States and globally.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                  {[
                    'Integrity and transparency in every corporate partnership',
                    'Diversity as an essential driver of innovation',
                    'Bridging global technical talent with U.S. opportunity',
                  ].map((pt, i) => (
                    <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                      <CheckCircleOutlineIcon sx={{ color: '#34d399', fontSize: 18 }} />
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                        {pt}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Talent Discovery Engine & Sourcing Process Showcase */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#f3efe6', borderTop: '1px solid #e8e4db', borderBottom: '1px solid #e8e4db' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                className="img-zoom-container"
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 45px rgba(30,25,15,0.08)',
                  border: '1px solid #e8e4db',
                }}
              >
                <Box
                  component="img"
                  src="/images/about_recruitment.jpg"
                  alt="1st Recruit Talent Discovery Process"
                  sx={{
                    width: '100%',
                    maxHeight: 460,
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Chip
                label="OUR TALENT ENGINE"
                size="small"
                sx={{
                  backgroundColor: 'rgba(37, 99, 235, 0.12)',
                  color: '#2563eb',
                  fontWeight: 700,
                  mb: 2,
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 800,
                  color: '#182230',
                  lineHeight: 1.25,
                  mb: 2.5,
                }}
              >
                Precision Sourcing &amp;{' '}
                <Box component="span" className="text-mask-reveal">
                  Technical Vetting
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, mb: 2.5 }}>
                Our multi-phase discovery methodology pairs deep artificial intelligence analytics with seasoned recruiter intuition to locate passive technical talent.
              </Typography>
              <Typography variant="body2" sx={{ color: '#5a687c', lineHeight: 1.7, mb: 3.5 }}>
                Every candidate is evaluated across core technical problem-solving, architectural competencies, communication clarity, and corporate cultural synergy before submission to hiring teams.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                  'Multi-tiered technical panel screening by senior domain leads',
                  'Strict employment authorization and legal visa verification',
                  'Tailored corporate onboarding assistance and continuous KPI follow-through',
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <CheckCircleOutlineIcon sx={{ color: '#10b981', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: '#334155', fontWeight: 600 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section with Smooth Accordion Animation (Effect #9) */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#faf9f6' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Chip
              label="FAQ"
              size="small"
              sx={{
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                color: '#7c3aed',
                fontWeight: 700,
                mb: 1.5,
              }}
            />
            <Typography variant="h3" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#182230', mb: 1.5 }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" sx={{ color: '#5a687c' }}>
              Answers to common questions regarding our staffing and candidate onboarding process.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((faq, idx) => (
              <Accordion
                key={faq.id}
                expanded={expandedFaq === faq.id}
                onChange={handleFaqChange(faq.id)}
                className={`stagger-item stagger-delay-${idx + 1}`}
                sx={{
                  borderRadius: '14px !important',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e8e4db',
                  boxShadow: '0 4px 15px rgba(30,25,15,0.03)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:before': { display: 'none' },
                  '& .MuiAccordionSummary-expandIconWrapper': {
                    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                  '& .MuiAccordionDetails-root': {
                    transition: 'all 0.35s ease-in-out',
                  },
                  '&.Mui-expanded': {
                    borderColor: '#2563eb',
                    boxShadow: '0 8px 24px rgba(37, 99, 235, 0.12)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#2563eb', fontSize: 26 }} />}
                  sx={{ py: 1.2, px: 3 }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#182230' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 3, px: 3 }}>
                  <Typography variant="body2" sx={{ color: '#5a687c', lineHeight: 1.8 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
