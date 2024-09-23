import { calculateTimeLeft, render } from "./countdown.js";

const targetDate = new Date(2024, 11, 7, 7, 55);

const countdown = () => {
    const timeLeftObj = calculateTimeLeft(targetDate);
    render(timeLeftObj);

    if (timeLeftObj.days === 0 && timeLeftObj.hours === 0 && timeLeftObj.minutes === 0 && timeLeftObj.seconds === 0) {
        clearInterval(interval);
    }
};

const interval = setInterval(countdown, 1000);
countdown();
