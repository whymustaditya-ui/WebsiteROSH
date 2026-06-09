/* ROSH Plastic — interactions: sticky nav, mobile menu, FAQ accordion, scroll reveal */
(function () {
  // sticky nav background on scroll
  var nav = document.querySelector('.nav');
  var onScroll = function () {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu
  var burger = document.querySelector('.nav-burger');
  var menu = document.querySelector('.mobile-menu');
  var scrim = document.querySelector('.scrim');
  var closeBtn = document.querySelector('.mm-close');
  function openMenu() { menu.classList.add('open'); scrim.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeMenu() { menu.classList.remove('open'); scrim.classList.remove('open'); document.body.style.overflow = ''; }
  if (burger) burger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (scrim) scrim.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // scroll reveal
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
