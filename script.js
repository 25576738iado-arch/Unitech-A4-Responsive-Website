/* A4 JavaScript features: persistent theme preference, enquiry validation and live message count. */
(() => {
  const themeButton = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('unitech-theme');
  if (savedTheme === 'dark') document.documentElement.dataset.theme = 'dark';
  if (themeButton) {
    const updateThemeButton = () => {
      const isDark = document.documentElement.dataset.theme === 'dark';
      themeButton.textContent = isDark ? 'Light mode' : 'Dark mode';
      themeButton.setAttribute('aria-pressed', String(isDark));
    };
    updateThemeButton();
    themeButton.addEventListener('click', () => {
      const isDark = document.documentElement.dataset.theme !== 'dark';
      if (isDark) document.documentElement.dataset.theme = 'dark';
      else delete document.documentElement.dataset.theme;
      localStorage.setItem('unitech-theme', isDark ? 'dark' : 'light');
      updateThemeButton();
    });
  }

  const form = document.querySelector('#enquiry-form');
  if (!form) return;
  const feedback = document.querySelector('#form-feedback');
  const message = document.querySelector('#message');
  const count = document.querySelector('#message-count');
  const date = document.querySelector('#date');
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  date.min = localToday;

  const updateCount = () => { count.textContent = `${message.value.length} / 1000 characters`; };
  message.addEventListener('input', updateCount);
  updateCount();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.className = 'form-feedback';
    feedback.textContent = '';
    if (!form.checkValidity()) {
      form.reportValidity();
      feedback.classList.add('error');
      feedback.textContent = 'Please check the highlighted fields and complete all required information correctly.';
      return;
    }
    feedback.classList.add('success');
    feedback.textContent = 'Demo validation successful. No enquiry was sent or stored because this project has no backend service.';
    feedback.focus?.();
  });
  form.addEventListener('reset', () => {
    feedback.textContent = '';
    window.setTimeout(updateCount, 0);
  });
})();
