let timer;
let initialTimeInMilliseconds = 0; 
let timeInMilliseconds = 0; 

document.getElementById('timeInput').addEventListener('change', function () {
  initialTimeInMilliseconds = parseTimeInput(this.value);
  resetTimer();
  updateTimerDisplay();
});

function startTimer() {
  timer = setInterval(updateTimer, 10); 
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  timeInMilliseconds = initialTimeInMilliseconds;
  updateTimerDisplay();
}

function restartTimer() {
  stopTimer();
  resetTimer();
  startTimer();
}

function updateTimer() {
  if (timeInMilliseconds > 0) {
    timeInMilliseconds -= 10;
    updateTimerDisplay();
  } else {
    clearInterval(timer);
    alert("Time's up!");
  }
}

function updateTimerDisplay() {
  const hours = Math.floor(timeInMilliseconds / 3600000);
  const minutes = Math.floor((timeInMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((timeInMilliseconds % 60000) / 1000);
  const milliseconds = Math.floor(timeInMilliseconds % 1000 / 10);

  document.getElementById('timer').textContent =
    `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(milliseconds) {
  return milliseconds < 10 ? `0${milliseconds}` : milliseconds;
}

function parseTimeInput(input) {
  const timeArray = input.split(':');
  const hours = parseInt(timeArray[0]) || 0;
  const minutes = parseInt(timeArray[1]) || 0;
  const seconds = parseInt(timeArray[2]) || 0;
  return ((hours * 60 + minutes) * 60 + seconds) * 1000; 
}
