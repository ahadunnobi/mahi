// Reveal animations on scroll
const revealOnScroll = () => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Initial state for sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Header hide/show on scroll
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
        header.style.height = '100px';
    } else {
        header.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        header.style.height = '80px';
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.top = '-100px';
    } else {
        header.style.top = '0';
    }
    lastScroll = currentScroll;
});
