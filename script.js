(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('nav-open') ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('nav-open'));
    });
  }

  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      setTimeout(() => {
        form.innerHTML = '<div style="text-align:center;padding:32px;"><h3 style="color:var(--brown-deep);margin-bottom:8px;">Thank you.</h3><p style="color:var(--brown-rich);">We\'ll be in touch shortly.</p></div>';
      }, 700);
    });
  });
})();
