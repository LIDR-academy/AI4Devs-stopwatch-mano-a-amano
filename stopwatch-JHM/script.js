let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = Math.floor(time % 1000);

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    milliseconds = milliseconds < 100 ? (milliseconds < 10 ? `00${milliseconds}` : `0${milliseconds}`) : milliseconds;

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function startPause() {
    const startPauseButton = document.getElementById("startPauseButton");

    if (!isRunning) {
        if (startPauseButton.innerText === "Continue") {
            startPauseButton.classList.remove('pause'); // Elimina el estilo de pausa
        }
        startPauseButton.innerText = "Pause";
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").innerText = timeToString(elapsedTime);
        }, 10);
        isRunning = true;
    } else {
        startPauseButton.innerText = "Continue";
        startPauseButton.classList.add('pause'); // Añade el estilo de pausa
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function clearTimer() {
    if (elapsedTime !== 0) {
        clearInterval(timerInterval);
        document.getElementById("display").innerText = "00:00:00:000";
        document.getElementById("startPauseButton").innerText = "Start";
        document.getElementById("startPauseButton").classList.remove('pause');
        elapsedTime = 0;
        isRunning = false;
    }
}
