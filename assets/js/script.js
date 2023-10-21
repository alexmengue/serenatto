const inputCheck = document.querySelector('#change-theme');
const element = document.querySelector('body');

inputCheck.addEventListener('click', () => {
    const theme = inputCheck.checked ? 'dark' : 'light';
    element.setAttribute('data-bs-theme', theme);
});