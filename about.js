// Typing animation
document.addEventListener('DOMContentLoaded', function() {
  new Typed('#typed-text', {
    strings: ["Welcome!", "Hi, I'm Linda Achieng", "Front-end Web Developer"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  });
});

// Scroll reveal animations
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');

  function revealElements() {
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('visible');
        // For skill bars
        const skillProgress = element.querySelector('.skill-progress');
        if (skillProgress) {
          skillProgress.style.width = element.getAttribute('data-skill');
        }
      } else {
        element.classList.remove('visible');
        // For skill bars
        const skillProgress = element.querySelector('.skill-progress');
        if (skillProgress) {
          skillProgress.style.width = '0';
        }
      }
    });
  }

  window.addEventListener('scroll', revealElements);
  revealElements(); // Run it once on page load
});
