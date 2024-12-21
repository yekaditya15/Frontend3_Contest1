const startTimerButton = document.getElementById("startTimer");
const timersContainer = document.getElementById("timersContainer");

startTimerButton.addEventListener("click", () => {
  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds > 0) {
    createTimer(totalSeconds);
  }
});

function createTimer(totalSeconds) {
  const timerBox = document.createElement("div");
  timerBox.className = "timer-box";

  const setTime = document.createElement("div");
  setTime.className = "set-time";
  setTime.textContent = "Time Left: ";
  timerBox.appendChild(setTime);

  const timeLeft = document.createElement("div");
  timeLeft.className = "time-left";
  timerBox.appendChild(timeLeft);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timersContainer.removeChild(timerBox);
  });
  timerBox.appendChild(deleteButton);

  timersContainer.appendChild(timerBox);

  let remainingTime = totalSeconds;

  const timerInterval = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      timeLeft.textContent = "Time's Up!";
      timerBox.classList.add("time-up");

      setTime.style.display = "none";
    } else {
      const hrs = String(Math.floor(remainingTime / 3600)).padStart(2, "0");
      const mins = String(Math.floor((remainingTime % 3600) / 60)).padStart(
        2,
        "0"
      );
      const secs = String(remainingTime % 60).padStart(2, "0");
      timeLeft.textContent = `${hrs}:${mins}:${secs}`;
      remainingTime--;
    }
  }, 1000);
}
