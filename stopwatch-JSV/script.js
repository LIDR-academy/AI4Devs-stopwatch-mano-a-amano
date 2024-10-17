let timerElement = document.getElementById('timer');
let startButton = document.getElementById('start-button');
let clearButton = document.getElementById('clear-button');

let intervalId = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Format time to HH:MM:SS.mmm
function formatTime(ms) {
  let hours = Math.floor(ms / (1000 * 60 * 60)).toString().padStart(2, '0');
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  let seconds = Math.floor((ms % (1000 * 60)) / 1000).toString().padStart(2, '0');
  let milliseconds = (ms % 1000).toString().padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// Start the stopwatch
function startStopwatch() {
  console.log("Start button clicked");  // Debugging line
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    console.log("Starting timer...");  // Debugging line
    intervalId = setInterval(updateTimer, 10);  // Update every 10ms
    startButton.textContent = 'Pause';
    startButton.classList.remove('start');
    startButton.classList.add('blue');
    isRunning = true;
  } else {
    pauseStopwatch();
  }
}

// Pause the stopwatch
function pauseStopwatch() {
  clearInterval(intervalId);
  elapsedTime = Date.now() - startTime;
  console.log("Pausing timer...");  // Debugging line
  startButton.textContent = 'Continue';
  startButton.classList.remove('blue');
  startButton.classList.add('orange');
  isRunning = false;
}

// Reset the stopwatch
function clearStopwatch() {
  clearInterval(intervalId);
  timerElement.textContent = '00:00:00.000';
  console.log("Clearing timer...");  // Debugging line
  startButton.textContent = 'Start';
  startButton.classList.remove('blue', 'orange');
  startButton.classList.add('start');
  elapsedTime = 0;
  isRunning = false;
}

function updateTimer() {
  let currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  console.log(`Elapsed time: ${elapsedTime}`);  // Debugging line
  timerElement.textContent = formatTime(elapsedTime);
}

// Event listeners
startButton.addEventListener('click', startStopwatch);
clearButton.addEventListener('click', clearStopwatch);