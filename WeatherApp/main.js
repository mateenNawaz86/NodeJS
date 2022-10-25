let weathercon = document.getElementById("weathercon");

let currentDate = document.getElementById("date");

let temperatureStatus = "clouds";

const getCurrentDate = () => {
  const date = new Date();
  let weekDay = new Array(7);

  weekDay[0] = "sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednesday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";

  return weekDay[date.getDay()];
};

getCurrentDate();

// function for getting day, month and year
const getCurrentDay = () => {
  // Get months in string
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDay = new Date();
  const day = currentDay.getDate();
  const month = months[currentDay.getMonth()];

  const minutes = currentDay.getMinutes();
  const hour = currentDay.getHours();

  //   Getting PM 7 AM
  clockCycle = "AM";
  if (hour > 11) {
    clockCycle = "PM";

    if (hour > 12) {
      // it means hour convert into 1pm not 13pm
      hour -= 12;
    }
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${month} ${day} | ${hour}:${minutes} ${clockCycle}`;
};

currentDate.innerHTML = `${getCurrentDate()} | ${getCurrentDay()}`;
