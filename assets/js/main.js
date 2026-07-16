/* Atelier Michel Denis — interactions légères, sans dépendance ni cookie */
(function () {
  'use strict';

  // --- Menu mobile ---
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Fermer le menu au clic sur un lien
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Sous-menu « Nos prestations » sur mobile (clic pour déplier) ---
  var subToggle = document.querySelector('.has-sub > a');
  if (subToggle) {
    subToggle.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width: 940px)').matches) {
        e.preventDefault();
        this.parentElement.classList.toggle('is-expanded');
      }
    });
  }

  // --- Apparition au défilement ---
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // --- Année dynamique dans le pied de page ---
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();
