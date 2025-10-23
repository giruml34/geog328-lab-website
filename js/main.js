// Toggle mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('navLinks');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Auto-set year in footer
document.getElementById('year')?.append(new Date().getFullYear());
