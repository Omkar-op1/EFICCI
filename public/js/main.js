// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close navbar collapse on mobile
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// // Initialize services carousel
// $(document).ready(function(){
//     $('.services-carousel').owlCarousel({
//         loop: true,
//         margin: 20,
//         nav: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             768: {
//                 items: 2
//             },
//             992: {
//                 items: 4
//             }
//         }
//     });
    
//     // Toggle view all services
//     $('a[href="#all-services"]').click(function(e) {
//         e.preventDefault();
//         $('#all-services').slideDown();
//         $('html, body').animate({
//             scrollTop: $('#all-services').offset().top - 100
//         }, 500);
//     });
// });



    $(document).ready(function(){
        $(".services-carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            autoplay: true,  // Enables auto-slide
            autoplayTimeout: 3000, // 3 seconds delay
            autoplayHoverPause: true,
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            responsive:{
                0:{ items: 1 },
                600:{ items: 2 },
                1000:{ items: 4 }
            }
        });
    
        // Fix arrow overlap by adjusting z-index
        $(".owl-nav").css("z-index", "1000");
    });
  