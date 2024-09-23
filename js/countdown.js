export const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
};

export const render = (timeLeftObj) => {
    const daysElement = document.querySelector("[data-days]");
    const hoursElement = document.querySelector("[data-hours]");
    const minutesElement = document.querySelector("[data-minutes]");
    const secondsElement = document.querySelector("[data-seconds]");

    daysElement.innerHTML = String(timeLeftObj.days).padStart(2, '0');
    hoursElement.innerHTML = String(timeLeftObj.hours).padStart(2, '0');
    minutesElement.innerHTML = String(timeLeftObj.minutes).padStart(2, '0');
    secondsElement.innerHTML = String(timeLeftObj.seconds).padStart(2, '0');
};

