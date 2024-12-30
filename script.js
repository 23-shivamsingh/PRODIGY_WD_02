let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;
let running = false;

const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapTimesList = document.getElementById('lap-times');

function updateDisplay() {
  hoursDisplay.textContent = String(hours).padStart(2, '0');
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
  millisecondsDisplay.textContent = String(milliseconds).padStart(2, '0');
}

function startStopwatch() {
  if (running) return;
  running = true;
  interval = setInterval(() => {
    milliseconds += 1;
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds += 1;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes ===60) {
        minutes = 0;
        hours += 1;
    }
    updateDisplay();
  }, 10);
}

function pauseStopwatch() {
  running = false;
  clearInterval(interval);
}

function resetStopwatch() {
  running = false;
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  lapTimesList.innerHTML = '';
}

function recordLap() {
  const lapTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  lapTimesList.appendChild(lapItem);
}

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', recordLap);
