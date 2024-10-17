// Elements from the DOM
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const screen4 = document.getElementById('screen4');

const stopwatchBtn = document.getElementById('stopwatchBtn');
const countdownBtn = document.getElementById('countdownBtn');

const startStopwatchBtn = document.getElementById('start');
const clearStopwatchBtn = document.getElementById('clear');

const setCountdownBtn = document.getElementById('set');
const clearCountdownBtn = document.getElementById('clear');

const startCountdownBtn = document.getElementById('startCountdown');
const clearCountdownActionBtn = document.getElementById('clearCountdown');

const timerElement = document.getElementById('timer');
const countdownTimerElement = document.getElementById('countdownTimer');

// Stopwatch variables
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchTime = 0;

// Countdown variables
let countdownTime = 0;
let countdownInterval;
let countdownRunning = false;
let countdownInitial = 0;

// Switch between screens
function switchScreen(fromScreen, toScreen) {
    fromScreen.classList.remove('visible');
    toScreen.classList.add('visible');
}

// Format time (HH:MM:SS:MS)
function formatTime(ms) {
    const milliseconds = ms % 1000;
    const totalSeconds = Math.floor(ms / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function formatMilliseconds(ms) {
    return String(ms % 1000).padStart(3, '0');
}

// Stopwatch logic
startStopwatchBtn.addEventListener('click', () => {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        startStopwatchBtn.textContent = 'Pause';
        stopwatchInterval = setInterval(() => {
            stopwatchTime += 10;
            timerElement.innerHTML = '<div class="time-container">' + formatTime(stopwatchTime) + '<span class="milliseconds">' + formatMilliseconds(stopwatchTime) + '</span></div>';
        }, 10);
    } else {
        stopwatchRunning = false;
        startStopwatchBtn.textContent = 'Start';
        clearInterval(stopwatchInterval);
    }
});

clearStopwatchBtn.addEventListener('click', () => {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    timerElement.innerHTML = '<div class="time-container">00:00:00<span class="milliseconds">000</span></div>';
    startStopwatchBtn.textContent = 'Start';
});

// Countdown logic
setCountdownBtn.addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    countdownInitial = (hours * 3600 + minutes * 60 + seconds) * 1000;
    countdownTime = countdownInitial;
    
    countdownTimerElement.innerHTML = '<div class="time-container">' + formatTime(countdownTime) + '<span class="milliseconds">000</span></div>';
    switchScreen(screen3, screen4);
});

startCountdownBtn.addEventListener('click', () => {
    if (!countdownRunning) {
        countdownRunning = true;
        startCountdownBtn.textContent = 'Pause';
        countdownInterval = setInterval(() => {
            countdownTime -= 10;
            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
                countdownRunning = false;
                countdownTime = 0;
            }
            countdownTimerElement.innerHTML = '<div class="time-container">' + formatTime(countdownTime) + '<span class="milliseconds">' + formatMilliseconds(countdownTime) + '</span></div>';
        }, 10);
    } else {
        countdownRunning = false;
        startCountdownBtn.textContent = 'Start';
        clearInterval(countdownInterval);
    }
});

clearCountdownActionBtn.addEventListener('click', () => {
    countdownRunning = false;
    clearInterval(countdownInterval);
    countdownTime = countdownInitial;
    countdownTimerElement.innerHTML = '<div class="time-container">' + formatTime(countdownTime) + '<span class="milliseconds">' + formatMilliseconds(countdownTime) + '</span></div>';
    startCountdownBtn.textContent = 'Start';
});

// Screen navigation
stopwatchBtn.addEventListener('click', () => switchScreen(screen1, screen2));
countdownBtn.addEventListener('click', () => switchScreen(screen1, screen3));
