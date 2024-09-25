window.onload = function() {
  // Main menu buttons
  document.getElementById('stopwatch-btn').addEventListener('click', function() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('stopwatch-interface').classList.remove('hidden');
  });

  document.getElementById('countdown-btn').addEventListener('click', function() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('countdown-interface').classList.remove('hidden');
  });

  // Back to menu buttons
  document.getElementById('back-to-menu-1').addEventListener('click', function() {
    document.getElementById('stopwatch-interface').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
  });

  document.getElementById('back-to-menu-2').addEventListener('click', function() {
    document.getElementById('countdown-interface').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
  });

  // Stopwatch functionality
  let stopwatchInterval;
  let stopwatchStartTime;
  let elapsedTime = 0;

  document.getElementById('stopwatch-start').addEventListener('click', function() {
    if (this.textContent === 'Start') {
      this.textContent = 'Pause';
      stopwatchStartTime = Date.now() - elapsedTime;
      stopwatchInterval = setInterval(function() {
        elapsedTime = Date.now() - stopwatchStartTime;
        document.getElementById('stopwatch-timer').textContent = formatTime(elapsedTime);
      }, 100);
    } else if (this.textContent === 'Pause') {
      this.textContent = 'Continue';
      clearInterval(stopwatchInterval);
    } else {
      this.textContent = 'Pause';
      stopwatchStartTime = Date.now() - elapsedTime;
      stopwatchInterval = setInterval(function() {
        elapsedTime = Date.now() - stopwatchStartTime;
        document.getElementById('stopwatch-timer').textContent = formatTime(elapsedTime);
      }, 100);
    }
  });

  document.getElementById('stopwatch-clear').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    document.getElementById('stopwatch-timer').textContent = '00:00:00';
    document.getElementById('stopwatch-start').textContent = 'Start';
    elapsedTime = 0;
  });

  // Countdown functionality
  let countdownTime = 0;
  let countdownInterval;

  document.querySelectorAll('.number-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      const currentTime = document.getElementById('countdown-timer').textContent;
      document.getElementById('countdown-timer').textContent = currentTime === '00:00:00' ? button.textContent : currentTime + button.textContent;
    });
  });

  document.getElementById('set-btn').addEventListener('click', function() {
    countdownTime = parseInt(document.getElementById('countdown-timer').textContent) * 1000;
    document.getElementById('countdown-keypad').classList.add('hidden');
    document.getElementById('countdown-controls').classList.remove('hidden');
  });

  document.getElementById('countdown-start').addEventListener('click', function() {
    if (this.textContent === 'Start') {
      this.textContent = 'Pause';
      countdownInterval = setInterval(function() {
        if (countdownTime <= 0) {
          clearInterval(countdownInterval);
          document.getElementById('countdown-timer').textContent = '00:00:00';
        } else {
          countdownTime -= 1000;
          document.getElementById('countdown-timer').textContent = formatTime(countdownTime);
        }
      }, 1000);
    } else if (this.textContent === 'Pause') {
      this.textContent = 'Continue';
      clearInterval(countdownInterval);
    } else {
      this.textContent = 'Pause';
      countdownInterval = setInterval(function() {
        countdownTime -= 1000;
        document.getElementById('countdown-timer').textContent = formatTime(countdownTime);
      }, 1000);
    }
  });

  document.getElementById('countdown-clear').addEventListener('click', function() {
    document.getElementById('countdown-timer').textContent = '00:00:00';
    countdownTime = 0;
  });

  document.getElementById('countdown-clear-final').addEventListener('click', function() {
    clearInterval(countdownInterval);
    document.getElementById('countdown-timer').textContent = '00:00:00';
    document.getElementById('countdown-start').textContent = 'Start';
    countdownTime = 0;
  });
};

// Helper function to format time
function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return (
    (hours < 10 ? "0" : "") + hours +
    ":" + (minutes < 10 ? "0" : "") + minutes +
    ":" + (seconds < 10 ? "0" : "") + seconds
  );
}
