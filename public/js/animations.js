// Optimized AOS initialization
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 600, // Reduced from 800 for faster animations
        offset: 120,   // Trigger animations a bit earlier
        once: true,
        easing: 'ease-out-quad', // Smoother easing
        mirror: false,  // Better performance
        startEvent: 'load' // Wait for full load
    });
    
    // Preload images for smoother animations
    const images = document.querySelectorAll('img[data-aos]');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            new Image().src = src;
        }
    });
});