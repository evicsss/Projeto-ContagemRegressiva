const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

const render = (days, hours, minutes, seconds) => {
  daysElement.innerHTML = String(days).padStart("2", 0);
  hoursElement.innerHTML = String(hours).padStart("2", 0);
  minutesElement.innerHTML = String(minutes).padStart("2", 0);
  secondsElement.innerHTML = String(seconds).padStart("2", 0);
};

const countdown = () => {
  const now = new Date();
  const targetDate = new Date(2024, 11, 7, 7, 55); 

  const timeLeft = targetDate - now;

  const timeLeftObj = {
    days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
  };

  timeLeft <= 0
    ? clearInterval(interval)
    : render(timeLeftObj.days, timeLeftObj.hours, timeLeftObj.minutes, timeLeftObj.seconds);
};

const interval = setInterval(() => countdown(), 1000);

countdown();
