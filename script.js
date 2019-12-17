let wakeuptime = 7;
let breakfasttime = 9;
let schooltime = 10;
const noon = 12;
let lunchtime = 12;
let homeworktime = 4;
let dinnertime = 18;
let bathtime = 20;
let bedtime = 21;
let naptime;
let medtime;
let donetime;
const evening = 18;

// Getting it to show the current time on the page
const showCurrentTime = function() {
  // display the string on the webpage
  const clock = document.getElementById("clock");

  const currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
  }

  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // put together the string that displays the time
  const clockTime = `${hours}:${minutes}:${seconds} ${meridian}`;

  clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
const updateClock = function() {
  const time = new Date().getHours();
  let messageText;
  let image =
    "https://ocalaseniorsoftball.com/wp-content/uploads/2018/12/schedule.jpg";

  const timeEventJS = document.getElementById("timeEvent");
  const eventImageJS = document.getElementById("eventImage");

  if (time == donetime) {
    image =
      "https://images.glaciermedia.ca/polopoly_fs/1.23901772.1564592524!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/celebration-of-light.jpg";
    messageText = "Great Job!";
  } else if (time == wakeuptime) {
    image =
      "https://image.shutterstock.com/image-vector/beginning-good-day-man-woke-260nw-436072306.jpg";
    messageText = "Wake up!";
  } else if (time == breakfasttime) {
    image =
      "https://images.ctfassets.net/81w9kb7f1jq4/3hPXQnnTyB9snApK70Psgj/c5d3e9dc3f4c5e0d191b7d7f2b7a264c/farmer_choice_fallFY202.jpg";
    messageText = "Breakfast";
  } else if (time == schooltime) {
    image =
      "http://sunrisestampede.org/wp-content/uploads/2018/04/schedule.png";
    messageText = "School!";
  } else if (time == lunchtime) {
    image =
      "https://blog.boomr.com/wp-content/uploads/2017/10/mandatory-employee-break-lunch.jpg";
    messageText = "Lunch";
  } else if (time == homeworktime) {
    image =
      "https://study.com/cimages/multimages/16/c37dbaf5-e99d-40e5-9170-4d54c3b713a1_adobestock_118697007.jpeg";
    messageText = "Homework";
  } else if (time == dinnertime) {
    image =
      "http://www.dinneralovestory.com/wp-content/uploads/2014/10/crispy-chickpeas-with-yogurt.jpg";
    messageText = "Dinner";
  } else if (time == bathtime) {
    image =
      "https://www.vintagetub.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/l/g/xlg66de7wdic_3.jpg.pagespeed.ic.JLf2bUdlLe.webp";
    messageText = "Bathtime";
  } else if (time == bedtime) {
    image =
      "https://s.marketwatch.com/public/resources/images/MW-HA429_sleep_ZH_20181214175733.jpg";
    messageText = "Bed time";
  } else if (time == naptime) {
    image =
      "https://nationalpostcom.files.wordpress.com/2019/10/napping.jpg?quality=60&strip=all&w=640";
    messageText = "Naptime";
  } else if (time == medtime) {
    image =
      "https://static.turbosquid.com/Preview/2019/02/15__06_51_25/SmallPillBottle3dsmodel001.jpgDFB7C31F-0EE5-4B6A-BD01-2A71A7F36512Default.jpg";
    messageText = "Take your medicine";
  } else if (time < noon) {
    image = "https://miro.medium.com/max/7544/1*8A3cbPJhAUVwuNYyHOKU3Q.jpeg";
    messageText = "Good morning!";
  } else if (time >= evening) {
    image = "https://media.wnyc.org/i/800/0/h/85/1/160924154.jpg";
    messageText = "Good evening!";
  } else {
    image =
      "https://c8.alamy.com/comp/D637JY/beautiful-cloudscape-on-blue-sky-over-green-meadow-in-summer-D637JY.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText);
  timeEventJS.innerText = messageText;
  eventImage.src = image;

  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
const oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Party Time Button To Work
const doneButton = document.getElementById("doneTimeButton");

const doneEvent = function() {
  if (donetime < 0) {
    donetime = new Date().getHours();
    doneTimeButton.innerText = "CHECK THE SCHEDULE!";
    doneTimeButton.style.backgroundColor = "#0A8DAB";
  } else {
    donetime = -1;
    doneTimeButton.innerText = "ALL DONE!";
    doneTimeButton.style.backgroundColor = "#222";
  }
};

doneButton.addEventListener("click", doneEvent);
doneEvent();

// Activates Wake-Up selector
const wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

const wakeUpEvent = function() {
  wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//Adding Breakfast
const breakfastTimeSelector = document.getElementById("breakfastTimeSelector");

const breakfastEvent = function() {
  breakfasttime = breakfastTimeSelector.value;
};

breakfastTimeSelector.addEventListener("change", breakfastEvent);

// Activates school selector
const schoolTimeSelector = document.getElementById("schoolTimeSelector");

const schoolEvent = function() {
  schooltime = schoolTimeSelector.value;
};

schoolTimeSelector.addEventListener("change", schoolEvent);

// Activates Lunch selector
const lunchTimeSelector = document.getElementById("lunchTimeSelector");

const lunchEvent = function() {
  lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Homework selector
const homeworkTimeSelector = document.getElementById("homeworkTimeSelector");

const homeworkEvent = function() {
  homeworktime = homeworkTimeSelector.value;
};

homeworkTimeSelector.addEventListener("change", homeworkEvent);

// Activates Dinner selector
const dinnerTimeSelector = document.getElementById("dinnerTimeSelector");

const dinnerEvent = function() {
  dinnertime = dinnerTimeSelector.value;
};

dinnerTimeSelector.addEventListener("change", dinnerEvent);

// Activates bath selector
const bathTimeSelector = document.getElementById("bathTimeSelector");

const bathEvent = function() {
  bathtime = bathTimeSelector.value;
};

bathTimeSelector.addEventListener("change", bathEvent);

//activates bed
const bedTimeSelector = document.getElementById("bedTimeSelector");
const bedEvent = function() {
  bedtime = bedTimeSelector.value;
};

bedTimeSelector.addEventListener("change", bedEvent);

// Activates Nap-Time selector
const napTimeSelector = document.getElementById("napTimeSelector");

const napEvent = function() {
  naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

// Activates Medicine selector
const medTimeSelector = document.getElementById("medTimeSelector");

const medEvent = function() {
  medtime = medTimeSelector.value;
};

medTimeSelector.addEventListener("change", medEvent);
