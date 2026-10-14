import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Grid,
  Card,
  Chip,
  Button,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GavelIcon from '@mui/icons-material/Gavel';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShieldIcon from '@mui/icons-material/Shield';

import MagneticButton from '../components/MagneticButton';

export default function ServicesPage() {
  const servicesList = [
    {
      id: 'staff-augmentation',
      num: '01. Technical Talent',
      title: 'Staff Augmentation',
      image: '/images/staff_augmentation.jpg',
      desc: 'Staff augmentation provides skilled professionals on demand, helping businesses scale quickly and fill critical talent gaps efficiently.',
      color: '#2563eb',
      icon: <EngineeringIcon sx={{ fontSize: 26 }} />,
      points: [
        'On-demand software engineers, data scientists, and cloud architects',
        'Seamless integration into existing agile sprint workflows',
        'Reduced ramp-up overhead with pre-vetted domain experts',
      ],
      queryParam: 'Staff Augmentation',
    },
    {
      id: 'manpower',
      num: '02. Operational Support',
      title: 'Manpower Services',
      image: '/images/manpower.jpg',
      desc: 'Reliable Manpower Services providing skilled, trained, and industry-ready talent to support your business operations.',
      color: '#10b981',
      icon: <Diversity3Icon sx={{ fontSize: 26 }} />,
      points: [
        'Thoroughly vetted, background-verified personnel',
        'Full compliance with local, state, and federal employment laws',
        'Continuous operational supervision and quality checks',
      ],
      queryParam: 'Manpower Services',
    },
    {
      id: 'flexible-staffing',
      num: '03. Agile Workforce',
      title: 'Flexible Staffing',
      image: '/images/flexible_staffing.jpg',
      desc: 'Flexible Staffing tailored to your workforce needs, ensuring agility, efficiency, and the right talent at the right time.',
      color: '#7c3aed',
      icon: <DynamicFeedIcon sx={{ fontSize: 26 }} />,
      points: [
        'Contract, Contract-to-Hire, and Direct Hire models',
        'Fast scalability for fluctuating project deadlines',
        'Streamlined vendor management (VMS) and MSP compatibility',
      ],
      queryParam: 'Flexible Staffing',
    },
    {
      id: 'visa-sponsorship',
      num: '04. Global Mobility',
      title: 'H1-B Visa Sponsorship',
      image: '/images/visa_services.jpg',
      desc: 'H1-B Visa Sponsorship providing qualified global talent with compliant, reliable, and streamlined immigration support for U.S. employers.',
      color: '#2563eb',
      icon: <CardMembershipIcon sx={{ fontSize: 26 }} />,
      points: [
        'End-to-end USCIS and Department of Labor compliance',
        'Specialized technical talent placement in high-demand STEM fields',
        'Complete legal petition preparation by certified immigration counsels',
      ],
      queryParam: 'H1-B Visa Sponsorship',
    },
    {
      id: 'visa-transfer',
      num: '05. Smooth Transitions',
      title: 'H1-B Visa Transfer',
      image: '/images/visa_services.jpg',
      desc: 'H1-B Visa Transfer services ensuring smooth, compliant transitions for professionals seeking new opportunities in the U.S.',
      color: '#10b981',
      icon: <FlightTakeoffIcon sx={{ fontSize: 26 }} />,
      points: [
        'Rapid LCA filing and I-129 petition processing',
        'Seamless transition with zero disruption to active employment',
        'Transparent legal advisory for both hiring corporations and candidates',
      ],
      queryParam: 'H1-B Visa Transfer',
    },
    {
      id: 'legal-services',
      num: '06. Compliance',
      title: 'Legal Services',
      image: '/images/career_banner.jpg',
      desc: 'Comprehensive Legal Services offering expert guidance, compliance support, and reliable solutions for businesses and individuals.',
      color: '#7c3aed',
      icon: <GavelIcon sx={{ fontSize: 26 }} />,
      points: [
        'Employment agreements, non-disclosure (NDA) and vendor contracts',
        'State and federal regulatory employment compliance audits',
        'Comprehensive risk mitigation strategies for corporate hiring',
      ],
      queryParam: 'Legal Services',
    },
    {
      id: 'consumer-products',
      num: '07. Consumer Industry',
      title: 'Consumer Products & Services',
      image: '/images/consumer_products.jpg',
      desc: 'We deliver Consumer Products & Services focused on quality, customer satisfaction, and meaningful everyday experiences.',
      color: '#2563eb',
      icon: <Inventory2Icon sx={{ fontSize: 26 }} />,
      points: [
        'Sourcing talent in supply chain, retail merchandising & e-commerce',
        'Customer experience management and support team placement',
        'Quality assurance and product lifecycle management personnel',
      ],
      queryParam: 'Consumer Products',
    },
    {
      id: 'business-services',
      num: '08. Strategic Growth',
      title: 'Business Services',
      image: '/images/business_services.jpg',
      desc: 'Business Services designed to streamline operations, optimize performance, and support sustainable growth across all sectors.',
      color: '#10b981',
      icon: <TrendingUpIcon sx={{ fontSize: 26 }} />,
      points: [
        'Workforce planning, analytics, and organizational design',
        'Executive search and strategic advisory for scale-ups',
        'Transparent SLA performance metrics and continuous support',
      ],
      queryParam: 'Business Services',
    },
  ];

  const securityBadges = [
    {
      image: '/images/foreign_control.png',
      title: 'Foreign & Regulatory Control',
      subtitle: 'Immigration & Export Compliance',
      desc: 'Adherence to U.S. federal guidelines, USCIS compliance protocols, and certified talent mobility framework.',
      color: '#2563eb',
    },
    {
      image: '/images/foreign_guard.png',
      title: 'Facility & Asset Protection',
      subtitle: 'Secure Deployment Protocols',
      desc: 'Rigorous vetting, background clearances, and physical asset protection standards for sensitive enterprise sites.',
      color: '#10b981',
    },
    {
      image: '/images/services/security_gunmen.png',
      title: 'On-Premises Protection Support',
      subtitle: 'Trained Security Personnel',
      desc: 'Specialized enterprise security operations, vetted personnel, and round-the-clock protective monitoring.',
      color: '#7c3aed',
    },
  ];

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', backgroundColor: '#faf9f6' }}>
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
            <Typography sx={{ color: '#34d399', fontWeight: 600 }}>Services</Typography>
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
            Our Staffing &amp;{' '}
            <Box component="span" className="text-mask-reveal">
              Recruiting Services
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem' }}>
            Delivering reliable talent and strategic workforce solutions nationwide.
          </Typography>
        </Container>
      </Box>

      {/* Services Grid Section with Stagger Animation (Effect #3) and Off-White Theme */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#faf9f6' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="OUR SOLUTIONS"
              size="small"
              sx={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#059669',
                fontWeight: 700,
                mb: 1.5,
              }}
            />
            <Typography variant="h3" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#182230', mb: 1.5 }}>
              Comprehensive Workforce Solutions
            </Typography>
            <Typography variant="body1" sx={{ color: '#5a687c', maxWidth: 700, mx: 'auto' }}>
              1st-Recruit delivers top-tier recruiting services, helping companies of all sizes identify, attract, and hire the best candidates with speed and compliance.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {servicesList.map((svc, idx) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                key={svc.id}
                id={svc.id}
                className={`stagger-item stagger-delay-${(idx % 4) + 1}`}
              >
                <Card
                  className="hover-lift-card"
                  sx={{
                    borderRadius: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e8e4db',
                    borderTop: `4px solid ${svc.color} !important`,
                    boxShadow: '0 8px 25px rgba(30, 25, 15, 0.04)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Service Image with Inner-Zoom Effect and Full Photo Aspect Ratio */}
                  <Box
                    className="img-zoom-container"
                    sx={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16 / 10',
                      minHeight: { xs: 220, sm: 260, md: 280 },
                      maxHeight: { md: 340 },
                      overflow: 'hidden',
                      backgroundColor: '#f1f5f9',
                    }}
                  >
                    <Box
                      component="img"
                      src={svc.image}
                      alt={svc.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        display: 'block',
                      }}
                    />

                    {/* Gradient Overlay for visual depth */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(to top, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0) 50%, rgba(15, 23, 42, 0.2) 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Glassmorphic Category Chip */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        zIndex: 2,
                        backdropFilter: 'blur(8px)',
                        backgroundColor: 'rgba(11, 21, 40, 0.78)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.22)',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.8,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                      }}
                    >
                      <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: svc.color }} />
                      {svc.num}
                    </Box>
                  </Box>

                  {/* Card Content Area */}
                  <Box
                    sx={{
                      p: { xs: 3, md: 3.5 },
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                    }}
                  >
                    {/* Header with Icon Badge + Title */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          backgroundColor: `${svc.color}15`,
                          color: svc.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: `1px solid ${svc.color}35`,
                          boxShadow: `0 4px 12px ${svc.color}18`,
                        }}
                      >
                        {svc.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: '"Montserrat", sans-serif',
                            fontWeight: 800,
                            color: '#182230',
                            fontSize: { xs: '1.25rem', md: '1.38rem' },
                            lineHeight: 1.3,
                          }}
                        >
                          {svc.title}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#475569',
                        lineHeight: 1.7,
                        fontSize: '0.94rem',
                        mb: 2.5,
                      }}
                    >
                      {svc.desc}
                    </Typography>

                    {/* Feature Highlights */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2, mb: 3.5, flexGrow: 1 }}>
                      {svc.points.map((pt, i) => (
                        <Box key={i} sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                          <CheckCircleOutlineIcon sx={{ color: svc.color, fontSize: 19, mt: 0.25, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: '#334155', fontWeight: 500, fontSize: '0.9rem', lineHeight: 1.5 }}>
                            {pt}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* CTA Action */}
                    <Box sx={{ pt: 2.5, borderTop: '1px solid #f3efe6', mt: 'auto' }}>
                      <MagneticButton strength={0.25}>
                        <Button
                          component={Link}
                          to={`/contact-us?service=${encodeURIComponent(svc.queryParam)}`}
                          variant="contained"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            backgroundColor: svc.color,
                            color: '#ffffff',
                            py: 1.15,
                            px: 2.8,
                            borderRadius: '12px',
                            fontWeight: 600,
                            boxShadow: `0 4px 14px ${svc.color}35`,
                            '&:hover': {
                              backgroundColor: svc.color,
                              filter: 'brightness(0.92)',
                              boxShadow: `0 8px 22px ${svc.color}45`,
                            },
                          }}
                        >
                          Inquire About {svc.title}
                        </Button>
                      </MagneticButton>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enterprise Protection, Security & Compliance Showcase */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#f3efe6', borderTop: '1px solid #e8e4db' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="ENTERPRISE STANDARDS"
              size="small"
              sx={{
                backgroundColor: 'rgba(37, 99, 235, 0.12)',
                color: '#2563eb',
                fontWeight: 700,
                mb: 1.5,
              }}
            />
            <Typography variant="h3" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#182230', mb: 1.5 }}>
              Security, Verification &amp; Compliance Standards
            </Typography>
            <Typography variant="body1" sx={{ color: '#5a687c', maxWidth: 680, mx: 'auto' }}>
              All client placements, personnel integrations, and corporate facilities adhere to strict identity verification, physical security, and legal mobility protocols.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {securityBadges.map((badge, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx} className={`stagger-item stagger-delay-${idx + 1}`}>
                <Card
                  className="hover-lift-card"
                  sx={{
                    p: 3.5,
                    borderRadius: 4,
                    height: '100%',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e8e4db',
                    borderTop: `4px solid ${badge.color} !important`,
                    textAlign: 'center',
                    boxShadow: '0 8px 25px rgba(30, 25, 15, 0.04)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mb: 2.5,
                      height: 90,
                    }}
                  >
                    <Box
                      component="img"
                      src={badge.image}
                      alt={badge.title}
                      sx={{
                        maxHeight: 80,
                        maxWidth: 160,
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.08))',
                      }}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ color: badge.color, fontWeight: 700, textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                    {badge.subtitle}
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#182230', mb: 1.5 }}>
                    {badge.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>
                    {badge.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
