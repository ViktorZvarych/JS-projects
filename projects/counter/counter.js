(() => {
  const display = document.querySelector(".current-value");
  let currentValue = Number(display.textContent);
  const btnMinus = document.querySelector(".btn-minus");
  const btnReset = document.querySelector(".btn-reset");
  const btnPlus = document.querySelector(".btn-plus");

  btnMinus.addEventListener("click", minusOne);
  btnReset.addEventListener("click", reset);
  btnPlus.addEventListener("click", plusOne);

  function minusOne() {
    console.log("-");
    currentValue--;
    display.textContent = currentValue;
  }

  function plusOne() {
    console.log("+");
    currentValue++;
    display.textContent = currentValue;
  }

  function reset() {
    console.log("0");
    currentValue = 0;
    display.textContent = currentValue;
  }
})();
