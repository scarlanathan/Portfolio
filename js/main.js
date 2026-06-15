/* =========================================================
   Nathan HAN — Portfolio interactions
   - Scroll-triggered reveals (animations start only when
     the element enters the viewport)
   - Sticky nav state + mobile menu
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Sticky nav background on scroll ---- */
    const nav = document.querySelector('.nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---- Mobile menu toggle ---- */
    const toggle = document.querySelector('.nav__toggle');
    const links  = document.querySelector('.nav__links');
    const closeMenu = () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
    };
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    /* ---- Scroll reveal: fire animation only when in view ---- */
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);   // animate once
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
    });

    document.querySelectorAll('.reveal, .timeline').forEach(el => observer.observe(el));
});
