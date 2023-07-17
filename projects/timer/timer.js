(() => {
  const display = document.querySelector(".current-value");
  let currentValue = Number(
    document.querySelector(".current-value").textContent
  );
  const btnStart = document.querySelector(".btn-start");
  const btnReset = document.querySelector(".btn-reset");
  const btnStop = document.querySelector(".btn-stop");

  btnMinus.addEventListener("click", startTimer);
  btnReset.addEventListener("click", reset);
  btnPlus.addEventListener("click", stopTimer);

  function startTimer() {
    console.log("-");
    currentValue--;
    display.textContent = currentValue;
  }

  function reset() {
    console.log("0");
    currentValue = 0;
    display.textContent = currentValue;
    }
    
  function stopTimer() {
    console.log("+");
    currentValue++;
    display.textContent = currentValue;
  }
})();
