// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, observerOptions);

document.querySelectorAll('.bento-item').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px) scale(0.98)';
    el.style.transition = `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.1}s`;
    observer.observe(el);
});

// Subtle tilt effect on mouse move for the hero card
const heroCard = document.querySelector('.hero-card');
if (heroCard) {
    heroCard.addEventListener('mousemove', (e) => {
        const rect = heroCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    heroCard.addEventListener('mouseleave', () => {
        heroCard.style.transform = 'translateY(0)';
    });
}
