// selecting all the needed elements
const value = document.getElementById('value');
const btns = document.querySelectorAll('input');

function onClick(ev) {
    
}

btns.forEach(btn => {
    btn.addEventListener('click', onClick);
});