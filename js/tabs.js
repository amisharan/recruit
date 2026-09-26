document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");
    const indicator = document.querySelector(".tab-indicator");
    const tabbedContent = document.querySelector(".tabbed-content");
    const tabNav = document.querySelector(".tab-nav");
    const tabContentWrapper = document.querySelector(".tab-content-wrapper");

    let tabNavPinTrigger = null;

    if (!tabs.length || !panels.length || !indicator) return;

    // Check if vertical or horizontal layout based on CSS media queries mapping
    function isVertical() {
        return window.innerWidth > 768;
    }

    // Initialize indicator position
    function initIndicator() {
        const activeTab = document.querySelector(".tab-btn.active");
        if (activeTab) {
            if (isVertical()) {
                gsap.set(indicator, { height: activeTab.offsetHeight, y: activeTab.offsetTop, width: 3, x: 0 });
            } else {
                gsap.set(indicator, { width: activeTab.offsetWidth, x: activeTab.offsetLeft, height: 3, y: 0 });
            }
        }
    }

    // Initialize the GSAP state for active panel items
    function initPanels() {
        panels.forEach(panel => {
            if (!panel.classList.contains("active")) {
                gsap.set(panel, { display: "none", opacity: 0 });
            } else {
                gsap.set(panel, { display: "flex", opacity: 1 });
            }
        });
    }

    function getStickyTopOffset() {
        return 70;
    }

    function syncStickyOffsetVar() {
        const stickyTop = getStickyTopOffset();
        document.documentElement.style.setProperty("--tab-nav-mobile-top", `${stickyTop}px`);
        return stickyTop;
    }

    // Pin tab-nav until tab-content-wrapper scrolls past (desktop only).
    function initTabNavPin() {
        if (!window.ScrollTrigger || !tabbedContent || !tabNav || !tabContentWrapper) return;

        if (tabNavPinTrigger) {
            tabNavPinTrigger.kill();
            tabNavPinTrigger = null;
        }

        const stickyTop = syncStickyOffsetVar();
        const isDesktop = isVertical();

        tabNavPinTrigger = ScrollTrigger.create({
            trigger: tabbedContent,
            start: () => `top top+=${stickyTop}`,
            endTrigger: tabContentWrapper,
            end: () => `bottom top+=${stickyTop + tabNav.offsetHeight}`,
            pin: isDesktop ? tabNav : false,
            pinSpacing: false,
            invalidateOnRefresh: true
        });

        ScrollTrigger.refresh();
    }

    // Initial setup
    initIndicator();
    initPanels();
    syncStickyOffsetVar();
    initTabNavPin();

    // Resize event to update indicator so it aligns with text resize
    window.addEventListener("resize", () => {
        syncStickyOffsetVar();
        initIndicator();
        initTabNavPin();
    });

    window.addEventListener("load", () => {
        syncStickyOffsetVar();
        initTabNavPin();
    });

    window.addEventListener("scroll", () => {
        syncStickyOffsetVar();
    }, { passive: true });

    let isAnimating = false;

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            // Prevent multiple clicks breaking the animation
            if (this.classList.contains("active") || isAnimating) return;
            isAnimating = true;

            const targetId = this.getAttribute("data-target");
            const newPanel = document.querySelector(targetId);
            const currentTab = document.querySelector(".tab-btn.active");
            const currentPanel = document.querySelector(".tab-panel.active");

            // Move Indicator visually with bouncy spring feel
            if (isVertical()) {
                gsap.to(indicator, {
                    height: this.offsetHeight,
                    y: this.offsetTop,
                    width: 3,
                    x: 0,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.7)"
                });
            } else {
                gsap.to(indicator, {
                    width: this.offsetWidth,
                    x: this.offsetLeft,
                    height: 3,
                    y: 0,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.7)"
                });
            }

            // Update tab active classes
            currentTab.classList.remove("active");
            this.classList.add("active");

            // Determine direction for sliding animation
            const currentIndex = Array.from(tabs).indexOf(currentTab);
            const newIndex = Array.from(tabs).indexOf(this);
            const directionOffset = currentIndex < newIndex ? 50 : -50;
            
            // On vertical we slide vertically, on mobile slide horizontally
            const offsetProp = isVertical() ? 'y' : 'x';

            // Step 1: Fade out current panel content pieces
            const oldCard = currentPanel.querySelector(".tab-card");
            const oldImg = currentPanel.querySelector(".tab-img-container");

            gsap.to([oldCard, oldImg], {
                opacity: 0,
                [offsetProp]: -directionOffset,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    // Hide old panel totally and swap classes
                    currentPanel.classList.remove("active");
                    gsap.set(currentPanel, { display: "none" });

                    newPanel.classList.add("active");
                    gsap.set(newPanel, { display: "flex", opacity: 1 });

                    const newCard = newPanel.querySelector(".tab-card");
                    const newImg = newPanel.querySelector(".tab-img-container");

                    // Set initial state for new elements, hidden and offset
                    gsap.set([newCard, newImg], { opacity: 0, [offsetProp]: directionOffset });
                    
                    // Reset the non-animated axis just in case
                    const resetProp = isVertical() ? 'x' : 'y';
                    gsap.set([newCard, newImg], { [resetProp]: 0 });

                    // Step 2: Fade them in with a staggered bouncy animation
                    gsap.to([newImg, newCard], {
                        opacity: 1,
                        [offsetProp]: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "back.out(1.2)",
                        onComplete: () => {
                            if (window.ScrollTrigger) {
                                ScrollTrigger.refresh();
                            }
                            isAnimating = false; // unlock interaction
                        }
                    });
                }
            });
        });
    });
});
