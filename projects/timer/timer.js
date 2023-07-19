// (() => {
//   const hours = document.getElementById("hours");
//   let currentHour = Number(hours.textContent);
//   console.log(currentHour);

//   const minutes = document.getElementById("minutes");
//   let currentMinute = Number(minutes.textContent);
//   console.log(currentMinute);

//   const seconds = document.getElementById("seconds");
//   let currentSecond = Number(seconds.textContent);
//   console.log(currentSecond);

//   const btnStart = document.querySelector(".btn-start");
//   const btnReset = document.querySelector(".btn-reset");
//   const btnStop = document.querySelector(".btn-stop");

//   function startTimer() {
//       const interval = setInterval(timer, 1000);
//       return interval;
//   }

//   btnStart.addEventListener("click", startTimer);
//   btnReset.addEventListener("click", reset);
//   btnStop.addEventListener("click", stopTimer);

//   function timer() {
//     if (currentSecond < 59) {
//       seconds.textContent = ++currentSecond;
//     } else if ((currentSecond = 60 & (currentMinute < 59))) {
//       minutes.textContent = ++currentMinute;
//       currentSecond = 0;
//       seconds.textContent = currentSecond;
//     } else if ((currentMinute = 60)) {
//       hours.textContent = ++currentHour;
//       currentMinute = 0;
//       minutes.textContent = currentMinute;
//     }
//   }

//   function reset() {
//       console.log("0");
//       currentSecond = 0;
//       seconds.textContent = '00';
//       currentMinute = 0;
//       minutes.textContent = "00";
//       currentHour = 0;
//       hours.textContent = "00";
//   }

//   function stopTimer() {
//     console.log("stop");
//     clearInterval(timer);
//   }
// })();

(() => {
  const days = document.getElementById("days");
  let currentDay = Number(days.textContent);
  console.log(currentDay);
  
    const hours = document.getElementById("hours");
  let currentHour = Number(hours.textContent);
  console.log(currentHour);

  const minutes = document.getElementById("minutes");
  let currentMinute = Number(minutes.textContent);
  console.log(currentMinute);

  const seconds = document.getElementById("seconds");
  let currentSecond = Number(seconds.textContent);
  console.log(currentSecond);

  const btnStart = document.querySelector(".btn-start");
  const btnReset = document.querySelector(".btn-reset");
  const btnStop = document.querySelector(".btn-stop");

  function startTimer() {
    const interval = setInterval(timer, 1000);
    return interval;
  }

  btnStart.addEventListener("click", startTimer);
  btnReset.addEventListener("click", reset);
  btnStop.addEventListener("click", stopTimer);

  function timer() {
    if (currentSecond < 0) {
      seconds.textContent = --currentSecond;
    } else if ((currentSecond = 60 & (currentMinute < 59))) {
      minutes.textContent = --currentMinute;
      currentSecond = 0;
      seconds.textContent = currentSecond;
    } else if ((currentMinute = 60)) {
      hours.textContent = --currentHour;
      currentMinute = 0;
      minutes.textContent = currentMinute;
    }
  }

  function reset() {
    console.log("0");
    currentSecond = 0;
    seconds.textContent = "00";
    currentMinute = 0;
    minutes.textContent = "00";
    currentHour = 0;
    hours.textContent = "00";
  }

  function stopTimer() {
    console.log("stop");
    clearInterval(timer);
  }
})();