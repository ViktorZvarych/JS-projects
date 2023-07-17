const display = document.querySelector('.current-value');
let currentValue = Number((document.querySelector('.current-value')).textContent);
const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');

btnMinus.addEventListener('click', minusOne);
btnPlus.addEventListener('click', plusOne);

function minusOne () {
    console.log('-');
    currentValue --;
    display.textContent = currentValue;
}

function plusOne () {
    console.log('+');
    currentValue ++;
    display.textContent = currentValue;
}
