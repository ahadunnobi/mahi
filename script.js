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
        header.style.background = 'rgba(10, 25, 47, 0.85)';
    } else {
        header.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        header.style.background = 'rgba(10, 25, 47, 0.95)';
    }
});


// --- Interactive JavaScript ---

// 1. GitHub routing for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent triggering if clicked on a specific link inside the card
        if(e.target.closest('a')) return;
        const repo = card.getAttribute('data-repo');
        if(repo) window.open(repo, '_blank');
    });
});

// 2. Gmail routing specifically to a compose draft
const emailBtn = document.getElementById('email-btn');
if(emailBtn) {
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mahi4192newaj@gmail.com', '_blank');
    });
}

// 3. Mouse glow effect on project cards
document.getElementById('projects').addEventListener('mousemove', e => {
    for(const card of document.querySelectorAll('.project-card')) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }
});

// 4. Typewriter effect for the hero subtitle
const textToType = 'I build things for the web.';
const typeWriterElement = document.getElementById('typewriter');
if(typeWriterElement) {
    let typeIndex = 0;
    function typeWriter() {
        if (typeIndex < textToType.length) {
            typeWriterElement.innerHTML += textToType.charAt(typeIndex);
            typeIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 1000);
}

