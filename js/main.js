/* ═══ RAKO Reality — Shared Logic ═══ */
(function() {
    'use strict';

    /* ── Navbar scroll effect ── */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = () => {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ── Hamburger menu ── */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });
        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }

    /* ── Active nav link ── */
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ── Scroll animations (fade-in) ── */
    const fadeEls = document.querySelectorAll('.fade-in');
    if (fadeEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        fadeEls.forEach(el => observer.observe(el));
    }

    /* ── Animated stats counter ── */
    const statNumbers = document.querySelectorAll('[data-count]');
    if (statNumbers.length) {
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count);
                    const suffix = el.dataset.suffix || '';
                    const duration = 1500;
                    const start = performance.now();

                    function animate(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
                        const current = Math.round(eased * target);
                        el.textContent = current + suffix;
                        if (progress < 1) requestAnimationFrame(animate);
                    }
                    requestAnimationFrame(animate);
                    countObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        statNumbers.forEach(el => countObserver.observe(el));
    }

    /* ── Cookie banner ── */
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner && !localStorage.getItem('rako-cookies')) {
        setTimeout(() => cookieBanner.classList.add('show'), 1500);
        const acceptBtn = cookieBanner.querySelector('[data-cookie-accept]');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                localStorage.setItem('rako-cookies', 'accepted');
                cookieBanner.classList.remove('show');
            });
        }
    }

    /* ── Smooth scroll for anchor links ── */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const id = link.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ── Form handling ── */
    document.querySelectorAll('form[data-form]').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Odesílám...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'Odesláno ✓';
                btn.style.background = '#22c55e';
                form.reset();
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, 1000);
        });
    });

})();
