// selecting all the needed elements
const value = document.getElementById('value');
const btns = document.querySelectorAll('input');


const action = {
    Increase: (target, colour = 'green') => {
        const currentValue = +target.textContent;
        if (currentValue + 1 === 0) {
            target.style.color = 'black';
        } else if (currentValue >= 0) {
            target.style.color = colour;
        }
        target.textContent = currentValue + 1;
    },

    Reset: (target, colour = 'black') => {
        target.style.color = colour;
        target.textContent = 0;
    },

    Decrease: (target, colour = 'red') => {
        const currentValue = +target.textContent;
        if (currentValue - 1 === 0) {
            target.style.color = 'black';
        } else if (currentValue <= 0) {
            target.style.color = colour;
        }
        target.textContent = +target.textContent - 1;
    }
}


function onClick(ev) {
    action[ev.target.value](value);
}

btns.forEach(btn => {
    btn.addEventListener('click', onClick);
});