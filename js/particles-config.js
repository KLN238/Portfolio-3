particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        color: { value: "#ffffff" },
        move: { enable: true, speed: 2 },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.5 }
    }
});
particlesJS("particles-js", {
    particles: {
      number: { value: 100 },
      size: { value: 3 },
      color: { value: "#ffffff" },
      move: { enable: true, speed: 2 },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }
    },
    interactivity: {
      detect_on: "canvas", // Active l'interaction sur le canvas
      events: {
        onhover: { enable: true, mode: "repulse" }, // Repousse les particules avec la souris
        onclick: { enable: true, mode: "push" },    // Ajoute des particules en cliquant
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 }, // Distance d'éloignement au survol
        push: { particles_nb: 4 }                 // Nombre de particules ajoutées au clic
      }
    }
  });
