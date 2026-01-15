// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animate skill circles when they come into view
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const circles = entry.target.querySelectorAll('.skill-circle .progress');
      circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        const circumference = 2 * Math.PI * 50;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const skillSection = document.querySelector('#tech-stack-section');
if (skillSection) {
  skillObserver.observe(skillSection);
}

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    
    console.log('Form submitted:', formData);
    
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
}

// Add scroll animations to elements
const fadeElements = document.querySelectorAll('.animate-fade-up, .animate-fade-left, .animate-fade-right');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translate(0)';
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  fadeObserver.observe(el);
});

// Nav button click handler
const hireMeBtn = document.querySelector('.btn');
if (hireMeBtn && hireMeBtn.textContent.includes('Hire Me')) {
  hireMeBtn.addEventListener('click', () => {
    document.querySelector('#contact-section').scrollIntoView({ behavior: 'smooth' });
  });
}
