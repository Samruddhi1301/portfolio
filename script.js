document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.floating-card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the active class to trigger the CSS animation
                entry.target.classList.add('active');

                // Apply a subtle random lofi tilt as originally designed
                const tilt = (Math.random() * 1.4 - 0.7).toFixed(2);
                entry.target.style.transform = `rotate(${tilt}deg)`;

                // Unobserve the card after it has appeared to optimize performance
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    cards.forEach(card => observer.observe(card));
});
