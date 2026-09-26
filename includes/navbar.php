<?php 
$currentPage = basename($_SERVER['PHP_SELF']); 
?>
<nav class="navbar navbar-expand-lg py-2" id="main-nav" style=" backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(37, 99, 235, 0.15);">
    <div class="container align-items-center">
        <!-- Mobile Logo (shown on mobile & tablet < lg) -->
        <a class="navbar-brand d-lg-none logo-link py-1 m-0" href="index.php">
            <img src="images/2logo.png" data-logo-top="images/2logo.png" data-logo-scrolled="images/1logo.png" alt="1st Recruit LLC" class="img-fluid mobile-logo header-logo-swap" style="height: 42px; max-width: 190px; object-fit: contain;">
        </a>

        <!-- Mobile Toggler -->
        <button class="navbar-toggler border-0 shadow-none ms-auto" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars-staggered fa-lg"></i>
        </button>

        <!-- Navigation Links -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav align-items-center gap-1 gap-lg-2 text-center my-3 my-lg-0">
                <li class="nav-item">
                    <a class="nav-link px-3 <?php echo ($currentPage == 'index.php') ? 'active fw-bold' : ''; ?>" href="index.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-3 <?php echo ($currentPage == 'about-us.php') ? 'active fw-bold' : ''; ?>" href="about-us.php">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-3 <?php echo ($currentPage == 'services.php') ? 'active fw-bold' : ''; ?>" href="services.php">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-3 <?php echo ($currentPage == 'careers.php') ? 'active fw-bold' : ''; ?>" href="careers.php">
                        Careers <span class="badge bg-green text-dark ms-1" style="font-size: 0.65rem;">Hiring</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-3 <?php echo ($currentPage == 'contact-us.php') ? 'active fw-bold' : ''; ?>" href="contact-us.php">Contact Us</a>
                </li>
                <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
                    <a href="careers.php" class="btn btn-sm btn-magenta px-3 py-2 rounded-2" style="font-size: 0.8rem;">
                        <i class="fa-solid fa-briefcase me-1"></i> Open Jobs
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>