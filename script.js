// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Parallax effect for hero circles
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.05;
    
    const hero = document.querySelector('.hero');
    if (hero) {
        // We can't easily move pseudo-elements with JS, but we can move a container
        // For simplicity, let's just add a subtle tilt to the glass cards
        document.querySelectorAll('.glass').forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
                // Inside card
                const rotateX = (y - rect.height / 2) / 20;
                const rotateY = (x - rect.width / 2) / -20;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            } else {
                // Outside card - resetting to the scroll animation state if already visible
                if (card.style.opacity === '1') {
                    card.style.transform = 'translateY(0)';
                }
            }
        });
    }
});
