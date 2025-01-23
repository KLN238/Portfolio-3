  // Ajoute des animations lorsque les éléments entrent dans la vue
  document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // Vue sur l'ensemble de la fenêtre
        threshold: 0.1, // Lorsque 10% de l'élément est visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Arrête d'observer une fois affiché
            }
        });
    }, observerOptions);

    const animatableElements = document.querySelectorAll(".animatable");
    animatableElements.forEach(element => {
        observer.observe(element);
    });
});

// Ajoute un effet de clic fluide pour les liens de navigation
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: "smooth",
            });
        }
    });
});