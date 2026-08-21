// ============================================
// VIGITEC360 — interações
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    /* --- header muda de fundo ao rolar --- */
    const header = document.getElementById('site-header');
    const onScroll = () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* --- menu mobile --- */
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('open');
            menuToggle.classList.toggle('open', isOpen);
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // fecha o menu ao clicar em qualquer link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* --- reveal on scroll --- */
    const reveals = document.querySelectorAll('[data-reveal]');

    if ('IntersectionObserver' in window && reveals.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px'
        });

        reveals.forEach(el => observer.observe(el));
    } else {
        // fallback: mostra tudo direto
        reveals.forEach(el => el.classList.add('in-view'));
    }

});