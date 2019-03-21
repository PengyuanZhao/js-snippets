/*
html {
  scroll-behavior: smooth;
}

window.scrollTo({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

window.scrollBy({
  top: 100,
  left: 0,
  behavior: 'smooth'
});

document.querySelector('.div').scrollIntoView({
  behavior: 'smooth'
});

*/

(function() {
  document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]:not([href="#"])')) {
      if (
        location.hostname !== e.target.hostname ||
        location.pathname.replace(/^\//, '') !== e.target.pathname.replace(/^\//, '')
      ) {
        return;
      }
      const target = document.querySelector(e.target.hash);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop, left: 0, behavior: 'smooth' });
      }
    }
  });
})();
