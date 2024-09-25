// Global Variables
let stopwatchInterval;
let countdownInterval;
let stopwatchTime = 0;
let countdownTime = 0;

// DOM Elements
const homeScreen = document.getElementById('home-screen');
const stopwatchScreen = document.getElementById('stopwatch-screen');
const countdownScreen = document.getElementById('countdown-screen');
const stopwatchBtn = document.getElementById('stopwatch-btn');
const countdownBtn = document.getElementById('countdown-btn');
const stopwatchDisplay = document.getElementById('stopwatch-display');
const countdownInputField = document.getElementById('countdown-input');
const stopwatchStartBtn = document.getElementById('stopwatch-start');
const stopwatchClearBtn = document.getElementById('stopwatch-clear');
const countdownStartBtn = document.getElementById('countdown-start');
const countdownClearBtn = document.getElementById('countdown-clear');
const backToHome1 = document.getElementById('back-to-home-1');
const backToHome2 = document.getElementById('back-to-home-2');

// Show Stopwatch screen
stopwatchBtn.addEventListener('click', () => {
    homeScreen.classList.add('hidden');  // Hide home screen
    stopwatchScreen.classList.remove('hidden');  // Show stopwatch screen
    stopwatchScreen.classList.add('visible');
    resetStopwatch();  // Reset stopwatch when switching
    clearCountdown();  // Clear countdown timer when switching
});

// Show Countdown screen
countdownBtn.addEventListener('click', () => {
    homeScreen.classList.add('hidden');  // Hide home screen
    countdownScreen.classList.remove('hidden');  // Show countdown screen
    countdownScreen.classList.add('visible');
    resetStopwatch();  // Reset stopwatch when switching
    clearCountdown();  // Clear countdown timer when switching
});

// Return to Home screen from Stopwatch
backToHome1.addEventListener('click', () => {
    stopwatchScreen.classList.add('hidden');  // Hide stopwatch screen
    stopwatchScreen.classList.remove('visible');
    homeScreen.classList.remove('hidden');  // Show home screen
    homeScreen.classList.add('visible');
});

// Return to Home screen from Countdown
backToHome2.addEventListener('click', () => {
    countdownScreen.classList.add('hidden');  // Hide countdown screen
    countdownScreen.classList.remove('visible');
    homeScreen.classList.remove('hidden');  // Show home screen
    homeScreen.classList.add('visible');
});

// Stopwatch Functionality
stopwatchStartBtn.addEventListener('click', () => {
    if (stopwatchStartBtn.textContent === 'Start') {
        stopwatchStart();
    } else {
        stopwatchPause();
    }
});

stopwatchClearBtn.addEventListener('click', resetStopwatch);

function stopwatchStart() {
    stopwatchStartBtn.textContent = 'Pause';
    stopwatchStartBtn.classList.replace('start', 'pause');
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        stopwatchDisplay.textContent = formatTime(stopwatchTime);
    }, 1000);
}

function stopwatchPause() {
    clearInterval(stopwatchInterval);
    stopwatchStartBtn.textContent = 'Start';
    stopwatchStartBtn.classList.replace('pause', 'start');
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchDisplay.textContent = '00:00:00';
    stopwatchStartBtn.textContent = 'Start';
    stopwatchStartBtn.classList.replace('pause', 'start');
}

// Countdown Functionality
countdownStartBtn.addEventListener('click', () => {
    if (countdownStartBtn.textContent === 'Start') {
        countdownTime = parseInputTime(countdownInputField.value);
        if (countdownTime > 0) {
            countdownStart();
        }
    } else {
        countdownPause();
    }
});

countdownClearBtn.addEventListener('click', clearCountdown);

function countdownStart() {
    countdownStartBtn.textContent = 'Pause';
    countdownStartBtn.classList.replace('start', 'pause');
    countdownInterval = setInterval(() => {
        if (countdownTime > 0) {
            countdownTime--;
            countdownInputField.value = formatTime(countdownTime);
        } else {
            clearInterval(countdownInterval);
            playAlert();
            countdownStartBtn.textContent = 'Start';
            countdownStartBtn.classList.replace('pause', 'start');
        }
    }, 1000);
}

function countdownPause() {
    clearInterval(countdownInterval);
    countdownStartBtn.textContent = 'Start';
    countdownStartBtn.classList.replace('pause', 'start');
}

function clearCountdown() {
    clearInterval(countdownInterval);
    countdownTime = 0;
    countdownInputField.value = '00:00:00';
    countdownStartBtn.textContent = 'Start';
    countdownStartBtn.classList.replace('pause', 'start');
}

// Utility Functions
function formatTime(time) {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function parseInputTime(input) {
    const parts = input.split(':').map(part => parseInt(part) || 0);
    return (parts[0] * 3600) + (parts[1] * 60) + parts[2];
}

function playAlert() {
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
}
