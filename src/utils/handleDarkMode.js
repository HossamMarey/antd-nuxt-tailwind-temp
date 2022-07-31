export const checkDarkMode = () => {
  if (!localStorage || !document) return false;
  const darkMode = localStorage.getItem('darkmode');
  // eslint-disable-next-line eqeqeq
  return !darkMode || darkMode !== '0';
};

export const initDarkMode = (isDark) => {
  if (!localStorage || !document) return false;
  const body = document.querySelector('body');
  const darkMode = checkDarkMode();
  if (!darkMode && !isDark) {
    body.classList.remove('dark');
    localStorage.setItem('darkmode', 0);
  } else {
    body.classList.add('dark');
    localStorage.setItem('darkmode', 1);
  }
  return darkMode;
};

export const toggleDarkMode = () => {
  if (!localStorage || !document) return false;
  const body = document.querySelector('body');
  const darkMode = checkDarkMode();
  if (darkMode) {
    body.classList.remove('dark');
    localStorage.setItem('darkmode', 0);
  } else {
    body.classList.add('dark');
    localStorage.setItem('darkmode', 1);
  }
  return darkMode;
};
