const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor() {
  //I need random hex color, for example #f15025

  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  console.log(hexColor);
  color.textContent = hexColor;
}

function getRandomNumber() {
//   I need random number from 0 to 6
    let number = Math.floor(Math.random()*7);
    console.log(number);
    return number;
}
