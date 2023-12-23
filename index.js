// selecting all the needed elements
const value = document.getElementById('value');
const btns = document.querySelectorAll('input');


const increase = (target) => {
    target.value = Number(target.value) + 1;
}

const reset = (target) => {
    target.value = 0;
}

const decrease = (target) => {
    target.value = Number(target.value) - 1;
}

function onClick(ev) {

}

btns.forEach(btn => {
    btn.addEventListener('click', onClick);
});