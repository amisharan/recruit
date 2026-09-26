<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    $pageTitle = "Contact Us - 1st Recruit LLC";
    include 'includes/headlink.php';
    ?>
</head>

<body>
    <?php include 'includes/header.php'; ?>

    <!-- Page Header Banner -->
    <section class="banner subpage-header-gap py-4" >
        <div class="container py-3">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="banner-content text-white">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-2">
                                <li class="breadcrumb-item"><a href="index.php" class="text-decoration-none text-light opacity-75">Home</a></li>
                                <li class="breadcrumb-item active fw-bold text-green" aria-current="page">Contact Us</li>
                            </ol>
                        </nav>
                        <h1 class="display-5 fw-bold font-montserrat text-white mb-2">Contact <span class="gradient-text-blue-purple">1st Recruit LLC</span></h1>
                        <p class="text-light opacity-75 lead mb-0">Have questions about talent hiring or careers? We are here to help.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Contact Section -->
    <section id="contact" class="py-4 ">
        <div class="container">
            <div class="row bg-white shadow-lg rounded-4 overflow-hidden border">

                <!-- Left Column: Global Offices & Contact Info (Blue, Green, Purple Palette) -->
                <div class="col-lg-5 p-5 text-white position-relative" style="background: linear-gradient(135deg, #0b1528 0%, #1e1b4b 60%, #064e3b 100%);">
                    <div class="badge-tag-green badge-tag mb-3 text-white" style="background: rgba(16, 185, 129, 0.35);">GET IN TOUCH</div>
                    <h2 class="fw-bold mb-3 font-montserrat">Have You Any Queries? Contact Us Now.</h2>
                    <p class="text-light opacity-75 mb-5 small">
                        Whether you are an enterprise seeking skilled technical talent or an IT professional looking for your next career role, our recruitment advisors are ready to assist.
                    </p>

                    <!-- Office 1: USA (Blue) -->
                    <div class="d-flex align-items-start gap-3 mb-4">
                        <div class="bg-blue rounded-circle text-white p-2 d-flex align-items-center justify-content-center" style="width: 44px; height: 44px; flex-shrink: 0;">
                            <i class="fa-solid fa-building-flag"></i>
                        </div>
                        <div>
                            <h6 class="fw-bold mb-1 text-white">Headquarters - USA</h6>
                            <p class="text-light opacity-75 small mb-0">
                                3 Germay Dr, Unit 4 #2031<br>Wilmington, DE 19804, United States
                            </p>
                        </div>
                    </div>

                    <!-- Office 2: India (Green) -->
                    <div class="d-flex align-items-start gap-3 mb-4">
                        <div class="bg-green rounded-circle text-white p-2 d-flex align-items-center justify-content-center" style="width: 44px; height: 44px; flex-shrink: 0;">
                            <i class="fa-solid fa-globe"></i>
                        </div>
                        <div>
                            <h6 class="fw-bold mb-1 text-white">Operations - India</h6>
                            <p class="text-light opacity-75 small mb-0">
                                iTech Park, Unit No. 1016, Sector 49<br>Gurugram, Haryana 122018, India
                            </p>
                        </div>
                    </div>

                    <!-- Phone Numbers (Purple) -->
                    <div class="d-flex align-items-start gap-3 mb-4">
                        <div class="bg-purple rounded-circle text-white p-2 d-flex align-items-center justify-content-center" style="width: 44px; height: 44px; flex-shrink: 0;">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <h6 class="fw-bold mb-1 text-white">Phone Numbers</h6>
                            <p class="text-light opacity-75 small mb-0">
                                Direct: <a href="tel:+1609563891" class="text-white text-decoration-none fw-bold">+1 609-563-891</a>
                            </p>
                        </div>
                    </div>

                    <!-- Mailing Address (Blue) -->
                    <div class="d-flex align-items-start gap-3">
                        <div class="bg-blue rounded-circle text-white p-2 d-flex align-items-center justify-content-center" style="width: 44px; height: 44px; flex-shrink: 0;">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                            <h6 class="fw-bold mb-1 text-white">Mailing Address</h6>
                            <p class="text-light opacity-75 small mb-0">
                                <a href="mailto:info@1st-recruit.com" class="text-white text-decoration-none">info@1st-recruit.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Interactive Form -->
                <div class="col-lg-7 p-4 p-md-5">
                    <h3 class="fw-bold text-dark-blue mb-2 font-montserrat">Send Us a Direct Message</h3>
                    <p class="text-muted small mb-4">Complete this form and our recruitment team will get back to you within 24 hours.</p>

                    <form onsubmit="event.preventDefault(); alert('Thank you! Your message has been sent to 1st Recruit LLC. We will reach out to you shortly.');">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="contactName" placeholder="Your Name" required>
                                    <label for="contactName">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="contactEmail" placeholder="name@example.com" required>
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
                                    <select class="form-select" id="inquiryReason">
                                        <option value="Hiring Talent">We Want To Hire Talent</option>
                                        <option value="Staff Augmentation">Staff Augmentation</option>
                                        <option value="Flexible Staffing">Flexible Staffing</option>
                                        <option value="H1-B Visa Sponsorship">H1-B Visa Sponsorship</option>
                                        <option value="H1-B Visa Transfer">H1-B Visa Transfer</option>
                                        <option value="Career Opportunities">I Am Looking For a Job</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                    </select>
                                    <label for="inquiryReason">Purpose of Inquiry</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="contactCompany" placeholder="Company / Organization Name">
                                    <label for="contactCompany">Company / Organization (If Applicable)</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" id="contactMessage" placeholder="Your message" style="height: 140px;" required></textarea>
                                    <label for="contactMessage">Your Message / Requirements</label>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
                                <button type="submit" class="btn btn-magenta btn-lg w-100 py-3 shadow">
                                    Send Message <i class="fa-solid fa-paper-plane ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>

    <!-- Google Map Embed / Location Section -->
    <section class="py-4 bg-light border-top">
        <div class="container text-center mb-4 section-head">
            <div class="badge-tag-purple badge-tag mb-2">Location</div>
            <h3 class="fw-bold text-dark-blue font-montserrat">Visit Our United States Headquarters</h3>
            <p class="section-intro small">3 Germay Dr, Unit 4 #2031 Wilmington, DE 19804</p>
        </div>
        <div class="container">
            <div class="rounded-4 overflow-hidden shadow-sm border" style="height: 380px;">
                <iframe
                    title="1st Recruit LLC Wilmington Office"
                    src="https://maps.google.com/maps?q=3%20Germay%20Dr%2C%20Unit%204%20%232031%20Wilmington%2C%20DE%2019804&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy">
                </iframe>
            </div>
        </div>
    </section>

    <?php include 'includes/footer.php'; ?>
    <?php include 'includes/footerlink.php'; ?>
</body>

</html>