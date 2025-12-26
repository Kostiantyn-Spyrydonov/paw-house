const top = document.querySelector('.top');

function isDesktop() {
  return window.innerWidth >= 768;
}

export function scroll() {
  if (!isDesktop()) {
    top.classList.add('hidden');
    return;
  }

  if (window.scrollY > 400) {
    top.classList.remove('hidden');
  } else {
    top.classList.add('hidden');
  }
}

window.addEventListener('scroll', scroll);
window.addEventListener('resize', scroll);

top.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
