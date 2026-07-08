// ==========================================================================
// Portfolio interactions: scroll reveals, the river boat marker, skill bars
// ==========================================================================

document.getElementById('year').textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('.reveal');

if (prefersReducedMotion) {
  revealEls.forEach(el => el.classList.add('in-view'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => io.observe(el));
}

/* ---------- Skill bar fill on view ---------- */
const skillItems = document.querySelectorAll('.skill-item');

const skillIo = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-bar-fill');
      const level = entry.target.getAttribute('data-level');
      fill.style.width = level + '%';
      skillIo.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

skillItems.forEach(el => skillIo.observe(el));

/* ---------- Boat marker follows scroll along the river ---------- */
const boat = document.getElementById('boatMarker');
const track = document.getElementById('riverTrack');

function positionBoat() {
  if (!boat || !track) return;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollY = window.scrollY || window.pageYOffset;
  const progress = docHeight > 0 ? scrollY / docHeight : 0;
  const trackHeight = track.offsetHeight;
  const top = Math.min(Math.max(progress * trackHeight, 0), trackHeight - 20);
  boat.style.top = top + 'px';
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      positionBoat();
      ticking = false;
    });
    ticking = true;
  }
});

window.addEventListener('resize', positionBoat);
window.addEventListener('load', positionBoat);
positionBoat();

/* ---------- Smooth nav underline is CSS-only; ensure in-view hero on load ---------- */
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('in-view'));
});
