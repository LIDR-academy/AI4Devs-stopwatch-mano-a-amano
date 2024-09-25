let stopwatchInterval;
let countdownInterval;
let stopwatchTime = 0;
let countdownTime = 0;
let countdownInput = "000000"; // For digit input (HHMMSS)
let countdownHistory = [];

// Update browser tab title
function updateTabTitle(text) {
  document.title = text || 'Stopwatch & Countdown';
}

// Show stopwatch section
function showStopwatch() {
  document.getElementById('home').classList.add('d-none');
  document.getElementById('stopwatch').classList.remove('d-none');
  updateTabTitle(); // Reset to default title
}

// Show countdown section
function showCountdown() {
  document.getElementById('home').classList.add('d-none');
  document.getElementById('countdown').classList.remove('d-none');
  updateTabTitle(); // Reset to default title
  renderCountdownHistory();
}

// Go back to the home section
function goHome() {
  document.getElementById('home').classList.remove('d-none');
  document.getElementById('stopwatch').classList.add('d-none');
  document.getElementById('countdown').classList.add('d-none');
  clearStopwatch();
  clearCountdown();
  updateTabTitle(); // Reset to default title
}

// Format time to HH:MM:SS:MS
function formatTimeWithMilliseconds(milliseconds) {
  let hrs = Math.floor(milliseconds / 3600000);
  let mins = Math.floor((milliseconds % 3600000) / 60000);
  let secs = Math.floor((milliseconds % 60000) / 1000);
  let ms = milliseconds % 1000;
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
}

// Stopwatch logic
function startStopwatch() {
  if (!stopwatchInterval) {
    const startTime = Date.now() - stopwatchTime;
    stopwatchInterval = setInterval(() => {
      stopwatchTime = Date.now() - startTime;
      const formattedTime = formatTimeWithMilliseconds(stopwatchTime);
      document.getElementById('stopwatch-timer').textContent = formattedTime;
      updateTabTitle(formattedTime); // Update title with stopwatch time
    }, 10);
  }
}

function clearStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchTime = 0;
  document.getElementById('stopwatch-timer').textContent = "00:00:00.000";
  updateTabTitle(); // Reset to default title
}

// Countdown logic
function appendDigit(digit) {
  countdownInput = countdownInput.slice(1) + digit;
  updateCountdownDisplay();
}

function updateCountdownDisplay() {
  const hours = countdownInput.slice(0, 2);
  const minutes = countdownInput.slice(2, 4);
  const seconds = countdownInput.slice(4, 6);
  document.getElementById('countdown-timer').textContent = `${hours}:${minutes}:${seconds}`;
}

function startCountdown() {
  const hours = parseInt(countdownInput.slice(0, 2), 10);
  const minutes = parseInt(countdownInput.slice(2, 4), 10);
  const seconds = parseInt(countdownInput.slice(4, 6), 10);
  countdownTime = (hours * 3600 + minutes * 60 + seconds) * 1000;

  if (countdownTime > 0) {
    countdownHistory.unshift(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    if (countdownHistory.length > 10) countdownHistory.pop(); // Keep the last 10 entries

    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      if (countdownTime > 0) {
        countdownTime -= 1000;
        const formattedTime = formatTimeWithMilliseconds(countdownTime).slice(0, -4);
        document.getElementById('countdown-timer').textContent = formattedTime;
        updateTabTitle(formattedTime); // Update title with countdown time
      } else {
        clearCountdown();
      }
    }, 1000);
  }
  renderCountdownHistory();
}

function clearCountdown() {
  clearInterval(countdownInterval);
  countdownInput = "000000";
  updateCountdownDisplay();
  countdownInterval = null;
  updateTabTitle(); // Reset to default title
}

// Render countdown history
function renderCountdownHistory() {
  const historyList = document.getElementById('countdown-history');
  historyList.innerHTML = '';
  countdownHistory.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = entry;
    listItem.className = 'list-group-item';
    listItem.onclick = () => loadFromHistory(index);
    historyList.appendChild(listItem);
  });
}

function loadFromHistory(index) {
  clearCountdown(); // Stop the current countdown if running

  const time = countdownHistory[index];
  countdownInput = time.replace(/:/g, ''); // Remove colons and format the input as HHMMSS
  updateCountdownDisplay(); // Update the display with the selected countdown
}
