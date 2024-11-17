document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");
    const scrollToTopButton = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navLinks.classList.add("fixed");
            scrollToTopButton.classList.add("show"); // Показываем кнопку
        } else {
            navLinks.classList.remove("fixed");
            scrollToTopButton.classList.remove("show"); // Прячем кнопку
        }
    });

    scrollToTopButton.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
});
