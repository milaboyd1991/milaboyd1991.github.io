// Mobile nav toggle. Auto injects a hamburger button into .nav,
// toggles .is-open on .nav so the CSS handles the open and close state.
(function(){
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const container = nav.querySelector('.container');
  const navLinks = nav.querySelector('.nav-links');
  if (!container || !navLinks) return;

  const btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Open menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', navLinks.id || 'site-nav-links');
  btn.innerHTML = '<span></span><span></span><span></span>';

  if (!navLinks.id) navLinks.id = 'site-nav-links';

  const cta = container.querySelector('.nav-cta');
  if (cta) container.insertBefore(btn, cta);
  else container.appendChild(btn);

  btn.addEventListener('click', function(){
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
    });
  });

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && nav.classList.contains('is-open')){
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
      btn.focus();
    }
  });
})();
