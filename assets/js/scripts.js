document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('scrollToTop');
  const navLinks = document.querySelectorAll('.navbar-nav a');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const hamburger = document.querySelector('.hamburger');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        // Check if viewport is mobile (Bootstrap lg breakpoint)
        navbarToggler.click();
      }
    });
  });

  window.addEventListener('scroll', () => {
    if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Tutup navbar jika sedang terbuka pada saat scroll
    }
  });

  function toggleButtonVisibility() {
    if (window.scrollY > 50) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }

  function toggleInnerHTML() {
    const ariaExpandedValue = navbarToggler.getAttribute('aria-expanded');
    if (ariaExpandedValue === 'true') {
      hamburger.innerHTML = 'x'; // Ubah inner HTML jika navbar aktif
    } else {
      hamburger.innerHTML = '&#8801;'; // Kembalikan inner HTML jika navbar tidak aktif
    }
  }

  navbarToggler.addEventListener('click', () => {
    toggleInnerHTML();
  });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleButtonVisibility);
});

// Typing Animation
const roles = [
  'CEO',
  'CTO',
  'Entrepreneur',
  'Web Developer',
  'Backend Developer',
  'Frontend Developer',
  'Full Stack Developer',
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
  const currentRole = roles[roleIndex];
  const typedTextElement = document.getElementById('typed-text');

  if (isDeleting) {
    // Deleting text
    typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    // Typing text
    typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  // Handle completion of typing or deleting
  if (!isDeleting && charIndex === currentRole.length) {
    // Pause at the end of typing
    isDeleting = true;
    typingSpeed = 1000; // Wait before starting to delete
  } else if (isDeleting && charIndex === 0) {
    // Move to next role
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 200; // Pause before typing next word
  }

  setTimeout(typeText, typingSpeed);
}

// Start the typing animation
typeText();

// Ambil tombol dan tambahkan event listener
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});

if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}
