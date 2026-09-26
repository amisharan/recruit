<?php $isHomePage = (basename($_SERVER['PHP_SELF']) == 'index.php'); ?>
<?php if ($isHomePage): ?>
<!-- Preloader (Home page only) -->
<div id="preloader" class="preloader">
    <div class="preloader-glow preloader-glow-blue"></div>
    <div class="preloader-glow preloader-glow-purple"></div>
    <div class="preloader-glow preloader-glow-green"></div>

    <div class="preloader-inner">
        <!-- Orbiting talent dots around the logo -->
        <div class="preloader-orbit">
            <span class="orbit-ring orbit-ring-1"><i class="orbit-dot orbit-dot-blue"></i></span>
            <span class="orbit-ring orbit-ring-2"><i class="orbit-dot orbit-dot-purple"></i></span>
            <span class="orbit-ring orbit-ring-3"><i class="orbit-dot orbit-dot-green"></i></span>
            <img src="images/2logo.png" alt="1st Recruit LLC Logo" class="loader-logo">
        </div>

        <!-- Tagline -->
        <p class="preloader-tagline font-montserrat">
            <span class="tagline-word">Connecting</span>
            <span class="tagline-word">Talent.</span>
            <span class="tagline-word">Creating</span>
            <span class="tagline-word">Success.</span>
        </p>

        <!-- Progress -->
        <div class="preloader-progress">
            <div class="preloader-progress-bar"></div>
        </div>
        <div class="preloader-status">
            <span class="preloader-status-text">Sourcing top talent</span>
            <span class="preloader-percent">0%</span>
        </div>
    </div>
</div>
<?php endif; ?>

<!-- Header Wrapper -->
<header class="fixed-top w-100 main-header z-index-3 <?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? '' : 'subpage-header-solid'; ?>">
    <!-- Top Contact Bar -->
    <div class="top-header py-2 d-none d-lg-block" >
        <div class="container">
            <div class="d-flex justify-content-between align-items-center small">
                <div class="d-flex align-items-center gap-4">
                    <a class="align-items-center logo-link py-1" href="index.php">
                        <img src="images/2logo.png" data-logo-top="images/2logo.png" data-logo-scrolled="images/1logo.png" alt="1st Recruit LLC" class="img-fluid header-logo-swap" style="max-width: 240px; object-fit: contain;">
                    </a>
                </div>
                <div class="d-flex align-items-center gap-4">
                    <span><i class="fa-solid fa-phone me-2"></i><strong>Call Us:</strong> <a href="tel:+1609563891" class="text-decoration-none">+1 609-563-891</a></span>
                    <span><i class="fa-solid fa-envelope me-2"></i><strong>Email:</strong> <a href="mailto:info@1st-recruit.com" class="text-decoration-none">info@1st-recruit.com</a></span>
                    <span class="d-none d-xl-inline"><i class="fa-solid fa-location-dot me-2"></i>Wilmington, DE (USA) &amp; Gurugram (India)</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Sleek Navbar (Responsive Logo & Toggler) -->
    <?php include 'navbar.php'; ?>
</header>