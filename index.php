<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    $pageTitle = "1st Recruit LLC - Connecting Talent. Creating Success.";
    include 'includes/headlink.php';
    ?>
</head>

<body>
    <?php include 'includes/header.php'; ?>

    <!-- Pinned Hero Container with Dynamic Slider -->
    <div class="hero-pin-container" id="home">
        <section class="hero position-sticky top-0 vh-100 overflow-hidden d-flex align-items-center">

            <!-- Main Hero Carousel -->
            <div id="heroCarousel" class="carousel slide carousel-fade w-100 h-100 position-absolute top-0 start-0"
                data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false">

                <!-- The Scaling Images -->
                <div class="carousel-inner h-100 w-100 z-index-1 position-absolute top-0 start-0">
                    <div class="carousel-item active h-100 w-100">
                        <img src="images/recruitment_hero_1.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Talent Recruitment Meeting"
                            fetchpriority="high" loading="eager">
                    </div>
                    <!--
                    <div class="carousel-item h-100 w-100">
                        <img src="images/recruitment_hero_2.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Executive Career Placement"
                            loading="lazy">
                    </div>
                    -->
                    <div class="carousel-item h-100 w-100">
                        <img src="images/recruitment_hero_3.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Global IT Workforce"
                            loading="lazy">
                    </div>
                    <div class="carousel-item h-100 w-100">
                        <img src="images/recruitment_hero_4.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Strategic Staffing Solutions"
                            loading="lazy">
                    </div>
                </div>

                <!-- Dark Gradient Overlay for Maximum Legibility with Blue-Purple Tones -->
                <div class="hero-overlay w-100 h-100 position-absolute top-0 start-0 z-index-2"
                    style="background: linear-gradient(135deg, rgba(11, 21, 40, 0.90) 0%, rgba(30, 27, 75, 0.85) 50%, rgba(6, 78, 59, 0.80) 100%);"></div>

                <!-- Text Content -->
                <div class="container position-relative z-index-3 text-center text-white hero-content d-flex flex-column justify-content-center align-items-center h-100 pt-5">
                    <div class="badge-tag-purple badge-tag mb-3 px-3 py-2 text-white" style="background: rgba(124, 58, 237, 0.35); border-color: rgba(124, 58, 237, 0.6);">
                        <i class="fa-solid fa-sparkles text-green me-2"></i> Welcome to 1st Recruit LLC
                    </div>
                    <h1 class="display-3 fw-bold hero-title mb-3 font-montserrat">
                        Connecting Talent.<br><span class="gradient-text-blue-purple">Creating Success.</span>
                    </h1>
                    <p class="lead hero-subtitle mx-auto mb-4 opacity-90" style="max-width: 720px; font-size: 1.15rem;">
                        1st-Recruit delivers efficient, reliable hiring solutions, connecting leading companies with top-quality talent and ensuring the right candidate fits every role perfectly.
                    </p>
                    <div class="hero-buttons d-flex flex-wrap justify-content-center gap-3">
                        <a href="services.php" class="btn btn-magenta btn-lg hero-btn shadow">
                            <i class="fa-solid fa-layer-group me-2"></i> Explore Services
                        </a>
                        <a href="careers.php" class="btn btn-green btn-lg hero-btn px-4 shadow">
                            <i class="fa-solid fa-briefcase me-2"></i> View Open Jobs
                        </a>
                    </div>

                    <!-- Highlight Highlights Pills in Blue, Green, Purple -->
                    <div class="d-flex flex-wrap justify-content-center gap-2 mt-4 pt-2">
                        <span class="badge border border-primary text-white px-3 py-2 small" style="background: rgba(37, 99, 235, 0.25);">Financial Services</span>
                        <span class="badge border border-success text-white px-3 py-2 small" style="background: rgba(16, 185, 129, 0.25);">Flexible Staffing</span>
                        <span class="badge border text-white px-3 py-2 small" style="background: rgba(124, 58, 237, 0.25); border-color: #a78bfa;">H1-B Visa Sponsorship</span>
                        <span class="badge border text-white px-3 py-2 small" style="background: rgba(16, 185, 129, 0.25); border-color: #34d399;">H1-B Visa Transfer</span>
                        <span class="badge border text-white px-3 py-2 small" style="background: rgba(37, 99, 235, 0.25); border-color: #60a5fa;">MSP &amp; VMS</span>
                    </div>
                </div>

                <!-- Carousel Indicators -->
                <div class="carousel-indicators z-index-3" style="bottom: 2rem;">
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <!-- <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button> -->
                </div>
            </div>
        </section>
    </div>

    <!-- Quick Stats Banner (Blue, Green, Purple, Cyan) -->
    <section class="py-4 bg-white border-bottom shadow-sm position-relative z-index-2">
        <div class="container">
            <div class="row text-center g-4">
                <div class="col-6 col-md-3">
                    <div class="p-2">
                        <h2 class="display-6 fw-bold text-blue mb-1 font-montserrat"><span class="counter" data-target="10">0</span>+</h2>
                        <p class="text-muted fw-semibold small text-uppercase mb-0">Years of Experience</p>
                    </div>
                </div>
                <div class="col-6 col-md-3 border-start">
                    <div class="p-2">
                        <h2 class="display-6 fw-bold text-green mb-1 font-montserrat"><span class="counter" data-target="200">0</span>+</h2>
                        <p class="text-muted fw-semibold small text-uppercase mb-0">Five Star Reviews</p>
                    </div>
                </div>
                <div class="col-6 col-md-3 border-start">
                    <div class="p-2">
                        <h2 class="display-6 fw-bold text-purple mb-1 font-montserrat"><span class="counter" data-target="98">0</span>%</h2>
                        <p class="text-muted fw-semibold small text-uppercase mb-0">Client Retention</p>
                    </div>
                </div>
                <div class="col-6 col-md-3 border-start">
                    <div class="p-2">
                        <h2 class="display-6 fw-bold text-blue mb-1 font-montserrat"><span class="counter" data-target="1200">0</span>+</h2>
                        <p class="text-muted fw-semibold small text-uppercase mb-0">Candidates Placed</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-4 ">
        <div class="container ">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <div class="position-relative">
                        <img src="images/about_recruitment.jpg" alt="1st Recruit Talent Strategy" class="img-fluid rounded-4 shadow-lg w-100" style="max-height: 480px; object-fit: cover;">
                        <div class="position-absolute bottom-0 start-0 m-4 p-3 bg-white rounded-3 shadow-lg border-start border-4 border-primary" style="max-width: 280px;">
                            <div class="d-flex align-items-center gap-3">
                                <div class="bg-green rounded-circle text-white p-2 d-flex align-items-center justify-content-center" style="width: 44px; height: 44px;">
                                    <i class="fa-solid fa-handshake-angle fa-lg"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-0 text-dark-blue">100+ Enterprise</h6>
                                    <small class="text-muted">Satisfied Global Clients</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ps-lg-4">
                    <div class="badge-tag-purple badge-tag mb-3">About 1st Recruit</div>
                    <h2 class="display-6 fw-bold text-dark-blue mb-3 font-montserrat">
                        Expertise In Precise <span class="gradient-text-blue-purple">Talent Matching</span>
                    </h2>
                    <p class=" lead mb-4 text-justify" style="font-size: 1.05rem;">
                        1st-Recruit is a top provider of recruiting services. We work with companies of all sizes to find the best candidates for their open positions.
                    </p>
                    <div class="row g-3 mb-4">
                        <div class="col-sm-6">
                            <div class="d-flex align-items-start gap-2">
                                <i class="fa-solid fa-circle-check text-blue mt-1"></i>
                                <div>
                                    <strong class="text-dark-blue d-block">Visionary Leadership</strong>
                                    <small class="text-muted">Global talent connection across continents.</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-start gap-2">
                                <i class="fa-solid fa-circle-check text-green mt-1"></i>
                                <div>
                                    <strong class="text-dark-blue d-block">Preferred Partner</strong>
                                    <small class="text-muted">Proven recruitment engine for business growth.</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-start gap-2">
                                <i class="fa-solid fa-circle-check text-purple mt-1"></i>
                                <div>
                                    <strong class="text-dark-blue d-block">Collaborative Culture</strong>
                                    <small class="text-muted">Value-driven, transparent hiring practices.</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex align-items-start gap-2">
                                <i class="fa-solid fa-circle-check text-blue mt-1"></i>
                                <div>
                                    <strong class="text-dark-blue d-block">Precision Matching</strong>
                                    <small class="text-muted">Industry-focused technical expertise.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex gap-3">
                        <a href="about-us.php" class="btn btn-magenta px-4 py-3 shadow">
                            More About Us <i class="fa-solid fa-arrow-right-long ms-2"></i>
                        </a>
                        <a href="contact-us.php" class="btn btn-outline-dark px-4 py-3">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Tabbed Section (tabs.css + js/tabs.js) -->
    <section id="services" class="py-4 provide-section">
        <div class="container ">
            <div class="text-center mb-5">
                <div class="badge-tag-green badge-tag mb-2 text-white" style="background: rgba(16, 185, 129, 0.3);">Our Services</div>
                <h2 class="display-6 fw-bold font-montserrat">Services We Provide</h2>
                <p class="provide-lead mx-auto mb-0" style="max-width: 650px;">
                    1st-Recruit delivers top-tier recruiting services, helping companies of all sizes identify, attract, and hire the best candidates for their open positions with efficiency and expertise.
                </p>
            </div>

            <div class="tabbed-content">
                <!-- Tab Navigation -->
                <div class="tab-nav">
                    <button class="tab-btn active" data-target="#tab-staff-augmentation">Staff Augmentation</button>
                    <button class="tab-btn" data-target="#tab-consumer-products">Consumer Products &amp; Services</button>
                    <button class="tab-btn" data-target="#tab-manpower">Manpower Services</button>
                    <button class="tab-btn" data-target="#tab-legal-services">Legal Services</button>
                    <div class="tab-indicator"></div>
                </div>

                <!-- Tab Panels -->
                <div class="tab-content-wrapper">

                    <!-- 1. Staff Augmentation -->
                    <div class="tab-panel active" id="tab-staff-augmentation">
                        <div class="tab-img-container">
                            <img src="images/staff_augmentation.jpg" alt="Staff Augmentation" loading="lazy">
                        </div>
                        <div class="tab-card">
                            <h3>Staff Augmentation</h3>
                            <p>Skilled professionals delivered on demand, helping your business scale quickly and fill critical talent gaps efficiently.</p>
                            <ul class="tab-list">
                                <li><i class="fa-solid fa-circle-check"></i>Pre-vetted technical &amp; non-technical talent</li>
                                <li><i class="fa-solid fa-circle-check"></i>Rapid onboarding within days, not months</li>
                                <li><i class="fa-solid fa-circle-check"></i>Scale teams up or down as projects demand</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 2. Consumer Products & Services -->
                    <div class="tab-panel" id="tab-consumer-products">
                        <div class="tab-img-container">
                            <img src="images/consumer_products.jpg" alt="Consumer Products &amp; Services" loading="lazy">
                        </div>
                        <div class="tab-card">
                            <h3>Consumer Products &amp; Services</h3>
                            <p>Consumer products and services that enhance everyday business and retail operations with quality and trusted innovations.</p>
                            <ul class="tab-list">
                                <li><i class="fa-solid fa-circle-check"></i>Quality-assured product sourcing</li>
                                <li><i class="fa-solid fa-circle-check"></i>Retail &amp; distribution support</li>
                                <li><i class="fa-solid fa-circle-check"></i>Customer-centric service delivery</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 3. Manpower Services -->
                    <div class="tab-panel" id="tab-manpower">
                        <div class="tab-img-container">
                            <img src="images/manpower.jpg" alt="Manpower Services" loading="lazy">
                        </div>
                        <div class="tab-card">
                            <h3>Manpower Services</h3>
                            <p>Trained, industry-ready manpower that supports your daily operations and long-term business growth with full reliability.</p>
                            <ul class="tab-list">
                                <li><i class="fa-solid fa-circle-check"></i>Skilled, semi-skilled &amp; support workforce</li>
                                <li><i class="fa-solid fa-circle-check"></i>Background-verified and compliance-ready staff</li>
                                <li><i class="fa-solid fa-circle-check"></i>Short-term, seasonal, or long-term deployment</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 4. Legal Services -->
                    <div class="tab-panel" id="tab-legal-services">
                        <div class="tab-img-container">
                            <img src="images/career_banner.jpg" alt="Legal Services" loading="lazy">
                        </div>
                        <div class="tab-card">
                            <h3>Legal Services</h3>
                            <p>Expert legal guidance, compliance support, and dependable solutions for businesses and international candidates globally.</p>
                            <ul class="tab-list">
                                <li><i class="fa-solid fa-circle-check"></i>Employment &amp; immigration law advisory</li>
                                <li><i class="fa-solid fa-circle-check"></i>Contract drafting and compliance audits</li>
                                <li><i class="fa-solid fa-circle-check"></i>Regulatory filings and documentation</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div class="text-center mt-5">
                <a href="services.php" class="btn btn-magenta px-5 py-3 shadow">
                    View All Services <i class="fa-solid fa-arrow-right ms-2"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Co-Partners Section -->
    <section id="partners" class="py-4 bg-light partners-section">
        <div class="container ">
            <div class="text-center mb-4 section-head">
                <div class="badge-tag-purple badge-tag mb-2">Our Co-Partners</div>
                <h2 class="display-6 fw-bold text-dark-blue font-montserrat">Trusted Partners We Work With</h2>
                <p class="section-intro mx-auto mb-0" style="max-width: 640px;">
                    We collaborate with industry-leading organizations to deliver end-to-end recruitment, staffing, and business solutions to our clients worldwide.
                </p>
            </div>

            <div class="row g-4 justify-content-center">
                <!-- Partner 1 -->
                <div class="col-md-6 col-lg-5">
                    <a href="https://www.partner-one.com" target="_blank" rel="noopener noreferrer"
                        class="partner-card d-flex flex-column h-100 p-4 p-lg-5 text-decoration-none rounded-4 border shadow-sm position-relative"
                        aria-label="Visit Partner One website">
                        <div class="partner-logo d-flex align-items-center justify-content-center mb-4">
                            <!-- Replace with partner logo: <img src="images/partners/partner-one.png" alt="Partner One" class="img-fluid"> -->
                            <i class="fa-solid fa-building text-blue fa-2x"></i>
                        </div>
                        <h4 class="fw-bold text-dark-blue mb-2 font-montserrat">RCM</h4>
                        <p class="text-muted mb-4 flex-grow-1">
                            Strategic staffing and workforce solutions partner supporting enterprise clients across the United States.
                        </p>
                        <div class="d-flex align-items-center justify-content-between mt-auto">
                            <span class="partner-url small text-muted"><i class="fa-solid fa-globe me-2"></i>www.partner-one.com</span>
                            <span class="btn btn-sm btn-magenta rounded-2 px-3">
                                Visit Website <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                            </span>
                        </div>
                    </a>
                </div>

                <!-- Partner 2 -->
                <div class="col-md-6 col-lg-5">
                    <a href="https://www.partner-two.com" target="_blank" rel="noopener noreferrer"
                        class="partner-card partner-card-green d-flex flex-column h-100 p-4 p-lg-5 text-decoration-none rounded-4 border shadow-sm position-relative"
                        aria-label="Visit Partner Two website">
                        <div class="partner-logo d-flex align-items-center justify-content-center mb-4">
                            <!-- Replace with partner logo: <img src="images/partners/partner-two.png" alt="Partner Two" class="img-fluid"> -->
                            <i class="fa-solid fa-handshake text-green fa-2x"></i>
                        </div>
                        <h4 class="fw-bold text-dark-blue mb-2 font-montserrat">Health care</h4>
                        <p class="text-muted mb-4 flex-grow-1">
                            Technology and business services partner helping organizations scale with skilled global talent.
                        </p>
                        <div class="d-flex align-items-center justify-content-between mt-auto">
                            <span class="partner-url small text-muted"><i class="fa-solid fa-globe me-2"></i>www.partner-two.com</span>
                            <span class="btn btn-sm btn-green rounded-2 px-3">
                                Visit Website <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Who We Are / Expertise Section with Blue, Purple, Green accents -->
    <section class="py-4 provide-section" >
        <div class="container py-lg-5 position-relative z-index-2">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <div class="badge-tag-green badge-tag mb-3 text-white" style="background: rgba(16, 185, 129, 0.3);">Who We Are</div>
                    <h2 class="display-6 fw-bold mb-4 font-montserrat">
                        We Unlock Your Potential With <span class="gradient-text-blue-purple">Our Expertise</span>
                    </h2>
                    <p class="text-light opacity-75 lead mb-4" style="font-size: 1.05rem;">
                        We unlock your potential with our expertise, empowering businesses to grow faster, innovate confidently, and achieve goals through tailored solutions, skilled talent, and reliable support at every stage.
                    </p>
                    <div class="d-flex flex-wrap gap-4 mb-4">
                        <div class="p-3 rounded-3" style="background: rgba(255, 255, 255, 0.05); min-width: 140px; border-left: 3px solid #10b981;">
                            <h2 class="fw-bold text-green mb-0">98%</h2>
                            <small class="text-light opacity-75">Satisfied Customers</small>
                        </div>
                        <div class="p-3 rounded-3" style="background: rgba(255, 255, 255, 0.05); min-width: 140px; border-left: 3px solid #2563eb;">
                            <h2 class="fw-bold text-blue mb-0">95%</h2>
                            <small class="text-light opacity-75">Projects Completed</small>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        <a href="contact-us.php" class="btn btn-green px-4 py-3 shadow">
                            Get In Touch
                        </a>
                        <div class="ms-2">
                            <small class="text-light opacity-50 d-block">CALL NOW TO CONSULT</small>
                            <a href="tel:+1609563891" class="fw-bold text-white text-decoration-none fs-5">+1 609-563-891</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img src="images/about_team.jpg" alt="1st Recruit Team Expertise" class="img-fluid rounded-4 shadow-lg border border-secondary border-opacity-25 w-100" style="max-height: 420px; object-fit: cover;">
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-4 bg-light">
        <div class="container ">
            <div class="text-center mb-4 section-head">
                <div class="badge-tag-purple badge-tag mb-2">Testimonials</div>
                <h2 class="display-6 fw-bold text-dark-blue font-montserrat">
                    Our Client's Review
                </h2>
                <p class="section-intro mx-auto mb-0" style="max-width: 640px;">
                    Discover what our clients say about us—authentic testimonials showcasing trust, satisfaction, and the positive recruitment experiences we deliver every day.
                </p>
            </div>

            <div class="row g-4">
                <!-- Review 1 -->
                <div class="col-lg-6">
                    <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm border h-100 position-relative" style="border-top: 4px solid #2563eb !important;">
                        <div class="text-warning mb-3">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-muted fst-italic mb-4" style="font-size: 1.05rem;">
                            &ldquo;Umesh is professional, reliable, and communicative, delivering timely results with clear understanding and strong teamwork.&rdquo;
                        </p>
                        <div class="d-flex align-items-center gap-3">
                            <img src="images/avatar_michelle.jpg" alt="Michelle Richards" class="rounded-circle object-fit-cover" style="width: 54px; height: 54px; border: 2px solid #2563eb;">
                            <div>
                                <h6 class="fw-bold text-dark-blue mb-0">Michelle Richards</h6>
                                <small class="text-muted">The Scotts Miracle-Gro Company</small>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Review 2 -->
                <div class="col-lg-6">
                    <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm border h-100 position-relative" style="border-top: 4px solid #10b981 !important;">
                        <div class="text-warning mb-3">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-muted fst-italic mb-4" style="font-size: 1.05rem;">
                            &ldquo;I am very excited about my new position with 1st-Recruit and Capgemini. Thank you Umesh!&rdquo;
                        </p>
                        <div class="d-flex align-items-center gap-3">
                            <img src="images/avatar_christine.jpg" alt="Christine Chris" class="rounded-circle object-fit-cover" style="width: 54px; height: 54px; border: 2px solid #10b981;">
                            <div>
                                <h6 class="fw-bold text-dark-blue mb-0">Christine (Chris)</h6>
                                <small class="text-muted">Recruiter at Capgemini</small>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Review 3 -->
                <div class="col-lg-6">
                    <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm border h-100 position-relative" style="border-top: 4px solid #7c3aed !important;">
                        <div class="text-warning mb-3">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-muted fst-italic mb-4" style="font-size: 1.05rem;">
                            &ldquo;Umesh is professional, skilled, thorough, and reliable, consistently delivering strong recruitment results with excellent follow-through. Highly recommended.&rdquo;
                        </p>
                        <div class="d-flex align-items-center gap-3">
                            <img src="images/avatar_td.jpg" alt="IT Architect" class="rounded-circle object-fit-cover" style="width: 54px; height: 54px; border: 2px solid #7c3aed;">
                            <div>
                                <h6 class="fw-bold text-dark-blue mb-0">IT Architect</h6>
                                <small class="text-muted">TD Bank Financial Group</small>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Review 4 -->
                <div class="col-lg-6">
                    <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm border h-100 position-relative" style="border-top: 4px solid #2563eb !important;">
                        <div class="text-warning mb-3">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <p class="text-muted fst-italic mb-4" style="font-size: 1.05rem;">
                            &ldquo;Umesh was great at finding me a position and guiding me through the process. He will go above and beyond for you.&rdquo;
                        </p>
                        <div class="d-flex align-items-center gap-3">
                            <img src="images/avatar_ralph.jpg" alt="Ralph Maurmeier" class="rounded-circle object-fit-cover" style="width: 54px; height: 54px; border: 2px solid #2563eb;">
                            <div>
                                <h6 class="fw-bold text-dark-blue mb-0">Ralph Maurmeier</h6>
                                <small class="text-muted">Web Developer at Staffmark Group</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Certifications & State Registration Section -->
    <section class="py-4 cert-section">
        <div class="container text-center">
            <div class="badge-tag-green badge-tag mb-2 text-white" style="background: rgba(16, 185, 129, 0.3);">Compliance &amp; Trust</div>
            <h3 class="fw-bold text-white mb-4">Our Certifications &amp; Registrations</h3>
            <div class="cert-marquee marquee-container" aria-label="Certifications and registrations">
                <div class="marquee-content align-items-center">
                    <div class="cert-card p-3 shadow-sm">
                        <img src="images/certs/everify.svg" alt="E-Verify Employer" class="img-fluid" style="height: 55px;">
                    </div>
                    <div class="cert-card p-3 shadow-sm">
                        <img src="images/certs/iso.svg" alt="ISO 9001:2015" class="img-fluid" style="height: 55px;">
                    </div>
                    <div class="cert-card p-3 shadow-sm">
                        <img src="images/certs/duns.svg" alt="DUNS Registered" class="img-fluid" style="height: 55px;">
                    </div>
                    <div class="cert-card p-3 shadow-sm">
                        <img src="images/certs/delaware.svg" alt="State of Delaware" class="img-fluid" style="height: 55px;">
                    </div>
                    <div class="cert-card p-3 shadow-sm">
                        <img src="images/certs/pennsylvania.svg" alt="Pennsylvania Vendor" class="img-fluid" style="height: 55px;">
                    </div>
                    <div class="cert-card p-3 shadow-sm" aria-hidden="true">
                        <img src="images/certs/everify.svg" alt="" class="img-fluid" style="height: 55px;">
                    </div>
                    <div class="cert-card p-3 shadow-sm" aria-hidden="true">
                        <img src="images/certs/iso.svg" alt="" class="img-fluid" style="height: 55px;">
                    </div>
                    <div class="cert-card p-3 shadow-sm" aria-hidden="true">
                        <img src="images/certs/duns.svg" alt="" class="img-fluid" style="height: 55px;">
                    </div>
                    <div class="cert-card p-3 shadow-sm" aria-hidden="true">
                        <img src="images/certs/delaware.svg" alt="" class="img-fluid" style="height: 55px;">
                    </div>
                    <div class="cert-card p-3 shadow-sm" aria-hidden="true">
                        <img src="images/certs/pennsylvania.svg" alt="" class="img-fluid" style="height: 55px;">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact & Consultation Section -->
    <section id="contact" class="py-4 bg-light">
        <div class="container py-lg-4">
            <div class="row bg-white shadow-lg rounded-4 overflow-hidden border">
                <!-- Info Column (Blue-Purple Gradient) -->
                <div class="col-lg-5 p-5 text-white position-relative" style="background: linear-gradient(135deg, #0b1528 0%, #1e1b4b 60%, #064e3b 100%);">
                    <div class="badge-tag-green badge-tag mb-3 text-white" style="background: rgba(16, 185, 129, 0.35);">Get In Touch</div>
                    <h2 class="fw-bold mb-3 font-montserrat">Let's Discuss Your Talent Needs</h2>
                    <p class="text-light opacity-75 mb-4">
                        Reach out to discuss your specific technical staffing or career requirements. Our team delivers customized recruiting proposals within 24 hours.
                    </p>

                    <div class="d-flex align-items-start gap-3 mb-4">
                        <div class="text-blue mt-1"><i class="fa-solid fa-location-dot fa-xl"></i></div>
                        <div>
                            <strong class="d-block text-white">Headquarters - USA</strong>
                            <span class="text-light opacity-75 small">3 Germay Dr, Unit 4 #2031 Wilmington, DE 19804</span>
                        </div>
                    </div>

                    <div class="d-flex align-items-start gap-3 mb-4">
                        <div class="text-green mt-1"><i class="fa-solid fa-building fa-xl"></i></div>
                        <div>
                            <strong class="d-block text-white">Operations - India</strong>
                            <span class="text-light opacity-75 small">iTech Park, Unit No. 1016, Sector 49, Gurugram, Haryana 122018</span>
                        </div>
                    </div>

                    <div class="d-flex align-items-start gap-3 mb-4">
                        <div class="text-purple mt-1"><i class="fa-solid fa-phone fa-xl"></i></div>
                        <div>
                            <strong class="d-block text-white">Direct Phone</strong>
                            <a href="tel:+1609563891" class="text-white text-decoration-none">+1 609-563-891</a>
                        </div>
                    </div>

                    <div class="d-flex align-items-start gap-3">
                        <div class="text-blue mt-1"><i class="fa-solid fa-envelope fa-xl"></i></div>
                        <div>
                            <strong class="d-block text-white">Email Address</strong>
                            <a href="mailto:info@1st-recruit.com" class="text-white text-decoration-none">info@1st-recruit.com</a>
                        </div>
                    </div>
                </div>

                <!-- Form Column -->
                <div class="col-lg-7 p-4 p-md-5">
                    <h4 class="fw-bold text-dark-blue mb-2 font-montserrat">Send Us a Message</h4>
                    <p class="text-muted small mb-4">Fill out the form below and our recruitment director will contact you promptly.</p>
                    <form onsubmit="event.preventDefault(); alert('Thank you for contacting 1st Recruit LLC! Our team will reach out to you shortly.');">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="contactName" placeholder="Your Name" required>
                                    <label for="contactName">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="contactEmail" placeholder="name@company.com" required>
                                    <label for="contactEmail">Corporate Email</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="tel" class="form-control" id="contactPhone" placeholder="Phone Number" required>
                                    <label for="contactPhone">Phone Number</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <select class="form-select" id="serviceInterest">
                                        <option value="Staff Augmentation">Staff Augmentation</option>
                                        <option value="Flexible Staffing">Flexible Staffing</option>
                                        <option value="H1-B Visa Sponsorship">H1-B Visa Sponsorship</option>
                                        <option value="H1-B Visa Transfer">H1-B Visa Transfer</option>
                                        <option value="Manpower Services">Manpower Services</option>
                                        <option value="Looking For a Job">Looking For a Job</option>
                                    </select>
                                    <label for="serviceInterest">Area of Interest</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" id="contactMessage" placeholder="Your Message" style="height: 120px;" required></textarea>
                                    <label for="contactMessage">Staffing Requirements / Inquiries</label>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
                                <button type="submit" class="btn btn-magenta btn-lg w-100 py-3 shadow">
                                    Submit Request <i class="fa-solid fa-paper-plane ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <?php include 'includes/footer.php'; ?>
    <?php include 'includes/footerlink.php'; ?>
</body>

</html>
