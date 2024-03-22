const botonModo = document.querySelector('.modo-toggle');
const body = document.body;

botonModo.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
