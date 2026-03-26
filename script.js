document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.floating-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Subtle random lofi tilt
                const tilt = (Math.random() * 1.4 - 0.7).toFixed(2);
                entry.target.style.transform = `rotate(${tilt}deg)`;
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
});