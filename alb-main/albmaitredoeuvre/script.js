document.addEventListener('DOMContentLoaded', function() {
  // Inject floating contact stack (WhatsApp + Facebook) on every page
  if (!document.querySelector('.float-stack')) {
    var stack = document.createElement('div');
    stack.className = 'float-stack';

    // Facebook
    var fbLink = document.createElement('a');
    fbLink.className = 'float-btn float-btn--fb';
    fbLink.href = 'https://www.facebook.com/Albmoe';
    fbLink.target = '_blank';
    fbLink.rel = 'noopener';
    fbLink.setAttribute('aria-label', 'Suivre ALB MOE sur Facebook');
    fbLink.innerHTML = '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12"/></svg>';
    stack.appendChild(fbLink);

    // WhatsApp
    var waLink = document.createElement('a');
    waLink.className = 'float-btn float-btn--wa';
    waLink.href = 'https://wa.me/262693881521?text=' + encodeURIComponent("Bonjour, je vous contacte depuis le site albmaitredoeuvre.fr concernant un projet.");
    waLink.target = '_blank';
    waLink.rel = 'noopener';
    waLink.setAttribute('aria-label', 'Contacter ALB MOE par WhatsApp');
    waLink.innerHTML = '<svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39-.078 0-.155-.022-.222-.077-1.073-.638-2.121-1.398-2.998-2.355-.207-.231-.43-.45-.63-.685-.078-.092-.119-.197-.119-.299 0-.282.622-.685.825-.93.114-.146.181-.32.181-.503 0-.135-.041-.27-.119-.397-.207-.34-.622-1.165-.871-1.475-.249-.31-.456-.297-.622-.297-.166 0-.331-.014-.498-.014-.166 0-.456.063-.685.297-.249.249-.954.93-.954 2.265s.975 2.625 1.114 2.81c.139.184 1.911 2.92 4.633 4.118.622.27 1.107.43 1.487.553.622.197 1.197.166 1.652.103.498-.077 1.518-.622 1.738-1.218.207-.622.207-1.151.146-1.265-.063-.119-.249-.197-.498-.34zM26.576 5.363c-2.812-2.815-6.494-4.371-10.426-4.371C8.058.992 1.79 7.262 1.79 15.301c0 2.6.689 5.118 1.999 7.343L1.715 30.6l8.165-2.143c2.142 1.169 4.55 1.785 7.005 1.785 8.092 0 14.36-6.27 14.36-14.31 0-3.85-1.503-7.46-4.224-10.17l-.435-.4z"/></svg>';
    stack.appendChild(waLink);

    document.body.appendChild(stack);
  }

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      toggle.classList.toggle('active');
    });
    nav.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 992) {
          nav.classList.remove('active');
          toggle.classList.remove('active');
        }
      });
    });
  }

  // Header scroll
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Scroll reveal
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.service-card, .portfolio-card, .blog-card, .contact-info-card, .split-image, .split-content, .process-step, .stat').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
