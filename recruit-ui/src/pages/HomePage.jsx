import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Chip,
  Tabs,
  Tab,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SendIcon from '@mui/icons-material/Send';
import LaunchIcon from '@mui/icons-material/Launch';

import MagneticButton from '../components/MagneticButton';
import MarqueeText from '../components/MarqueeText';
import AnimatedCounter from '../components/AnimatedCounter';

// Staffing Advertising Cards Data
// Theme Palette: Cohesive combination of Blue (#3B82F6), Purple (#8B5CF6), and Green (#22C55E)
const staffingPromoCards = [
  {
    id: 1,
    title: 'Contingent Staffing\nSolutions',
    desc: 'On-demand temporary staffing solutions for short-term roles or projects.',
    color: '#3B82F6', // Blue
    cardBg: '#f0f7ff', // Soft pastel blue tint
    cardHoverBg: '#e0effe', // Richer light blue on hover
    lightBg: 'rgba(59, 130, 246, 0.12)',
    borderLight: 'rgba(59, 130, 246, 0.28)',
    hoverShadow: 'rgba(59, 130, 246, 0.22)',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Direct Hire Staffing\nSolutions',
    desc: 'Streamlined recruitment services to identify and place permanent employees.',
    color: '#8B5CF6', // Purple
    cardBg: '#f5f3ff', // Soft pastel purple tint
    cardHoverBg: '#ede9fe', // Richer light purple on hover
    lightBg: 'rgba(139, 92, 246, 0.12)',
    borderLight: 'rgba(139, 92, 246, 0.28)',
    hoverShadow: 'rgba(139, 92, 246, 0.22)',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <circle cx="11" cy="9" r="2.5" />
        <path d="M7.5 14.5a4 4 0 0 1 7 0" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Near-Shore Staffing\nSolutions',
    desc: 'Strategic placement of skilled professionals in nearby locations.',
    color: '#22C55E', // Green
    cardBg: '#f0fdf4', // Soft pastel green tint
    cardHoverBg: '#dcfce7', // Richer light green on hover
    lightBg: 'rgba(34, 197, 94, 0.12)',
    borderLight: 'rgba(34, 197, 94, 0.28)',
    hoverShadow: 'rgba(34, 197, 94, 0.22)',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="3.5" />
        <path d="M6 14a6 6 0 0 1 12 0" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="8" y1="20" x2="12" y2="21" />
        <line x1="16" y1="20" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Global Payroll &\nCompliance Services',
    desc: 'Simplifying payroll solutions by managing compensation, taxes, and compliance.',
    color: '#3B82F6', // Blue
    cardBg: '#f0f7ff', // Soft pastel blue tint
    cardHoverBg: '#e0effe', // Richer light blue on hover
    lightBg: 'rgba(59, 130, 246, 0.12)',
    borderLight: 'rgba(59, 130, 246, 0.28)',
    hoverShadow: 'rgba(59, 130, 246, 0.22)',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        <path d="M2 17l4 4 8-8" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Recruitment Process\nOutsourcing (RPO)',
    desc: 'Outsourced recruitment services offering end-to-end talent acquisition support.',
    color: '#8B5CF6', // Purple
    cardBg: '#f5f3ff', // Soft pastel purple tint
    cardHoverBg: '#ede9fe', // Richer light purple on hover
    lightBg: 'rgba(139, 92, 246, 0.12)',
    borderLight: 'rgba(139, 92, 246, 0.28)',
    hoverShadow: 'rgba(139, 92, 246, 0.22)',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <line x1="3.6" y1="9" x2="20.4" y2="9" />
        <line x1="3.6" y1="15" x2="20.4" y2="15" />
        <path d="M11.5 3a13 13 0 0 0 0 18" />
        <path d="M12.5 3a13 13 0 0 1 0 18" />
        <circle cx="12" cy="12" r="2" fill="#8B5CF6" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Statement of Work\n(SOW) Solutions',
    desc: 'Offering top-notch Statement of Work services to help you streamline your projects.',
    color: '#22C55E', // Green
    cardBg: '#f0fdf4', // Soft pastel green tint
    cardHoverBg: '#dcfce7', // Richer light green on hover
    lightBg: 'rgba(34, 197, 94, 0.12)',
    borderLight: 'rgba(34, 197, 94, 0.28)',
    hoverShadow: 'rgba(34, 197, 94, 0.22)',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="8" r="4" />
        <path d="M2 20a8 8 0 0 1 14 0" />
        <circle cx="18" cy="15" r="4" />
        <line x1="18" y1="13" x2="18" y2="17" />
        <line x1="16" y1="15" x2="20" y2="15" />
      </svg>
    ),
  },
];

