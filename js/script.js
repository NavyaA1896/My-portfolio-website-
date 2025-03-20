// Initialize AOS (Animate On Scroll Library)
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,  // Animation duration in milliseconds
        easing: "ease-in-out",
        once: true // Animation happens only once while scrolling down
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
