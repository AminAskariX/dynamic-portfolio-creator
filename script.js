const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => document.body.classList.toggle('dark-mode'));

const contactForm = document.getElementById('contact-form');
const status = document.getElementById('contact-status');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const recipient = (contactForm.dataset.contactEmail || '').trim();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!contactForm.reportValidity() || !name || !email || !message) {
    status.textContent = 'Please complete every field.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
    status.textContent = 'Contact email is not configured by the site owner.';
    return;
  }
  const subject = encodeURIComponent('Portfolio inquiry from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>');
  status.textContent = 'Your email application will open a draft. Please send it there.';
  window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
});
