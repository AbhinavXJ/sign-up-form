const pswd = document.querySelector('#pswd');
const cpswd = document.querySelector('#cpswd');
const pss = document.querySelector('#pss');

function check() {
    if (pswd.value === '' || cpswd.value === '' || pswd.value !== cpswd.value) {
        pss.style.color = 'red';
        pss.innerHTML = '*passwords do not match';
        pswd.style.borderColor = 'red';
        cpswd.style.borderColor = 'red';
    } else {
        pss.innerHTML = '';
        pswd.style.borderColor = 'silver';
        cpswd.style.borderColor = 'silver';
    }
}

pswd.addEventListener('keyup', check);
cpswd.addEventListener('keyup', check);

check();