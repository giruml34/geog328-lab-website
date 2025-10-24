// --- Mobile nav toggle ---
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// --- Back to top button ---
const backTop = document.getElementById('backTop');

// show/hide the button while scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backTop.style.display = 'inline-block';
  } else {
    backTop.style.display = 'none';
  }
});

// smooth scroll to top when clicked
backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Auto year update ---
const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
