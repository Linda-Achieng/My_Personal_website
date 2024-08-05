document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-item');

  // Filter Projects
  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          const filter = this.getAttribute('data-filter');

          projects.forEach(project => {
              if (filter === 'all' || project.getAttribute('data-category').includes(filter)) {
                  project.style.display = 'block';
              } else {
                  project.style.display = 'none';
              }
          });
      });
  });

  // Expand/Collapse Project Details
  projects.forEach(project => {
      project.addEventListener('click', () => {
          project.classList.toggle('expanded');
      });
  });

  // Hover Animations
  projects.forEach(project => {
      project.addEventListener('mouseover', () => {
          project.classList.add('hovered');
      });
      project.addEventListener('mouseout', () => {
          project.classList.remove('hovered');
      });
  });
});
