document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. Preloader (Anime.js)
    const preloader = document.getElementById("preloader");
    if (preloader) {
        document.body.style.overflow = 'hidden';

        const percentEl = preloader.querySelector('.preloader-percent');
        const statusEl = preloader.querySelector('.preloader-status-text');
        const statusMessages = ['Sourcing top talent', 'Matching the right fit', 'Creating success'];
        const progress = { value: 0 };

        const hidePreloader = () => {
            anime({
                targets: '#preloader',
                translateY: '-100%',
                easing: 'easeInOutExpo',
                duration: 900,
                complete: () => {
                    preloader.style.display = 'none';
                    document.body.style.overflow = '';
                    playHeroAnimations();
                }
            });
            anime({
                targets: '.preloader-inner',
                opacity: 0,
                translateY: -30,
                easing: 'easeInQuad',
                duration: 450
            });
        };

        const loaderTl = anime.timeline({ easing: 'easeOutExpo' });

        loaderTl
            .add({
                targets: '.loader-logo',
                opacity: [0, 1],
                scale: [0.85, 1],
                duration: 900
            })
            .add({
                targets: '.tagline-word',
                opacity: [0, 1],
                translateY: [14, 0],
                delay: anime.stagger(120),
                duration: 700
            }, '-=500')
            .add({
                targets: progress,
                value: 100,
                round: 1,
                easing: 'easeInOutCubic',
                duration: 1600,
                update: () => {
                    const v = Math.round(progress.value);
                    if (percentEl) percentEl.textContent = v + '%';
                    if (statusEl) {
                        const msg = statusMessages[Math.min(statusMessages.length - 1, Math.floor(v / 34))];
                        if (statusEl.textContent !== msg) statusEl.textContent = msg;
                    }
                }
            }, '-=600')
            .add({
                targets: '.preloader-progress-bar',
                width: ['0%', '100%'],
                easing: 'easeInOutCubic',
                duration: 1600
            }, '-=1600');

        loaderTl.finished.then(() => setTimeout(hidePreloader, 200));
    } else {
        // No preloader on inner pages: run hero animations immediately
        playHeroAnimations();
    }

    // 2. Header Scroll Effect & Back to Top Toggle
    const header = document.querySelector(".main-header");
    const backToTop = document.getElementById("backToTop");

    const swapLogos = document.querySelectorAll(".header-logo-swap");

    const updateHeaderOnScroll = () => {
        if (!header) return;
        const isScrolled = window.scrollY > 50;
        header.classList.toggle("scrolled", isScrolled);

        // Swap header logo: 2logo.png at top, logo.png after scroll
        swapLogos.forEach(img => {
            const src = isScrolled ? img.dataset.logoScrolled : img.dataset.logoTop;
            if (src && img.getAttribute("src") !== src) {
                img.setAttribute("src", src);
            }
        });

        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        }
    };

    window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
    updateHeaderOnScroll();

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 3. Smooth scrolling for nav links
    document.querySelectorAll('.nav-link, .btn[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId.startsWith('#')) return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = target.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navCollapse = document.querySelector('.navbar-collapse');
                if (navCollapse && navCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // 4. Hero Zoom Effect on Scroll (GSAP Scrub)
    const heroPinContainer = document.querySelector('.hero-pin-container');
    const heroBg = document.querySelector('.carousel-inner'); // Target inner to avoid scaling indicators
    const heroOverlay = document.querySelector('.hero-overlay');
    const heroContent = document.querySelector('.hero-content');

    if (heroPinContainer && heroBg) {
        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: heroPinContainer,
                start: "top top",
                end: "bottom top",
                scrub: 1.5 // highly smooth scrubbing
            }
        });

        // Scale and darken background
        heroTl.to(heroBg, { scale: 1.3, ease: "none" }, 0);
        heroTl.to(heroOverlay, { opacity: 0.9, ease: "none" }, 0);

        // Parallax and fade out content smoothly
        if (heroContent) {
            heroTl.to(heroContent, { y: 150, opacity: 0, ease: "none" }, 0);
        }
    }

    // 5. Hero Section Initial Content Animation (Anime.js)
    function playHeroAnimations() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            // Setup letter wrapping
            const wrapLetters = (node) => {
                if (node.nodeType === 3) {
                    const text = node.textContent;
                    if (text.trim() === '') return;
                    const fragment = document.createDocumentFragment();
                    for (let i = 0; i < text.length; i++) {
                        const char = text[i];
                        if (char === ' ') {
                            fragment.appendChild(document.createTextNode(' '));
                        } else {
                            const span = document.createElement('span');
                            span.classList.add('letter');
                            span.style.display = 'inline-block';
                            span.textContent = char;
                            fragment.appendChild(span);
                        }
                    }
                    node.parentNode.replaceChild(fragment, node);
                } else if (node.nodeType === 1) {
                    Array.from(node.childNodes).forEach(wrapLetters);
                }
            };

            wrapLetters(heroTitle);

            anime.set('.hero-title .letter', { translateY: 40, opacity: 0 });
            anime.set('.hero-subtitle', { translateY: 30, opacity: 0 });
            anime.set('.hero-btn', { translateY: 20, opacity: 0 });

            const tl = anime.timeline({
                easing: 'easeOutExpo',
                duration: 1200
            });

            tl.add({
                targets: '.hero-title .letter',
                translateY: [40, 0],
                opacity: [0, 1],
                delay: anime.stagger(15)
            })
                .add({
                    targets: '.hero-subtitle',
                    translateY: [30, 0],
                    opacity: [0, 1]
                }, '-=800')
                .add({
                    targets: '.hero-btn',
                    translateY: [20, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(100)
                }, '-=800');
        }
    }

    // 6. Premium Scroll Animations (GSAP)

    // About Section
    const aboutImageMain = document.querySelector('.img-main');
    const aboutImageFloat = document.querySelector('.img-floating');

    if (aboutImageMain) {
        gsap.fromTo(aboutImageMain,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: '.about-section', start: "top 75%" } }
        );
    }
    if (aboutImageFloat) {
        // Parallax movement (scrub tied to scroll)
        gsap.fromTo(aboutImageFloat,
            { y: 40 },
            { y: -30, ease: "none", scrollTrigger: { trigger: '.about-section', start: "top bottom", end: "bottom top", scrub: 1 } }
        );
        // Fade in when section enters viewport
        gsap.fromTo(aboutImageFloat,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: '.about-section', start: "top 65%", once: true } }
        );
    }

    const aboutTexts = gsap.utils.toArray('.about-text-col > *');
    if (aboutTexts.length > 0) {
        gsap.fromTo(aboutTexts,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: '.about-text-col', start: "top 80%" } }
        );
    }

    // Counters: count up from 0 to data-target when each counter scrolls into view
    document.querySelectorAll('.counter').forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target')) || 0;
        counter.textContent = '0';

        ScrollTrigger.create({
            trigger: counter,
            start: 'top 90%',
            once: true,
            onEnter: () => {
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: target,
                    duration: 2.5,
                    ease: 'power2.out',
                    onUpdate: () => {
                        counter.textContent = Math.round(obj.val).toLocaleString('en-US');
                    },
                    onComplete: () => {
                        counter.textContent = target.toLocaleString('en-US');
                    }
                });
            }
        });
    });

    // Services Slider (Swiper.js)
    const servicesSwiper = new Swiper('.services-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.service-next',
            prevEl: '.service-prev',
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // Testimonial Swiper (Shown within col-lg-8, 2 slides at a time)
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.test-next',
            prevEl: '.test-prev',
        },
        breakpoints: {
            // Mobile: 1, Desktop: 2
            992: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });

    // Services Cards (GSAP Stagger)
    const serviceCards = gsap.utils.toArray('.services-swiper .swiper-slide');
    if (serviceCards.length > 0) {
        gsap.fromTo(serviceCards,
            { opacity: 0, scale: 0.9, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.services-swiper',
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            }
        );
    }

    // Why Choose Us
    const chooseItems = gsap.utils.toArray('.choose-item');
    if (chooseItems.length > 0) {
        gsap.fromTo(chooseItems,
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: '.why-choose-us', start: "top 70%" } }
        );
    }
    const chooseText = document.querySelector('.choose-text');
    if (chooseText) {
        gsap.fromTo(chooseText,
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.why-choose-us', start: "top 70%" } }
        );
    }

    // Gallery
    const galleryItems = gsap.utils.toArray('.gallery-item');
    if (galleryItems.length > 0) {
        gsap.fromTo(galleryItems,
            { opacity: 0, scale: 0.9, y: 40 },
            { opacity: 1, scale: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: '.gallery-section', start: "top 80%" } }
        );
    }

    // Testimonials
    const testTextWrapper = document.querySelector('.test-text-col');
    const testCarousel = document.querySelector('.test-carousel-inner');
    if (testTextWrapper && testCarousel) {
        gsap.fromTo(testTextWrapper,
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.testimonials', start: "top 75%" } }
        );
        gsap.fromTo(testCarousel,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: '.testimonials', start: "top 75%" } }
        );
    }

    // Co-Partners cards
    const partnerCards = gsap.utils.toArray('.partner-card');
    if (partnerCards.length > 0) {
        gsap.fromTo(partnerCards,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: '.partners-section', start: "top 75%" } }
        );
    }

    // Verification Section
    const verificationForm = document.querySelector('#verification form');
    if (verificationForm) {
        gsap.fromTo('#verification h6, #verification h2, #verification p',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: '#verification', start: "top 80%" } }
        );
        gsap.fromTo(verificationForm,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out", scrollTrigger: { trigger: '#verification', start: "top 80%" } }
        );
    }

    // Contact Form
    const contactInfo = document.querySelector('.contact-info-col');
    const contactForm = document.querySelector('.contact-form-col');
    if (contactInfo && contactForm) {
        gsap.fromTo(contactInfo,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.contact-section', start: "top 80%" } }
        );
        gsap.fromTo(contactForm,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.contact-section', start: "top 80%" } }
        );

        const inputs = gsap.utils.toArray('.input-anim');
        gsap.fromTo(inputs,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, delay: 0.4, ease: "power3.out", scrollTrigger: { trigger: '.contact-section', start: "top 80%" } }
        );
    }

    // 7. Interactive Hover Effects (Anime.js micro-interactions)
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            anime({
                targets: btn,
                scale: 1.05,
                duration: 400,
                easing: 'easeOutElastic(1, .5)'
            });
        });
        btn.addEventListener('mouseleave', () => {
            anime({
                targets: btn,
                scale: 1,
                duration: 400,
                easing: 'easeOutElastic(1, .5)'
            });
        });
    });

    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card.querySelector('.icon-orb'),
                translateY: -8,
                scale: 1.15,
                duration: 500,
                easing: 'easeOutQuad'
            });
            anime({
                targets: card.querySelector('img'),
                scale: 1.08,
                duration: 600,
                easing: 'easeOutCubic'
            });
        });
        card.addEventListener('mouseleave', () => {
            anime({
                targets: card.querySelector('.icon-orb'),
                translateY: 0,
                scale: 1,
                duration: 500,
                easing: 'easeOutQuad'
            });
            anime({
                targets: card.querySelector('img'),
                scale: 1.0,
                duration: 600,
                easing: 'easeOutCubic'
            });
        });
    });

    // 8. Services Page Specific Animations
    const serviceGridItems = gsap.utils.toArray('.service-grid-item');
    if (serviceGridItems.length > 0) {
        gsap.fromTo(serviceGridItems,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '#core-solutions',
                    start: "top 75%"
                }
            }
        );
    }

    const processSteps = gsap.utils.toArray('.process-step');
    if (processSteps.length > 0) {
        gsap.fromTo(processSteps,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: '.process-step',
                    start: "top 85%"
                }
            }
        );
    }

    const ctaBanner = document.querySelector('.cta-banner');
    if (ctaBanner) {
        gsap.fromTo(ctaBanner,
            { opacity: 0, scale: 0.95, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.cta-banner',
                    start: "top 90%"
                }
            }
        );
    }
});
