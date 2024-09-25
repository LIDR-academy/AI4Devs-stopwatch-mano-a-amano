let stopwatchInterval, countdownInterval;
let elapsedTime = 0, countdownTime = 0, selectedCountdownTime = 0;
let stopwatchRunning = false, countdownRunning = false;

document.getElementById('selectStopwatch').addEventListener('click', () => {
  document.getElementById('menu').classList.add('hidden');
  document.getElementById('stopwatch').classList.remove('hidden');
});

document.getElementById('selectCountdown').addEventListener('click', () => {
  document.getElementById('menu').classList.add('hidden');
  document.getElementById('countdown').classList.remove('hidden');
});

document.getElementById('backToMenu').addEventListener('click', () => {
  document.getElementById('stopwatch').classList.add('hidden');
  document.getElementById('menu').classList.remove('hidden');
  resetStopwatch();
});

document.getElementById('backToMenuCountdown').addEventListener('click', () => {
  document.getElementById('countdown').classList.add('hidden');
  document.getElementById('menu').classList.remove('hidden');
  resetCountdown();
});

function updateStopwatchDisplay() {
  const time = new Date(elapsedTime);
  const formattedTime = time.toISOString().substr(11, 8);
  document.getElementById('stopwatchTime').textContent = formattedTime;
  document.getElementById('stopwatchMilliseconds').textContent = (elapsedTime % 1000).toString().padStart(3, '0');
  document.title = formattedTime;
}

function startStopwatch() {
  stopwatchRunning = true;
  stopwatchInterval = setInterval(() => {
    elapsedTime += 10;
    updateStopwatchDisplay();
  }, 10);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  elapsedTime = 0;
  stopwatchRunning = false;
  updateStopwatchDisplay();
  resetStopwatchControls();
}

function resetStopwatchControls() {
  document.getElementById('startStopwatch').classList.remove('hidden');
  document.getElementById('pauseStopwatch').classList.add('hidden');
  document.getElementById('continueStopwatch').classList.add('hidden');
}

document.getElementById('startStopwatch').addEventListener('click', () => {
  startStopwatch();
  document.getElementById('startStopwatch').classList.add('hidden');
  document.getElementById('pauseStopwatch').classList.remove('hidden');
});

document.getElementById('pauseStopwatch').addEventListener('click', () => {
  pauseStopwatch();
  document.getElementById('pauseStopwatch').classList.add('hidden');
  document.getElementById('continueStopwatch').classList.remove('hidden');
});

document.getElementById('continueStopwatch').addEventListener('click', () => {
  startStopwatch();
  document.getElementById('continueStopwatch').classList.add('hidden');
  document.getElementById('pauseStopwatch').classList.remove('hidden');
});

document.getElementById('clearStopwatch').addEventListener('click', resetStopwatch);

function setCountdownTime() {
  const hours = parseInt(document.getElementById('hours').value, 10) || 0;
  const minutes = parseInt(document.getElementById('minutes').value, 10) || 0;
  const seconds = parseInt(document.getElementById('seconds').value, 10) || 0;
  countdownTime = ((hours * 3600) + (minutes * 60) + seconds) * 1000; // convert to milliseconds
  selectedCountdownTime = countdownTime;
  updateCountdownDisplay();
}

document.getElementById('setCountdownTime').addEventListener('click', setCountdownTime);

function updateCountdownDisplay() {
  const time = new Date(countdownTime);
  const formattedTime = time.toISOString().substr(11, 8);
  document.getElementById('countdownTime').textContent = formattedTime;
  document.getElementById('countdownMilliseconds').textContent = (countdownTime % 1000).toString().padStart(3, '0');
  document.title = formattedTime;

  // Update progress bar
  const progress = ((selectedCountdownTime - countdownTime) / selectedCountdownTime) * 100;
  document.getElementById('countdownProgressBar').value = progress;
}

function startCountdown() {
  countdownRunning = true;
  countdownInterval = setInterval(() => {
    countdownTime -= 10;
    if (countdownTime <= 0) {
      clearInterval(countdownInterval);
      playSound();
      countdownTime = 0;
    }
    updateCountdownDisplay();
  }, 10);
}

function pauseCountdown() {
  clearInterval(countdownInterval);
  countdownRunning = false;
}

function resetCountdown() {
  clearInterval(countdownInterval);
  countdownTime = selectedCountdownTime;
  countdownRunning = false;
  updateCountdownDisplay();
  resetCountdownControls();
}

function resetCountdownControls() {
  document.getElementById('startCountdown').classList.remove('hidden');
  document.getElementById('pauseCountdown').classList.add('hidden');
  document.getElementById('continueCountdown').classList.add('hidden');
  document.getElementById('countdownProgressBar').value = 0;
}

function playSound() {
  const audio = new Audio('ring.wav');
  audio.play();
}

document.getElementById('startCountdown').addEventListener('click', () => {
  startCountdown();
  document.getElementById('startCountdown').classList.add('hidden');
  document.getElementById('pauseCountdown').classList.remove('hidden');
});

document.getElementById('pauseCountdown').addEventListener('click', () => {
  pauseCountdown();
  document.getElementById('pauseCountdown').classList.add('hidden');
  document.getElementById('continueCountdown').classList.remove('hidden');
});

document.getElementById('continueCountdown').addEventListener('click', () => {
  startCountdown();
  document.getElementById('continueCountdown').classList.add('hidden');
  document.getElementById('pauseCountdown').classList.remove('hidden');
});

document.getElementById('clearCountdown').addEventListener('click', resetCountdown);
