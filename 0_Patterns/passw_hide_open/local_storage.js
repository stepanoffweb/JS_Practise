const change = document.querySelector('.change');
const passw = document.querySelector('.password');

// показваем введенный пароль при нажатии checkbox
change.addEventListener('change', () => {
    passw.type = change.checked ? 'text' : 'password';
    });