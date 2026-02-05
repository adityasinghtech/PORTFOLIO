/* ===============================
   Smooth Scroll Navigation
================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  });
});

/* ===============================
   Mobile Menu Toggle
================================ */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function closeMenu() {
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

/* ===============================
   Active Nav Link on Scroll
================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

/* ===============================
   Scroll Reveal Animation
================================ */
const revealItems = document.querySelectorAll(
  '.skill-card, .project-card, .about-content, .contact-form'
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach(item => {
  item.classList.add('reveal');
  revealObserver.observe(item);
});

/* ===============================
   Contact Form UX (Client-side)
================================ */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const button = contactForm.querySelector('.submit-button');
    const originalText = button.textContent;

    button.textContent = 'Message Sent ✓';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      contactForm.reset();
    }, 2000);
  });
}

/* ===============================
   Init
================================ */
document.addEventListener('DOMContentLoaded', () => {
  updateActiveLink();
  console.log('Portfolio loaded successfully');
});
