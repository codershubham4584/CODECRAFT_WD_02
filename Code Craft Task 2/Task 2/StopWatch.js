let startTime, elapsedTime = 0, timerInterval;
const display = document.getElementById("display");
const lapsList = document.getElementById("lapsList");

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  return (
    (hrs < 10 ? "0" : "") + hrs + ":" +
    (mins < 10 ? "0" : "") + mins + ":" +
    (secs < 10 ? "0" : "") + secs
  );
}

function print(txt) {
  display.innerHTML = txt;
}

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(timerInterval);
}

function resetStopwatch() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  lapsList.innerHTML = "";
}

function lapTime() {
  const lapItem = document.createElement("li");
  lapItem.textContent = timeToString(elapsedTime);
  lapsList.appendChild(lapItem);
}
