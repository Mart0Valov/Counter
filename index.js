// selecting all the needed elements
const value = document.getElementById('value');
const btns = document.querySelectorAll('input');


const action = {
    Increase: (target) => {
        target.textContent = +target.textContent + 1;
    },
    
    Reset: (target) => {
        target.textContent = 0;
    },
    
    Decrease: (target) => {
        target.textContent = +target.textContent - 1;
    }
}


function onClick(ev) {
    action[ev.target.value](value);
}

btns.forEach(btn => {
    btn.addEventListener('click', onClick);
});