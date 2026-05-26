// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.servicio-card').forEach((card, i) => {
  card.dataset.delay = i * 80;
  revealObserver.observe(card);
});

document.querySelectorAll('.reveal-item').forEach((el, i) => {
  el.dataset.delay = i * 100;
  revealObserver.observe(el);
});

// Nav mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Carrusel automático con dots
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function goToSlide(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));

setInterval(() => {
  goToSlide((current + 1) % slides.length);
}, 5000);

// Widget WhatsApp
const waBtn    = document.getElementById('waBtn');
const waPopup  = document.getElementById('waPopup');
const waCerrar = document.getElementById('waCerrar');
const waEnviar = document.getElementById('waEnviar');
const waMensaje = document.getElementById('waMensaje');

waBtn.addEventListener('click', () => {
  waPopup.classList.toggle('abierto');
  if (waPopup.classList.contains('abierto')) waMensaje.focus();
});

waCerrar.addEventListener('click', () => waPopup.classList.remove('abierto'));

function enviarWA() {
  const texto = waMensaje.value.trim();
  const msg = texto || 'Hola Dra. Andrea, quiero reservar un turno.';
  window.open('https://wa.me/59899229747?text=' + encodeURIComponent(msg), '_blank');
  waMensaje.value = '';
}

waEnviar.addEventListener('click', enviarWA);
waMensaje.addEventListener('keydown', (e) => { if (e.key === 'Enter') enviarWA(); });
