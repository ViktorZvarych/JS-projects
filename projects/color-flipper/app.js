const colors = ["green", "red", "rgba(133,133,133)", "#f15025", "#f3f3f3"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    // console.log(document.body);
    // console.log(typeof document.body);
    // console.log(randomNumber);
    const randomNumber = getRandomNumber(); //get random number between 0-4
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}