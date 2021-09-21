 const themeCheckbox = document.querySelector('#theme-switch-toggle');
 const body = document.body;

 const STORAGE_KEY = "body-theme";
 const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeCheckbox.addEventListener('change', onThemeCheckboxClick);

 const userTheme = localStorage.getItem(STORAGE_KEY) || Theme.LIGHT;
body.classList.add(userTheme);

 function onThemeCheckboxClick(event) {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);
  localStorage.setItem(STORAGE_KEY, body.classList)
}


if (userTheme === Theme.DARK) {
  themeCheckbox.checked = true;
}
export default{ themeCheckbox, body, STORAGE_KEY, Theme, userTheme, onThemeCheckboxClick}
