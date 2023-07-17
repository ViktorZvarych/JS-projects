(() => {
 
  const hours = document.getElementById('hours');
  let currentHour = Number(hours.textContent);
  console.log(currentHour);

  const minutes = document.getElementById('minutes');
  let currentMinute = Number(minutes.textContent);
  console.log(currentMinute);

  const seconds = document.getElementById('seconds');
  let currentSecond = Number(seconds.textContent);
  console.log(currentSecond);

function timer () {
  if (currentSecond < 60) {
    currentSecond++;
  seconds.textContent = currentSecond;
  }
  
  
}

  const btnStart = document.querySelector(".btn-start");
  const btnReset = document.querySelector(".btn-reset");
  const btnStop = document.querySelector(".btn-stop");

  btnStart.addEventListener("click", startTimer);
  btnReset.addEventListener("click", reset);
  btnStop.addEventListener("click", stopTimer);

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
