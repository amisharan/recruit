<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'includes/headlink.php'; ?>
</head>

<body>
    <?php include 'includes/header.php'; ?>

    <!-- Gallery Section -->


    <!-- Verification Section -->
    <section id="verification" class="verification-section py-4 bg-dark text-white text-center position-relative">
        <div class="bg-dark-blue-overlay" style="background: rgba(41, 50, 65, 0.95);"></div>
        <div class="container py-lg-5 position-relative z-index-2">
            <h6 class="text-gold text-uppercase fw-bold mb-3"><i class="fa-solid fa-id-card-clip me-2"></i>
                Employee
                Verification</h6>
            <h2 class="fw-bold display-5 mb-4 font-playfair">Verify Our Security Personnel</h2>
            <p class="mb-5 mx-auto text-light opacity-75 lead" style="max-width: 600px;">Enter the Ashank
                Security
                employee ID below to verify the authenticity and credential status of our guards. Your safety
                relies
                on trust and transparency.</p>
            <form class="d-flex flex-column flex-sm-row justify-content-center mx-auto gap-3"
                style="max-width: 500px;">
                <input type="text" class="form-control form-control-lg border-0 shadow-sm"
                    placeholder="ID (e.g. AS-1002)" style="background: rgba(255,255,255,0.1); color: white;"
                    required>
                <button class="btn btn-gold btn-lg px-4 shadow-sm" type="button"
                    onclick="alert('Verification feature implementation coming soon!');"><i
                        class="fa-solid fa-check me-2"></i>Verify</button>
            </form>
        </div>
    </section>

    <?php include 'includes/footer.php'; ?>
    <?php include 'includes/footerlink.php'; ?>
</body>

</html>