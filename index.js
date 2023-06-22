const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  const body = document.body;
  const isDarkMode = body.classList.contains('dark-theme');

  if (isDarkMode) {
    body.classList.remove('dark-theme');
  } else {
    body.classList.add('dark-theme');
  }
});