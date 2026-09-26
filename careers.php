<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    $pageTitle = "Careers & Open Jobs - 1st Recruit LLC";
    include 'includes/headlink.php';
    ?>
    <style>
        .filter-btn.active {
            background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%) !important;
            color: #ffffff !important;
            border-color: #2563eb !important;
        }
    </style>
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
                                <li class="breadcrumb-item active fw-bold text-green" aria-current="page">Careers</li>
                            </ol>
                        </nav>
                        <h1 class="display-5 fw-bold font-montserrat text-white mb-2">Careers &amp; <span class="gradient-text-blue-purple">Open Opportunities</span></h1>
                        <p class="text-light opacity-75 lead mb-0">Connecting top technical and business talent with premier enterprise employers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Jobs: Sticky Filter Sidebar + Listings -->
    <section class="py-4 bg-light jobs-section">
        <div class="container py-lg-4">
            <div class="row g-4">

                <!-- Sticky Filter Sidebar -->
                <aside class="col-lg-4">
                    <div class="jobs-filter-sidebar bg-white p-4 rounded-4 shadow-sm border">
                        <div class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                            <h5 class="fw-bold text-dark-blue mb-0 font-montserrat"><i class="fa-solid fa-sliders text-blue me-2"></i>Filter Jobs</h5>
                            <button type="button" class="btn btn-link btn-sm text-muted text-decoration-none p-0" onclick="resetJobFilters()">Reset</button>
                        </div>

                        <!-- Search -->
                        <label for="jobSearchInput" class="form-label small fw-bold text-muted text-uppercase">Keyword</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-light border-end-0 text-muted"><i class="fa-solid fa-magnifying-glass"></i></span>
                            <input type="text" id="jobSearchInput" class="form-control border-start-0" placeholder="Job title, skill, or keyword...">
                        </div>

                        <!-- Location -->
                        <label for="locationFilter" class="form-label small fw-bold text-muted text-uppercase">Location</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-light border-end-0 text-muted"><i class="fa-solid fa-location-dot"></i></span>
                            <select id="locationFilter" class="form-select border-start-0">
                                <option value="all">All Locations</option>
                                <option value="wilmington">Wilmington, DE (USA)</option>
                                <option value="gurugram">Gurugram (India)</option>
                                <option value="remote">Remote / Telecommute</option>
                            </select>
                        </div>

                        <!-- Job Type -->
                        <label class="form-label small fw-bold text-muted text-uppercase">Job Type</label>
                        <div class="d-flex flex-wrap gap-2 mb-4" id="jobTypeFilter">
                            <button class="btn btn-sm btn-outline-dark rounded-pill px-3 filter-btn active" data-type="all" onclick="selectType('all', this)">All Jobs</button>
                            <button class="btn btn-sm btn-outline-dark rounded-pill px-3 filter-btn" data-type="full-time" onclick="selectType('full-time', this)">Full Time</button>
                            <button class="btn btn-sm btn-outline-dark rounded-pill px-3 filter-btn" data-type="contract" onclick="selectType('contract', this)">Contract / C2C</button>
                            <button class="btn btn-sm btn-outline-dark rounded-pill px-3 filter-btn" data-type="remote" onclick="selectType('remote', this)">Remote</button>
                            <button class="btn btn-sm btn-outline-dark rounded-pill px-3 filter-btn" data-type="visa" onclick="selectType('visa', this)">H1-B Eligible</button>
                        </div>

                        <button type="button" class="btn btn-magenta w-100 py-2" onclick="filterJobs()">
                            Apply Filters <i class="fa-solid fa-filter ms-1"></i>
                        </button>

                        <div class="mt-4 pt-3 border-top small text-muted">
                            <i class="fa-solid fa-circle-info text-blue me-1"></i> Updated Daily &bull; Direct Enterprise Placements
                        </div>
                    </div>
                </aside>

                <!-- Job Listings -->
                <div class="col-lg-8">
                    <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-4 pb-2 border-bottom">
                        <h3 class="fw-bold text-dark-blue mb-0 font-montserrat">Current Open Positions (<span id="jobCount" class="text-blue">6</span>)</h3>
                        <span class="text-muted small">Showing all matching roles</span>
                    </div>

                    <div class="row g-4" id="jobListingsContainer">

                        <!-- Job 1 -->
                        <div class="col-12 job-item" data-type="contract visa" data-location="wilmington" data-title="it cloud architect aws azure">
                            <div class="job-card h-100 d-flex flex-column" style="border-left: 4px solid #2563eb;">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 class="fw-bold text-dark-blue mb-1">IT Cloud Architect</h5>
                                        <span class="text-muted small"><i class="fa-solid fa-building me-1"></i> Financial Services Client &bull; Wilmington, DE (Hybrid)</span>
                                    </div>
                                    <span class="job-badge" style="background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe;">Contract</span>
                                </div>
                                <p class="text-muted small flex-grow-1">
                                    Architect high-availability multi-cloud solutions (AWS &amp; Azure), microservices infrastructure, and enterprise zero-trust security postures for our banking partners.
                                </p>
                                <div class="d-flex flex-wrap gap-2 mb-3">
                                    <span class="badge bg-light text-dark border small">AWS</span>
                                    <span class="badge bg-light text-dark border small">Azure</span>
                                    <span class="badge bg-light text-dark border small">Terraform</span>
                                    <span class="badge border small text-green" style="background: #ecfdf5; border-color: #a7f3d0 !important;">H1-B Transfer OK</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                                    <span class="fw-bold text-blue">$130k - $160k / yr</span>
                                    <button class="btn btn-sm btn-magenta px-3 py-2" onclick="openApplyModal('IT Cloud Architect')">
                                        Apply Now <i class="fa-solid fa-arrow-right ms-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Job 2 -->
                        <div class="col-12 job-item" data-type="full-time remote" data-location="remote" data-title="senior full stack engineer react nodejs">
                            <div class="job-card h-100 d-flex flex-column" style="border-left: 4px solid #10b981;">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 class="fw-bold text-dark-blue mb-1">Senior Full Stack Engineer</h5>
                                        <span class="text-muted small"><i class="fa-solid fa-building me-1"></i> Enterprise SaaS &bull; Remote (USA)</span>
                                    </div>
                                    <span class="job-badge" style="background: #ecfdf5; color: #059669; border: 1px solid #a7f3d0;">Remote</span>
                                </div>
                                <p class="text-muted small flex-grow-1">
                                    Lead engineering sprints designing reactive web portals, Node.js API microservices, distributed caching, and clean modern responsive user interfaces.
                                </p>
                                <div class="d-flex flex-wrap gap-2 mb-3">
                                    <span class="badge bg-light text-dark border small">React</span>
                                    <span class="badge bg-light text-dark border small">Node.js</span>
                                    <span class="badge bg-light text-dark border small">TypeScript</span>
                                    <span class="badge bg-light text-dark border small">PostgreSQL</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                                    <span class="fw-bold text-green">$120k - $145k / yr</span>
                                    <button class="btn btn-sm btn-green px-3 py-2" onclick="openApplyModal('Senior Full Stack Engineer')">
                                        Apply Now <i class="fa-solid fa-arrow-right ms-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Job 3 -->
                        <div class="col-12 job-item" data-type="full-time" data-location="gurugram" data-title="technical talent recruiter us staffing sourcing">
                            <div class="job-card h-100 d-flex flex-column" style="border-left: 4px solid #7c3aed;">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 class="fw-bold text-dark-blue mb-1">Technical Talent Recruiter</h5>
                                        <span class="text-muted small"><i class="fa-solid fa-building me-1"></i> 1st Recruit LLC &bull; Gurugram, India</span>
                                    </div>
                                    <span class="job-badge" style="background: #f5f3ff; color: #7c3aed; border: 1px solid #ddd6fe;">Full Time</span>
                                </div>
                                <p class="text-muted small flex-grow-1">
                                    Drive US staffing cycles by sourcing, evaluating, and placing elite software engineers and IT specialists across our premier North American client network.
                                </p>
                                <div class="d-flex flex-wrap gap-2 mb-3">
                                    <span class="badge bg-light text-dark border small">US Staffing</span>
                                    <span class="badge bg-light text-dark border small">LinkedIn Recruiter</span>
                                    <span class="badge bg-light text-dark border small">Technical Screening</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                                    <span class="fw-bold text-purple">Competitive + Incentives</span>
                                    <button class="btn btn-sm btn-purple px-3 py-2" onclick="openApplyModal('Technical Talent Recruiter')">
                                        Apply Now <i class="fa-solid fa-arrow-right ms-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Job 4 -->
                        <div class="col-12 job-item" data-type="full-time visa" data-location="wilmington" data-title="h1b immigration coordinator legal compliance">
                            <div class="job-card h-100 d-flex flex-column" style="border-left: 4px solid #2563eb;">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 class="fw-bold text-dark-blue mb-1">H1-B Visa &amp; Immigration Coordinator</h5>
                                        <span class="text-muted small"><i class="fa-solid fa-building me-1"></i> 1st Recruit LLC &bull; Wilmington, DE</span>
                                    </div>
                                    <span class="job-badge" style="background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe;">Full Time</span>
                                </div>
                                <p class="text-muted small flex-grow-1">
                                    Facilitate petition drafting, Labor Condition Applications (LCA), USCIS compliance tracking, and smooth transitions for global technical talent.
                                </p>
                                <div class="d-flex flex-wrap gap-2 mb-3">
                                    <span class="badge bg-light text-dark border small">H1-B Filings</span>
                                    <span class="badge bg-light text-dark border small">LCA Compliance</span>
                                    <span class="badge bg-light text-dark border small">USCIS</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                                    <span class="fw-bold text-blue">$80k - $100k / yr</span>
                                    <button class="btn btn-sm btn-magenta px-3 py-2" onclick="openApplyModal('H1-B Visa Coordinator')">
                                        Apply Now <i class="fa-solid fa-arrow-right ms-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Job 5 -->
                        <div class="col-12 job-item" data-type="contract remote" data-location="remote" data-title="devops platform engineer kubernetes cicd">
                            <div class="job-card h-100 d-flex flex-column" style="border-left: 4px solid #10b981;">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 class="fw-bold text-dark-blue mb-1">DevOps &amp; Platform Engineer</h5>
                                        <span class="text-muted small"><i class="fa-solid fa-building me-1"></i> Healthcare Technology &bull; Remote</span>
                                    </div>
                                    <span class="job-badge" style="background: #ecfdf5; color: #059669; border: 1px solid #a7f3d0;">Remote</span>
                                </div>
                                <p class="text-muted small flex-grow-1">
                                    Deploy resilient Kubernetes clusters, streamline GitHub Actions CI/CD automation, and implement infrastructure as code (IaC) with Terraform.
                                </p>
                                <div class="d-flex flex-wrap gap-2 mb-3">
                                    <span class="badge bg-light text-dark border small">Kubernetes</span>
                                    <span class="badge bg-light text-dark border small">CI/CD</span>
                                    <span class="badge bg-light text-dark border small">Docker</span>
                                    <span class="badge bg-light text-dark border small">Terraform</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                                    <span class="fw-bold text-green">$75 - $90 / hr</span>
                                    <button class="btn btn-sm btn-green px-3 py-2" onclick="openApplyModal('DevOps Platform Engineer')">
                                        Apply Now <i class="fa-solid fa-arrow-right ms-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Job 6 -->
                        <div class="col-12 job-item" data-type="full-time" data-location="wilmington" data-title="business operations analyst vms msp">
                            <div class="job-card h-100 d-flex flex-column" style="border-left: 4px solid #7c3aed;">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 class="fw-bold text-dark-blue mb-1">Business Operations Analyst</h5>
                                        <span class="text-muted small"><i class="fa-solid fa-building me-1"></i> 1st Recruit LLC &bull; Wilmington, DE</span>
                                    </div>
                                    <span class="job-badge" style="background: #f5f3ff; color: #7c3aed; border: 1px solid #ddd6fe;">Full Time</span>
                                </div>
                                <p class="text-muted small flex-grow-1">
                                    Optimize recruitment pipeline analytics, evaluate vendor performance data, maintain client SLA compliance, and support executive reporting.
                                </p>
                                <div class="d-flex flex-wrap gap-2 mb-3">
                                    <span class="badge bg-light text-dark border small">Analytics</span>
                                    <span class="badge bg-light text-dark border small">PowerBI</span>
                                    <span class="badge bg-light text-dark border small">VMS / MSP</span>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                                    <span class="fw-bold text-purple">$75k - $95k / yr</span>
                                    <button class="btn btn-sm btn-purple px-3 py-2" onclick="openApplyModal('Business Operations Analyst')">
                                        Apply Now <i class="fa-solid fa-arrow-right ms-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Empty state -->
                    <div id="noJobsMessage" class="text-center py-5 d-none">
                        <i class="fa-solid fa-briefcase fa-3x text-muted mb-3"></i>
                        <h5 class="fw-bold text-dark-blue">No positions match your filters</h5>
                        <p class="text-muted mb-3">Try a different keyword, location, or job type.</p>
                        <button type="button" class="btn btn-outline-dark btn-sm rounded-pill px-4" onclick="resetJobFilters()">Reset Filters</button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Why Work with 1st Recruit LLC (Blue, Green, Purple) -->
    <section class="py-4 provide-section">
        <div class="container ">
            <div class="text-center mb-5 section-head">
                <div class="badge-tag-green badge-tag mb-2">Why Join Us</div>
                <h2 class="display-6 fw-bold text-dark-blue font-montserrat">Elevate Your Professional Journey</h2>
                <p class="section-intro text-white">When you partner with 1st Recruit LLC, you gain access to industry-defining technical assignments.</p>
            </div>
            <div class="row g-4 text-center">
                <div class="col-md-3">
                    <div class="p-4 bg-white rounded-3 shadow-sm border h-100" style="border-top: 3px solid #2563eb !important;">
                        <i class="fa-solid fa-landmark text-blue fa-2x mb-3"></i>
                        <h6 class="fw-bold text-dark-blue">Enterprise Clients</h6>
                        <p class="text-muted small mb-0">Direct access to Fortune 500 banks, tech giants, and innovative growth companies.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-4 bg-white rounded-3 shadow-sm border h-100" style="border-top: 3px solid #10b981 !important;">
                        <i class="fa-solid fa-passport text-green fa-2x mb-3"></i>
                        <h6 class="fw-bold text-dark-blue">Visa &amp; Mobility</h6>
                        <p class="text-muted small mb-0">Compliant H1-B transfers and dedicated legal documentation support throughout your career.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-4 bg-white rounded-3 shadow-sm border h-100" style="border-top: 3px solid #7c3aed !important;">
                        <i class="fa-solid fa-coins text-purple fa-2x mb-3"></i>
                        <h6 class="fw-bold text-dark-blue">Top Compensation</h6>
                        <p class="text-muted small mb-0">Highly competitive salary packages, on-time bi-weekly payroll, and performance bonuses.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-4 bg-white rounded-3 shadow-sm border h-100" style="border-top: 3px solid #2563eb !important;">
                        <i class="fa-solid fa-user-graduate text-blue fa-2x mb-3"></i>
                        <h6 class="fw-bold text-dark-blue">Career Growth</h6>
                        <p class="text-muted small mb-0">Continuous coaching, resume refinement, and direct interview prep with senior technical mentors.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- General Application Section -->
    <section class="py-4 bg-light border-top">
        <div class="container py-lg-4">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card p-4 p-md-5 border rounded-4 shadow-sm text-center" style="border-top: 5px solid #10b981 !important;">
                        <div class="badge-tag-purple badge-tag mb-3 mx-auto">Don't see your exact role?</div>
                        <h3 class="fw-bold text-dark-blue mb-2 font-montserrat">Submit Your Resume For Future Openings</h3>
                        <p class="text-muted mb-4">Our recruiters match thousands of skilled specialists every month. Send us your resume and we will contact you when a matching opportunity opens.</p>

                        <form onsubmit="event.preventDefault(); alert('Resume received! A recruiter from 1st Recruit LLC will review your profile and reach out.');" class="text-start">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="genName" placeholder="Full Name" required>
                                        <label for="genName">Full Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="genEmail" placeholder="name@email.com" required>
                                        <label for="genEmail">Email Address</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="tel" class="form-control" id="genPhone" placeholder="Phone Number" required>
                                        <label for="genPhone">Phone Number</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="genRole" placeholder="Primary Skill / Role" required>
                                        <label for="genRole">Primary Skill / Job Title</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="url" class="form-control" id="genLinkedin" placeholder="LinkedIn Profile URL">
                                        <label for="genLinkedin">LinkedIn Profile / Portfolio URL (Optional)</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control" id="genNotes" placeholder="Summary of experience" style="height: 100px;"></textarea>
                                        <label for="genNotes">Brief Summary of Experience / Visa Status</label>
                                    </div>
                                </div>
                                <div class="col-12 mt-4 text-center">
                                    <button type="submit" class="btn btn-magenta btn-lg px-5 py-3 shadow">
                                        Submit Resume to 1st Recruit <i class="fa-solid fa-paper-plane ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Apply Modal -->
    <div class="modal fade" id="applyModal" tabindex="-1" aria-labelledby="applyModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 rounded-4 shadow-lg">
                <div class="modal-header border-0 pb-0">
                    <div>
                        <span class="badge bg-green text-white mb-1">Direct Application</span>
                        <h5 class="modal-title fw-bold text-dark-blue" id="applyModalLabel">Apply for Position</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <form onsubmit="event.preventDefault(); alert('Application submitted successfully for ' + document.getElementById('modalJobTitle').value + '! We will be in touch shortly.'); bootstrap.Modal.getInstance(document.getElementById('applyModal')).hide();">
                        <input type="hidden" id="modalJobTitle" name="job_title">
                        <div class="mb-3">
                            <label class="form-label small fw-bold text-dark-blue">Position</label>
                            <input type="text" id="displayJobTitle" class="form-control bg-light" readonly>
                        </div>
                        <div class="mb-3">
                            <label class="form-label small fw-bold text-dark-blue">Your Full Name</label>
                            <input type="text" class="form-control" placeholder="John Doe" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label small fw-bold text-dark-blue">Email Address</label>
                            <input type="email" class="form-control" placeholder="john@example.com" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label small fw-bold text-dark-blue">Phone Number</label>
                            <input type="tel" class="form-control" placeholder="+1 (555) 000-0000" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label small fw-bold text-dark-blue">LinkedIn / Portfolio Link</label>
                            <input type="url" class="form-control" placeholder="https://linkedin.com/in/username">
                        </div>
                        <div class="mb-4">
                            <label class="form-label small fw-bold text-dark-blue">Cover Note / Key Qualifications</label>
                            <textarea class="form-control" rows="3" placeholder="Highlight your relevant experience..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-magenta w-100 py-3 shadow">
                            Submit Application <i class="fa-solid fa-paper-plane ms-1"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <?php include 'includes/footer.php'; ?>
    <?php include 'includes/footerlink.php'; ?>

    <script>
        let currentType = 'all';

        function selectType(type, btn) {
            currentType = type;
            document.querySelectorAll('#jobTypeFilter .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterJobs();
        }

        function filterJobs() {
            const query = (document.getElementById('jobSearchInput').value || '').toLowerCase().trim();
            const location = document.getElementById('locationFilter').value;
            const items = document.querySelectorAll('.job-item');
            let visibleCount = 0;

            items.forEach(item => {
                const title = item.getAttribute('data-title') || '';
                const types = item.getAttribute('data-type') || '';
                const loc = item.getAttribute('data-location') || '';

                const matchesQuery = !query || title.includes(query);
                const matchesLocation = (location === 'all') || (loc === location);
                const matchesType = (currentType === 'all') || types.includes(currentType);

                if (matchesQuery && matchesLocation && matchesType) {
                    item.style.display = '';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            document.getElementById('jobCount').innerText = visibleCount;

            const emptyState = document.getElementById('noJobsMessage');
            if (emptyState) emptyState.classList.toggle('d-none', visibleCount > 0);
        }

        function resetJobFilters() {
            document.getElementById('jobSearchInput').value = '';
            document.getElementById('locationFilter').value = 'all';
            const allBtn = document.querySelector('#jobTypeFilter .filter-btn[data-type="all"]');
            if (allBtn) selectType('all', allBtn); else filterJobs();
        }

        document.getElementById('jobSearchInput').addEventListener('input', filterJobs);
        document.getElementById('locationFilter').addEventListener('change', filterJobs);

        function openApplyModal(title) {
            document.getElementById('modalJobTitle').value = title;
            document.getElementById('displayJobTitle').value = title;
            const modal = new bootstrap.Modal(document.getElementById('applyModal'));
            modal.show();
        }
    </script>
</body>

</html>
