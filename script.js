const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`[Wolves Racing Team] ${form.get('topic')}`);
  const body = encodeURIComponent(
    `Name: ${form.get('name')}\nE-Mail: ${form.get('email')}\nThema: ${form.get('topic')}\n\n${form.get('message')}`
  );
  // TODO: Replace with a real form service or backend before public launch.
  window.location.href = `mailto:kontakt@DEINE-DOMAIN.de?subject=${subject}&body=${body}`;
});
