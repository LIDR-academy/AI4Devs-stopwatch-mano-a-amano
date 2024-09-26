// Initial tab loading logic
document.addEventListener('DOMContentLoaded', function () {
    // Default active tab on page load
    stopwatchTab.classList.add('bg-blue-500', 'text-white');
    countdownTab.classList.add('bg-gray-300', 'text-black');
    stopwatchStartBtn.classList.remove('hidden');
});

// Tab Switching Logic
const stopwatchTab = document.getElementById('tab-stopwatch');
const countdownTab = document.getElementById('tab-countdown');
const stopwatchSection = document.getElementById('stopwatch-section');
const countdownSection = document.getElementById('countdown-section');
const lapSection = document.getElementById('lap-section');

// Function to handle tab switching
function switchTab(activeTab, inactiveTab, showSection, hideSection) {
    activeTab.classList.add('bg-blue-500', 'text-white');
    activeTab.classList.remove('bg-gray-300', 'text-black');
    inactiveTab.classList.remove('bg-blue-500', 'text-white');
    inactiveTab.classList.add('bg-gray-300', 'text-black');
    hideSection.classList.add('hidden');
    showSection.classList.remove('hidden', 'fade-in');
    showSection.classList.add('fade-in');
}

stopwatchTab.onclick = function () {
    switchTab(stopwatchTab, countdownTab, stopwatchSection, countdownSection);
};

countdownTab.onclick = function () {
    switchTab(countdownTab, stopwatchTab, countdownSection, stopwatchSection);
};

// Stopwatch Logic
let stopwatchInterval, stopwatchTime = 0;
const stopwatchDisplay = document.getElementById('stopwatch-display');
const stopwatchStartBtn = document.getElementById('stopwatch-start');
const stopwatchPauseBtn = document.getElementById('stopwatch-pause');
const stopwatchResetBtn = document.getElementById('stopwatch-reset');

// Lap Variables
const lapList = document.getElementById('lap-list');
const stopwatchLapBtn = document.getElementById('stopwatch-lap');
let lapCounter = 0;

const formatTime = (time) => {
    const date = new Date(time);
    return date.toISOString().substr(11, 8) + '.' + String(time % 1000).padStart(3, '0');
};

stopwatchStartBtn.onclick = function() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime += 10;
            stopwatchDisplay.textContent = formatTime(stopwatchTime);
        }, 10);
    }
    stopwatchStartBtn.classList.add('hidden');
    stopwatchPauseBtn.classList.remove('hidden');
    stopwatchResetBtn.classList.remove('hidden');
    stopwatchLapBtn.classList.remove('hidden'); // Show lap button when stopwatch starts
};

stopwatchPauseBtn.onclick = function() {
    if (stopwatchInterval) {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
        stopwatchPauseBtn.textContent = '▶️'; // Change to resume
    } else {
        stopwatchStartBtn.onclick();
        stopwatchPauseBtn.textContent = '⏸️'; // Change back to pause
    }
};

stopwatchResetBtn.onclick = function() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    lapCounter = 0; // Reset lap counter
    lapList.innerHTML = ''; // Clear lap list
    stopwatchDisplay.textContent = '00:00:00.000';
    stopwatchStartBtn.classList.remove('hidden');
    stopwatchPauseBtn.classList.add('hidden');
    stopwatchResetBtn.classList.add('hidden');
    stopwatchLapBtn.classList.add('hidden'); // Hide lap button when reset
    stopwatchPauseBtn.textContent = '⏸️'; // Reset button back to pause state
};

// Lap Button Click Handler
stopwatchLapBtn.onclick = function() {
    lapCounter += 1;
    const lapTime = formatTime(stopwatchTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
    lapList.appendChild(lapItem);

    // Show lap section when first lap is recorded
    if (lapCounter === 1) {
        lapSection.classList.remove('hidden');
    }
};

// Countdown Logic
let countdownInterval, countdownTime = 0, initialCountdownTime = 0;
const countdownDisplay = document.getElementById('countdown-display');
const countdownStartBtn = document.getElementById('countdown-start');
const countdownPauseBtn = document.getElementById('countdown-pause');
const countdownResetBtn = document.getElementById('countdown-reset');
const countdownClearBtn = document.getElementById('countdown-clear');

const updateCountdownDisplay = () => {
    const hours = Math.floor(countdownTime / 3600000);
    const minutes = Math.floor((countdownTime % 3600000) / 60000);
    const seconds = Math.floor((countdownTime % 60000) / 1000);
    const milliseconds = countdownTime % 1000;
    countdownDisplay.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
};

countdownDisplay.addEventListener('input', function() {
    const [hours, minutes, seconds] = countdownDisplay.value.split(':');
    const milliseconds = countdownDisplay.value.split('.')[1] || 0;
    countdownTime = (parseInt(hours) * 3600000) + (parseInt(minutes) * 60000) + (parseInt(seconds) * 1000) + parseInt(milliseconds);
});

countdownStartBtn.onclick = function() {
    if (!countdownInterval && countdownTime > 0) {
        if (initialCountdownTime === 0) initialCountdownTime = countdownTime;

        countdownInterval = setInterval(() => {
            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
                countdownInterval = null;
            } else {
                countdownTime -= 10;
                updateCountdownDisplay();
            }
        }, 10);
    }
    countdownStartBtn.classList.add('hidden');
    countdownPauseBtn.classList.remove('hidden');
    countdownResetBtn.classList.remove('hidden');
    countdownClearBtn.classList.remove('hidden');
};

countdownPauseBtn.onclick = function() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
        countdownPauseBtn.textContent = '▶️'; // Change to resume
    } else {
        countdownStartBtn.onclick();
        countdownPauseBtn.textContent = '⏸️'; // Change back to pause
    }
};

countdownResetBtn.onclick = function() {
    clearInterval(countdownInterval);
    countdownInterval = null;
    countdownTime = initialCountdownTime;
    updateCountdownDisplay();
    countdownStartBtn.classList.remove('hidden');
    countdownPauseBtn.classList.add('hidden');
    countdownResetBtn.classList.add('hidden');
    countdownClearBtn.classList.remove('hidden');
    countdownPauseBtn.textContent = '⏸️'; // Reset button back to pause state
};

countdownClearBtn.onclick = function() {
    clearInterval(countdownInterval);
    countdownInterval = null;
    countdownTime = 0;
    initialCountdownTime = 0;
    updateCountdownDisplay();
    countdownStartBtn.classList.remove('hidden');
    countdownPauseBtn.classList.add('hidden');
    countdownResetBtn.classList.add('hidden');
    countdownClearBtn.classList.add('hidden');
};
