let stopwatchInterval, countdownInterval;
let stopwatchRunning = false;
let countdownRunning = false;
let remainingTime = 0;
let countdownInitialTime = 0;
let timeInput = [];

// Stopwatch Logic
document.getElementById('start-stopwatch').addEventListener('click', () => {
  if (!stopwatchRunning) {
    stopwatchRunning = true;
    let startTime = Date.now();
    stopwatchInterval = setInterval(() => {
      let elapsedTime = Date.now() - startTime;
      document.getElementById('stopwatch-time').innerText = formatTime(elapsedTime);
    }, 10);
    toggleStopwatchButtons();
  }
});

document.getElementById('stop-stopwatch').addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  toggleStopwatchButtons();
});

document.getElementById('reset-stopwatch').addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  document.getElementById('stopwatch-time').innerText = "00:00:00.000";
  toggleStopwatchButtons();
});

function toggleStopwatchButtons() {
  document.getElementById('start-stopwatch').disabled = stopwatchRunning;
  document.getElementById('stop-stopwatch').disabled = !stopwatchRunning;
  document.getElementById('reset-stopwatch').disabled = stopwatchRunning || document.getElementById('stopwatch-time').innerText === "00:00:00.000";
}

// Countdown Logic
document.querySelectorAll('#number-input button').forEach(button => {
  button.addEventListener('click', () => {
    timeInput.push(button.innerText);
    updateDisplay();
  });
});

document.getElementById('set-time').addEventListener('click', () => {
  countdownInitialTime = parseInputTime(timeInput);
  remainingTime = countdownInitialTime;
  document.getElementById('countdown-time').innerText = formatTime(remainingTime);
  document.getElementById('start-countdown').disabled = false;
  document.getElementById('clear-time').disabled = false;
  timeInput = [];
});

document.getElementById('clear-time').addEventListener('click', () => {
  timeInput = [];
  updateDisplay();
});

document.getElementById('start-countdown').addEventListener('click', () => {
  if (!countdownRunning && remainingTime > 0) {
    countdownRunning = true;
    countdownInterval = setInterval(() => {
      remainingTime -= 10;
      if (remainingTime <= 0) {
        endCountdown();
        clearInterval(countdownInterval);
        remainingTime = 0;
      }
      // document.getElementById('countdown-time').innerText = formatTime(remainingTime);
    }, 10);
    toggleCountdownButtons();
  }
});

document.getElementById('stop-countdown').addEventListener('click', () => {
  clearInterval(countdownInterval);
  countdownRunning = false;
  toggleCountdownButtons();
});

document.getElementById('reset-countdown').addEventListener('click', () => {
  clearInterval(countdownInterval);
  remainingTime = countdownInitialTime;
  document.getElementById('countdown-time').innerText = formatTime(remainingTime);
  countdownRunning = false;
  toggleCountdownButtons();
});

document.getElementById('set-time').disabled = true;

function updateCountdownButtons() {
  document.querySelectorAll('#number-input button').forEach(button => {
    button.disabled = countdownRunning;
  });
  document.getElementById('set-time').disabled = countdownRunning;
  document.getElementById('clear-time').disabled = countdownRunning;
}

function toggleCountdownButtons() {
  document.getElementById('start-countdown').disabled = countdownRunning;
  document.getElementById('stop-countdown').disabled = !countdownRunning;
  document.getElementById('reset-countdown').disabled = countdownRunning || remainingTime === 0;
  updateCountdownButtons();
}

function endCountdown() {
  countdownRunning = false;
  document.getElementById('countdown-time').innerText = "Time is over";
  toggleCountdownButtons();
  updateCountdownButtons();
}

// Helper Functions
function formatTime(ms) {
  let hours = Math.floor(ms / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);
  let milliseconds = ms % 1000;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
}

function pad(num, size = 2) {
  return ('000' + num).slice(-size);
}

function parseInputTime(inputArray) {
  let timeStr = inputArray.join('');
  let timeInMs = parseInt(timeStr) * 1000; // Assuming input in seconds for simplicity
  return timeInMs;
}

function updateDisplay() {
  let display = timeInput.join('');
  document.getElementById('countdown-time').innerText = display ? display : "00:00:00.000";
  document.getElementById('set-time').disabled = timeInput.length === 0;
}