export default function HomePage() {
  // Parallax Scrolling state (Effect #1)
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero slide state (Effect #5: Image Crossfade) with new slide content
  const heroSlides = [
    {
      image: '/images/recruitment_hero_1.jpg',
      tag: 'Premier Recruitment & Staffing',
      title: 'Built on',
      subtitle: 'Trust.',
      desc: 'Recognized globally for delivery, innovation, and consistent workforce outcomes.',
    },
    {
      image: '/images/recruitment_hero_2.jpg',
      tag: 'Agile Workforce & Scalability',
      title: 'Simplified',
      subtitle: 'Hiring.',
      desc: 'Move your workforce plans forward with expert support at every stage of growth.',
    },
    {
      image: '/images/recruitment_hero_3.jpg',
      tag: 'Global Technical Talent',
      title: 'Delivering',
      subtitle: 'Talent.',
      desc: 'End-to-end workforce and staffing solutions delivered through local expertise worldwide.',
    },
    {
      image: '/images/recruitment_hero_4.jpg',
      tag: 'Industry & Sector Expertise',
      title: 'Industry',
      subtitle: 'Focus.',
      desc: 'Delivering workforce expertise across industries, from emerging markets to global enterprises.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Tabbed Services State
  const [selectedServiceTab, setSelectedServiceTab] = useState(0);

  const servicesTabs = [
    {
      label: 'Staff Augmentation',
      title: 'Staff Augmentation',
      image: '/images/staff_augmentation.jpg',
      desc: 'Skilled professionals delivered on demand, helping your business scale quickly and fill critical talent gaps efficiently.',
      points: [
        'Pre-vetted technical & non-technical domain experts',
        'Rapid onboarding within days, not months',
        'Scale teams up or down seamlessly as project demands evolve',
      ],
    },
    {
      label: 'Consumer Products & Services',
      title: 'Consumer Products & Services',
      image: '/images/consumer_products.jpg',
      desc: 'Consumer products and services that enhance everyday business and retail operations with quality and trusted innovations.',
      points: [
        'Quality-assured product and specialized personnel sourcing',
        'Retail, e-commerce, and logistics distribution support',
        'Customer-centric service delivery and lifecycle execution',
      ],
    },
    {
      label: 'Manpower Services',
      title: 'Manpower Services',
      image: '/images/manpower.jpg',
      desc: 'Trained, industry-ready manpower that supports your daily operations and long-term business growth with full reliability.',
      points: [
        'Skilled, semi-skilled & support workforce across sectors',
        'Background-verified and compliance-ready deployment',
        'Flexible short-term, seasonal, or permanent placement',
      ],
    },
    {
      label: 'Flexible Staffing',
      title: 'Flexible Staffing',
      image: '/images/flexible_staffing.jpg',
      desc: 'Flexible Staffing tailored to your workforce needs, ensuring agility, efficiency, and the right talent at the right time.',
      points: [
        'Contract, Contract-to-Hire, and Direct Hire models',
        'Fast scalability for fluctuating project deadlines',
        'Streamlined vendor management (VMS) and MSP compatibility',
      ],
    },
    {
      label: 'H1-B Visa Support',
      title: 'H1-B Visa Sponsorship & Transfer',
      image: '/images/visa_services.jpg',
      desc: 'H1-B Visa Sponsorship and Transfer services providing qualified global talent with compliant, reliable, and streamlined immigration support.',
      points: [
        'End-to-end USCIS and Department of Labor compliance',
        'Rapid LCA filing and seamless transfer with zero disruption',
        'Specialized technical talent placement in high-demand STEM fields',
      ],
    },
    {
      label: 'Business Services',
      title: 'Business Services',
      image: '/images/business_services.jpg',
      desc: 'Business Services designed to streamline operations, optimize performance, and support sustainable growth across all sectors.',
      points: [
        'Workforce planning, analytics, and organizational design',
        'Executive search and strategic advisory for scale-ups',
        'Transparent SLA performance metrics and continuous support',
      ],
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: 'Michelle Richards',
      role: 'The Scotts Miracle-Gro Company',
      avatar: '/images/avatar_michelle.jpg',
      color: '#2563eb',
      quote:
        'Umesh is professional, reliable, and communicative, delivering timely results with clear understanding and strong teamwork.',
    },
    {
      name: 'Christine (Chris)',
      role: 'Recruiter at Capgemini',
      avatar: '/images/avatar_christine.jpg',
      color: '#10b981',
      quote:
        'I am very excited about my new position with 1st-Recruit and Capgemini. Thank you Umesh for making the process so seamless!',
    },
    {
      name: 'IT Architect',
      role: 'TD Bank Financial Group',
      avatar: '/images/avatar_td.jpg',
      color: '#7c3aed',
      quote:
        'Umesh is professional, skilled, thorough, and reliable, consistently delivering strong recruitment results with excellent follow-through.',
    },
    {
      name: 'Ralph Maurmeier',
      role: 'Web Developer at Staffmark Group',
      avatar: '/images/avatar_ralph.jpg',
      color: '#2563eb',
      quote:
        'Umesh was great at finding me a position and guiding me through the process. He will go above and beyond for you.',
    },
  ];

  // Consultation Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Staff Augmentation',
    message: '',
  });

  const [toast, setToast] = useState({ open: false, message: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setToast({
      open: true,
      message: 'Thank you! Your request has been sent to 1st Recruit LLC. An advisor will contact you within 24 hours.',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceInterest: 'Staff Augmentation',
      message: '',
    });
  };

  // Marquee Trust Badges (Effect #7: Marquee Text)
  const marqueeCertItems = [
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)' }}>
      <Box component="img" src="/images/certs/everify.svg" alt="E-Verify" sx={{ height: 38 }} />
      <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 600 }}>E-Verify Registered</Typography>
    </Box>,
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)' }}>
      <Box component="img" src="/images/certs/iso.svg" alt="ISO 9001:2015" sx={{ height: 38 }} />
      <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 600 }}>ISO 9001:2015 Quality</Typography>
    </Box>,
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)' }}>
      <Box component="img" src="/images/certs/duns.svg" alt="DUNS" sx={{ height: 38 }} />
      <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 600 }}>DUNS Certified</Typography>
    </Box>,
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)' }}>
      <Box component="img" src="/images/certs/delaware.svg" alt="State of Delaware" sx={{ height: 38 }} />
      <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 600 }}>Delaware State Vendor</Typography>
    </Box>,
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)' }}>
      <Box component="img" src="/images/certs/pennsylvania.svg" alt="Pennsylvania Vendor" sx={{ height: 38 }} />
      <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 600 }}>Pennsylvania Registered</Typography>
    </Box>,
  ];

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. Dynamic Hero Section with Parallax Background (Effect #1) & Image Crossfade (Effect #5) */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '85vh', md: '92vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundColor: '#0b1528',
        }}
      >
        {/* Parallax Background Layer (moves at 0.35x speed of scroll) */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '120%',
            transform: `translate3d(0, ${scrollY * 0.32}px, 0)`,
            willChange: 'transform',
            pointerEvents: 'none',
          }}
        >
          {heroSlides.map((slide, idx) => (
            <Box
              key={idx}
              className="crossfade-img"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: currentSlide === idx ? 1 : 0,
                transform: currentSlide === idx ? 'scale(1.04)' : 'scale(1)',
                transition: 'opacity 1.3s cubic-bezier(0.4, 0, 0.2, 1), transform 6s ease-out',
              }}
            />
          ))}
        </Box>

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(135deg, rgba(11, 21, 40, 0.92) 0%, rgba(30, 27, 75, 0.88) 50%, rgba(6, 78, 59, 0.82) 100%)',
            zIndex: 1,
          }}
        />

        {/* Hero Content with Sequential Entrance Animation & Text Mask Reveal */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 10 }, textAlign: 'center' }}>
          <Box className="hero-enter-tag">
            <Chip
              icon={<AutoAwesomeIcon sx={{ fontSize: '1rem !important', color: '#34d399 !important' }} />}
              label={heroSlides[currentSlide].tag}
              sx={{
                backgroundColor: 'rgba(124, 58, 237, 0.45)',
                color: '#ffffff',
                border: '1px solid rgba(167, 139, 250, 0.55)',
                fontWeight: 600,
                fontSize: '0.88rem',
                py: 2.2,
                px: 1.5,
                mb: 3,
                boxShadow: '0 4px 15px rgba(124, 58, 237, 0.25)',
              }}
            />
          </Box>

          <Typography
            variant="h1"
            className="hero-enter-heading"
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.6rem', md: '4.4rem' },
              color: '#ffffff',
              lineHeight: 1.15,
              mb: 2.5,
            }}
          >
            {heroSlides[currentSlide].title} <br />
            {/* Text Mask Reveal (Effect #2) */}
            <Box component="span" className="text-mask-reveal">
              {heroSlides[currentSlide].subtitle}
            </Box>
          </Typography>

          <Typography
            variant="body1"
            className="hero-enter-subtitle"
            sx={{
              maxWidth: 760,
              mx: 'auto',
              color: 'rgba(255, 255, 255, 0.88)',
              fontSize: { xs: '1.05rem', md: '1.2rem' },
              lineHeight: 1.7,
              mb: 4.5,
            }}
          >
            {heroSlides[currentSlide].desc}
          </Typography>

          {/* Sequential CTA Buttons with Magnetic effect */}
          <Box className="hero-enter-cta" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2.5, mb: 4.5 }}>
            <MagneticButton strength={0.3}>
              <Button
                component={Link}
                to="/services"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                  color: '#ffffff',
                  px: 3.8,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: '0 8px 24px rgba(124, 58, 237, 0.45)',
                }}
              >
                Explore Services
              </Button>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <Button
                component={Link}
                to="/careers"
                variant="contained"
                size="large"
                startIcon={<WorkIcon />}
                sx={{
                  backgroundColor: '#10b981',
                  color: '#ffffff',
                  px: 3.8,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)',
                  '&:hover': {
                    backgroundColor: '#059669',
                  },
                }}
              >
                View Open Jobs
              </Button>
            </MagneticButton>
          </Box>

          {/* Quick Highlight Pills with delay */}
          <Box className="hero-enter-pills" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.2 }}>
            {['Financial Services', 'Flexible Staffing', 'H1-B Visa Sponsorship', 'H1-B Visa Transfer', 'MSP & VMS'].map(
              (pill, i) => (
                <Chip
                  key={i}
                  label={pill}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(8px)',
                    fontSize: '0.8rem',
                  }}
                />
              )
            )}
          </Box>

          {/* Slide Indicator Dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 5 }}>
            {heroSlides.map((_, i) => (
              <Box
                key={i}
                onClick={() => setCurrentSlide(i)}
                sx={{
                  width: currentSlide === i ? 28 : 10,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: currentSlide === i ? '#38bdf8' : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* 2. Marquee Text Continuous Ticker Ribbon (Effect #7) */}
      <Box sx={{ backgroundColor: '#070d18', py: 2, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <MarqueeText items={marqueeCertItems} speed={24} />
      </Box>

      {/* 3. Quick Stats Counter Banner with Animated Number Counter (Scroll into View) */}
      <Box sx={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', py: 4.5, boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} textAlign="center">
            <Grid item xs={6} md={3} className="stagger-item stagger-delay-1">
              <AnimatedCounter
                target={15}
                suffix="+"
                variant="h3"
                sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#2563eb', mb: 0.5 }}
              />
              <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>
                Years of Experience
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} className="stagger-item stagger-delay-2" sx={{ borderLeft: { md: '1px solid #e2e8f0' } }}>
              <AnimatedCounter
                target={200}
                suffix="+"
                variant="h3"
                sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#10b981', mb: 0.5 }}
              />
              <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>
                Five Star Reviews
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} className="stagger-item stagger-delay-3" sx={{ borderLeft: { md: '1px solid #e2e8f0' } }}>
              <AnimatedCounter
                target={98.3}
                decimals={1}
                suffix="%"
                variant="h3"
                sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#7c3aed', mb: 0.5 }}
              />
              <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>
                Client Retention
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} className="stagger-item stagger-delay-4" sx={{ borderLeft: { md: '1px solid #e2e8f0' } }}>
              <AnimatedCounter
                target={1200}
                suffix="+"
                variant="h3"
                sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#2563eb', mb: 0.5 }}
              />
              <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>
                Candidates Placed
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. About Preview Section with Image Zoom on Hover (Effect #2) */}
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
                    src="/images/about_recruitment.jpg"
                    alt="1st Recruit Talent Strategy"
                    sx={{
                      width: '100%',
                      maxHeight: 460,
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
                    left: 20,
                    backgroundColor: '#ffffff',
                    p: 2.5,
                    borderRadius: 3,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    borderLeft: '5px solid #2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    maxWidth: 260,
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
                    <HandshakeIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0f172a' }}>
                      100+ Enterprise
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748b' }}>
                      Satisfied Global Clients
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Chip
                label="ABOUT 1ST RECRUIT"
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
                  mb: 2.5,
                  lineHeight: 1.25,
                }}
              >
                Expertise In Precise{' '}
                <Box component="span" className="text-mask-reveal">
                  Talent Matching
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, mb: 3 }}>
                1st-Recruit is a premier provider of technical recruiting and staffing services. We work closely with companies of all sizes to identify, vet, and place top-tier talent for mission-critical roles.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                {[
                  { title: 'Visionary Leadership', desc: 'Global talent connection across continents.' },
                  { title: 'Preferred Partner', desc: 'Proven recruitment engine for corporate scaling.' },
                  { title: 'Collaborative Culture', desc: 'Transparent, value-driven hiring practices.' },
                  { title: 'Precision Matching', desc: 'Industry-focused technical expertise & vetting.' },
                ].map((item, idx) => (
                  <Grid item xs={12} sm={6} key={idx} className={`stagger-item stagger-delay-${idx + 1}`}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <CheckCircleOutlineIcon sx={{ color: '#2563eb', fontSize: 20, mt: 0.3 }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0f172a' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#64748b' }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <MagneticButton strength={0.25}>
                  <Button
                    component={Link}
                    to="/about-us"
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                      py: 1.2,
                      px: 3,
                    }}
                  >
                    More About Us
                  </Button>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <Button
                    component={Link}
                    to="/contact-us"
                    variant="outlined"
                    sx={{
                      borderColor: '#cbd5e1',
                      color: '#334155',
                      py: 1.2,
                      px: 3,
                    }}
                  >
                    Contact Us
                  </Button>
                </MagneticButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. Interactive Tabbed Services Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#f3efe6', borderTop: '1px solid #e8e4db', borderBottom: '1px solid #e8e4db' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Chip
              label="OUR SERVICES"
              size="small"
              sx={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#059669',
                fontWeight: 700,
                mb: 1.5,
              }}
            />
            <Typography variant="h3" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#182230', mb: 1.5 }}>
              Services We Provide
            </Typography>
            <Typography variant="body1" sx={{ color: '#5a687c', maxWidth: 650, mx: 'auto' }}>
              1st-Recruit delivers top-tier recruiting services, helping companies of all sizes identify, attract, and hire the best candidates with speed and compliance.
            </Typography>
          </Box>

          {/* Service Tabs */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Tabs
              value={selectedServiceTab}
              onChange={(e, val) => setSelectedServiceTab(val)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8e4db',
                borderRadius: 3,
                p: 0.8,
                boxShadow: '0 4px 15px rgba(30,25,15,0.04)',
                '& .MuiTab-root': {
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  minHeight: 44,
                  px: 2.5,
                  transition: 'all 0.25s ease',
                },
                '& .Mui-selected': {
                  backgroundColor: '#2563eb',
                  color: '#ffffff !important',
                },
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
              }}
            >
              {servicesTabs.map((tab, idx) => (
                <Tab key={idx} label={tab.label} />
              ))}
            </Tabs>
          </Box>

          {/* Active Tab Panel with smooth fade & lift */}
          {servicesTabs.map((tab, idx) => (
            idx === selectedServiceTab && (
              <Card
                key={idx}
                className="hover-lift-card stagger-item stagger-delay-1"
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e8e4db',
                  boxShadow: '0 12px 30px rgba(30,25,15,0.05)',
                }}
              >
                <Grid container>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      className="img-zoom-container"
                      sx={{ height: '100%', minHeight: 340, width: '100%', overflow: 'hidden' }}
                    >
                      <Box
                        component="img"
                        src={tab.image}
                        alt={tab.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          minHeight: 340,
                          objectFit: 'cover',
                          objectPosition: 'center 20%',
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 4, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h4" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#0f172a', mb: 2 }}>
                      {tab.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#475569', mb: 3, lineHeight: 1.7 }}>
                      {tab.desc}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                      {tab.points.map((pt, i) => (
                        <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                          <CheckCircleOutlineIcon sx={{ color: '#10b981', fontSize: 20 }} />
                          <Typography variant="body2" sx={{ color: '#334155', fontWeight: 500 }}>
                            {pt}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box>
                      <MagneticButton strength={0.25}>
                        <Button
                          component={Link}
                          to="/services"
                          variant="contained"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                            py: 1.2,
                            px: 3,
                          }}
                        >
                          Explore All Services
                        </Button>
                      </MagneticButton>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            )
          ))}
        </Container>
      </Box>

      {/* 6. Co-Partners Section with Stagger Effect */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Chip
              label="OUR CO-PARTNERS"
              size="small"
              sx={{
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                color: '#7c3aed',
                fontWeight: 700,
                mb: 1.5,
              }}
            />
            <Typography variant="h3" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#0f172a', mb: 1.5 }}>
              Trusted Partners We Work With
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748b', maxWidth: 640, mx: 'auto' }}>
              We collaborate with industry-leading organizations to deliver end-to-end recruitment, staffing, and business solutions to clients worldwide.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={5} className="stagger-item stagger-delay-1">
              <Card
                className="hover-lift-card"
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '4px solid #2563eb !important',
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    color: '#2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <BusinessIcon sx={{ fontSize: 32 }} />
                </Box>
                <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, mb: 1.5 }}>
                  RCM
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 3, flexGrow: 1, lineHeight: 1.7 }}>
                  Strategic staffing and workforce solutions partner supporting enterprise clients across the United States.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Enterprise Staffing
                  </Typography>
                  <Button
                    size="small"
                    variant="outlined"
                    endIcon={<LaunchIcon sx={{ fontSize: '1rem !important' }} />}
                    sx={{ color: '#2563eb', borderColor: '#bfdbfe' }}
                  >
                    Partner Profile
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={5} className="stagger-item stagger-delay-2">
              <Card
                className="hover-lift-card"
                sx={{
                  p: 4,
                  borderRadius: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '4px solid #10b981 !important',
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <HandshakeIcon sx={{ fontSize: 32 }} />
                </Box>
                <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, mb: 1.5 }}>
                  Health Care
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 3, flexGrow: 1, lineHeight: 1.7 }}>
                  Technology and clinical staffing partner helping organizations scale with specialized domain talent.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Healthcare &amp; IT
                  </Typography>
                  <Button
                    size="small"
                    variant="outlined"
                    endIcon={<LaunchIcon sx={{ fontSize: '1rem !important' }} />}
                    sx={{ color: '#10b981', borderColor: '#a7f3d0' }}
                  >
                    Partner Profile
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 6.5. Enterprise Compliance, Security & Protection Standards */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          position: 'relative',
          backgroundImage: 'linear-gradient(135deg, rgba(8, 15, 30, 0.92) 0%, rgba(13, 27, 54, 0.88) 100%), url("/images/security_verification_bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: { md: 'fixed', xs: 'scroll' },
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Chip
              label="SECURITY & VERIFICATION"
              size="small"
              sx={{
                backgroundColor: 'rgba(56, 189, 248, 0.16)',
                color: '#38bdf8',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                fontWeight: 700,
                letterSpacing: '0.8px',
                mb: 1.5,
              }}
            />
            <Typography variant="h3" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#ffffff', mb: 1.5 }}>
              Enterprise Compliance, Facility &amp; Asset Protection
            </Typography>
            <Typography variant="body1" sx={{ color: '#cbd5e1', maxWidth: 660, mx: 'auto' }}>
              We enforce stringent corporate compliance, identity validation, on-site personnel clearances, and security protocols across all operations.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {[
              {
                image: '/images/foreign_control.png',
                title: 'Foreign & Export Control',
                badge: 'USCIS & State Compliance',
                desc: 'Full alignment with federal employment eligibility verification and international workforce mobility compliance standards.',
                color: '#38bdf8',
              },
              {
                image: '/images/foreign_guard.png',
                title: 'Physical Asset & Access Control',
                badge: 'Verified Deployment',
                desc: 'Multi-tiered background checks, site authorization clearances, and continuous workplace accountability.',
                color: '#34d399',
              },
              {
                image: '/images/services/security_gunmen.png',
                title: 'On-Site Protection Standards',
                badge: 'Facility Security Ready',
                desc: 'Specialized enterprise protective monitoring, trained security support personnel, and secure client facilities.',
                color: '#a78bfa',
              },
            ].map((sec, idx) => (
              <Grid
                item
                xs={12}
                md={4}
                size={{ xs: 12, md: 4 }}
                key={idx}
                className={`stagger-item stagger-delay-${idx + 1}`}
              >
                <Card
                  className="hover-lift-card"
                  sx={{
                    p: 3.5,
                    borderRadius: 4,
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderTop: `4px solid ${sec.color} !important`,
                    textAlign: 'center',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.35)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.09)',
                      borderColor: 'rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 18px 40px rgba(0, 0, 0, 0.5)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mb: 2.5,
                      height: 85,
                      p: 1,
                      borderRadius: 3,
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <Box
                      component="img"
                      src={sec.image}
                      alt={sec.title}
                      sx={{
                        maxHeight: 76,
                        maxWidth: 160,
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.3))',
                      }}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ color: sec.color, fontWeight: 700, textTransform: 'uppercase', display: 'block', mb: 0.5, letterSpacing: '0.5px' }}>
                    {sec.badge}
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700, color: '#ffffff', mb: 1.2 }}>
                    {sec.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.6 }}>
                    {sec.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 7. Expertise Banner with Floating Visual (Effect #1) */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, #0b1528 0%, #1e1b4b 60%, #064e3b 100%)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="WHO WE ARE"
                size="small"
                sx={{
                  backgroundColor: 'rgba(16, 185, 129, 0.25)',
                  color: '#34d399',
                  fontWeight: 700,
                  mb: 2,
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 800,
                  lineHeight: 1.25,
                  mb: 2.5,
                }}
              >
                We Unlock Your Potential With{' '}
                <Box component="span" className="text-mask-reveal">
                  Our Expertise
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, mb: 4 }}>
                Empowering businesses to grow faster, innovate confidently, and achieve milestones through tailored staffing solutions, skilled talent, and reliable support at every stage.
              </Typography>

              <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
                <Box sx={{ p: 2, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 3, borderLeft: '3px solid #10b981', minWidth: 140 }}>
                  <AnimatedCounter
                    target={98.3}
                    decimals={1}
                    suffix="%"
                    variant="h4"
                    sx={{ fontWeight: 800, color: '#34d399', display: 'block' }}
                  />
                  <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                    Satisfied Customers
                  </Typography>
                </Box>
                <Box sx={{ p: 2, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 3, borderLeft: '3px solid #38bdf8', minWidth: 140 }}>
                  <AnimatedCounter
                    target={95}
                    suffix="%"
                    variant="h4"
                    sx={{ fontWeight: 800, color: '#38bdf8', display: 'block' }}
                  />
                  <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                    Projects Completed
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                <MagneticButton strength={0.3}>
                  <Button
                    component={Link}
                    to="/contact-us"
                    variant="contained"
                    sx={{
                      backgroundColor: '#10b981',
                      color: '#ffffff',
                      py: 1.2,
                      px: 3,
                      '&:hover': { backgroundColor: '#059669' },
                    }}
                  >
                    Get In Touch
                  </Button>
                </MagneticButton>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                    CALL NOW TO CONSULT
                  </Typography>
                  <Typography
                    component="a"
                    href="tel:+1609563891"
                    variant="h6"
                    sx={{ color: '#ffffff', textDecoration: 'none', fontWeight: 700 }}
                  >
                    +1 609-563-891
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                className="img-zoom-container parallax-float-slow"
                sx={{
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Box
                  component="img"
                  src="/images/about_team.jpg"
                  alt="1st Recruit Team Expertise"
                  sx={{
                    width: '100%',
                    maxHeight: 400,
                    objectFit: 'cover',
                    borderRadius: 4,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 8. Testimonials Section with Staggered Reveal Cards */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#faf9f6' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="TESTIMONIALS"
              size="small"
              sx={{
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                color: '#7c3aed',
                fontWeight: 700,
                mb: 1.5,
              }}
            />
            <Typography variant="h3" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#182230', mb: 1.5 }}>
              Our Client's Review
            </Typography>
            <Typography variant="body1" sx={{ color: '#5a687c', maxWidth: 640, mx: 'auto' }}>
              Discover what our corporate partners and candidates say—authentic testimonials showcasing trust and recruitment excellence.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {testimonials.map((t, idx) => (
              <Grid item xs={12} md={6} key={idx} className={`stagger-item stagger-delay-${idx + 1}`}>
                <Card
                  className="hover-lift-card"
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: '100%',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e8e4db',
                    borderTop: `4px solid ${t.color} !important`,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 25px rgba(30, 25, 15, 0.04)',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 0.5, color: '#f59e0b', mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} sx={{ fontSize: 18 }} />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: 'italic',
                      color: '#475569',
                      mb: 3,
                      flexGrow: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      component="img"
                      src={t.avatar}
                      alt={t.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/logo.png';
                      }}
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: `2px solid ${t.color}`,
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#182230' }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#64748b' }}>
                        {t.role}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 9. Specialized Workforce Solutions (3 Columns x 3 Rows Interconnected Grid Template) */}
      <Box
        id="workforce-solutions"
        sx={{
          py: { xs: 8, md: 11 },
          position: 'relative',
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e5e7eb',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Chip
            label="WORKFORCE & STAFFING SOLUTIONS"
            size="small"
            sx={{
              backgroundColor: 'rgba(37, 99, 235, 0.08)',
              color: '#2563eb',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.04em',
              mb: 1.5,
              px: 1.5,
              py: 1.8,
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 800,
              color: '#0f172a',
              fontSize: { xs: '1.9rem', sm: '2.5rem', md: '2.9rem' },
              mb: 1.5,
              lineHeight: 1.2,
            }}
          >
            Specialized Workforce Solutions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748b',
              maxWidth: 680,
              mx: 'auto',
              fontSize: { xs: '0.98rem', md: '1.08rem' },
            }}
          >
            Explore our comprehensive suite of global staffing and talent solutions designed to support your enterprise at every phase.
          </Typography>
        </Container>

        {/* 3 Cards per row (3 Columns x 2 Rows) layout with generous spacing */}
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: { xs: 2.5, sm: 3, md: 3.5 },
              justifyContent: 'center',
            }}
          >
            {staffingPromoCards.map((card) => (
              <Box
                key={card.id}
                component={Link}
                to="/services"
                className="hover-lift-card"
                  sx={{
                    height: '100%',
                    p: { xs: 4, sm: 4.5, md: 5 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    textDecoration: 'none',
                    backgroundColor: card.cardBg,
                    border: `1.5px solid ${card.borderLight}`,
                    borderRadius: 4,
                    boxShadow: '0 4px 18px rgba(15, 23, 42, 0.04)',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
                    '&:hover': {
                      backgroundColor: card.cardHoverBg,
                      transform: 'translateY(-7px)',
                      boxShadow: `0 8px 24px ${card.hoverShadow}, 0 0 0 1px ${card.color}`,
                      borderColor: card.color,
                    },
                  }}
                >
                  {/* Clean Icon with Circular Outline */}
                  <Box
                    sx={{
                      width: 68,
                      height: 68,
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      border: `1.5px solid ${card.id === 4 ? 'rgba(212, 0, 0, 0.2)' : card.borderLight}`,
                      boxShadow: '0 2px 10px rgba(15, 23, 42, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.8,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '.hover-lift-card:hover &': {
                        transform: 'scale(1.1)',
                        boxShadow: `0 4px 14px ${card.hoverShadow}`,
                      },
                    }}
                  >
                    {card.icon}
                  </Box>

                  {/* Title matching template bold styling */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 700,
                      color: card.id === 4 ? '#d40000' : '#111827',
                      fontSize: { xs: '1.2rem', md: '1.35rem' },
                      lineHeight: 1.35,
                      whiteSpace: 'pre-line',
                      mb: 1.8,
                      minHeight: 56,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'color 0.25s ease',
                      '.hover-lift-card:hover &': {
                        color: card.id === 4 ? '#b00000' : card.color,
                      },
                    }}
                  >
                    {card.title}
                  </Typography>

                  {/* Description text matching screenshot style */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#4b5563',
                      lineHeight: 1.65,
                      fontSize: { xs: '0.92rem', md: '0.96rem' },
                      maxWidth: 320,
                    }}
                  >
                    {card.desc}
                  </Typography>
                </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 10. Contact & Consultation Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#f3efe6', borderTop: '1px solid #e8e4db' }}>
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
              {/* Left Column Info with Map Watermark */}
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
                  Let's Discuss Your Talent Needs
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4, lineHeight: 1.7 }}>
                  Reach out to discuss your specific technical staffing or career requirements. Our team delivers customized recruiting proposals within 24 hours.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <LocationOnIcon sx={{ color: '#38bdf8' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      Headquarters - USA
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                      3 Germay Dr, Unit 4 #2031 Wilmington, DE 19804
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <LocationOnIcon sx={{ color: '#34d399' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      Operations - India
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                      iTech Park, Unit No. 1016, Sector 49, Gurugram, Haryana
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <PhoneIcon sx={{ color: '#a78bfa' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      Direct Phone
                    </Typography>
                    <Typography
                      component="a"
                      href="tel:+1609563891"
                      variant="caption"
                      sx={{ color: '#ffffff', textDecoration: 'none' }}
                    >
                      +1 609-563-891
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <EmailIcon sx={{ color: '#38bdf8' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      Email Address
                    </Typography>
                    <Typography
                      component="a"
                      href="mailto:info@1st-recruit.com"
                      variant="caption"
                      sx={{ color: '#ffffff', textDecoration: 'none' }}
                    >
                      info@1st-recruit.com
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Right Column Form */}
              <Grid item xs={12} md={7} sx={{ p: { xs: 4, md: 5 }, backgroundColor: '#ffffff' }}>
                <Typography variant="h5" sx={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 800, color: '#0f172a', mb: 1 }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 3 }}>
                  Fill out the form below and our recruitment director will contact you promptly.
                </Typography>

                <Box component="form" onSubmit={handleFormSubmit}>
                  <Grid container spacing={2}>
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
                        label="Area of Interest"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        size="small"
                      >
                        <MenuItem value="Staff Augmentation">Staff Augmentation</MenuItem>
                        <MenuItem value="Flexible Staffing">Flexible Staffing</MenuItem>
                        <MenuItem value="H1-B Visa Sponsorship">H1-B Visa Sponsorship</MenuItem>
                        <MenuItem value="H1-B Visa Transfer">H1-B Visa Transfer</MenuItem>
                        <MenuItem value="Manpower Services">Manpower Services</MenuItem>
                        <MenuItem value="Looking For a Job">Looking For a Job</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={4}
                        label="Staffing Requirements / Inquiries"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MagneticButton strength={0.2} sx={{ width: '100%' }}>
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
                          Submit Request
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

      {/* Feedback Toast */}
      <Snackbar
        open={toast.open}
        autoHideDuration={6000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%', borderRadius: 3 }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
