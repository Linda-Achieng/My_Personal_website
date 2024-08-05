document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const submitButton = form.querySelector('button[type="submit"]');

  // Form Validation and Feedback
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Simple form validation
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const subject = form.querySelector('#subject').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (name === '' || email === '' || subject === '' || message === '') {
          alert('Please fill out all fields.');
          return;
      }

      // Display success message
      alert('Thank you for reaching out, ' + name + '! Your message has been sent.');

      // Clear form fields
      form.reset();
  });

  // Social Media Icons Animation
  const socialIcons = document.querySelectorAll('.social-media a');

  socialIcons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
          icon.style.transform = 'scale(1.1)';
          icon.style.transition = 'transform 0.3s ease';
      });

      icon.addEventListener('mouseout', () => {
          icon.style.transform = 'scale(1)';
      });
  });
});
