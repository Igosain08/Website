// Trigger progress bar animations when skills section is in view
const skillsSection = document.querySelector('.skills-section');
const progressBars = document.querySelectorAll('.progress-fill');

const animateProgressBars = () => {
  progressBars.forEach(bar => {
    const skillLevel = bar.parentElement.getAttribute('data-skill-level');
    bar.style.width = skillLevel;
  });
};

// Intersection Observer to detect when the skills section is in view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgressBars();
    }
  });
}, { threshold: 0.5 });

observer.observe(skillsSection);
