document.addEventListener('DOMContentLoaded', function() {
  // Typing Effect
  const text = "Hi, I'm Linda Achieng";
  let index = 0;

  function type() {
    if (index < text.length) {
      document.getElementById('typing-effect').innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 90);
    }
  }

  type();

  // Scroll to Top Button
  const scrollToTopButton = document.getElementById('scroll-to-top');

  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  };

  scrollToTopButton.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
