


// Shows the day of the week
console.log(moment().format('dddd, MMMM Do'));

// Shows hour and minute in American formatting
console.log(moment().format('HH'));

// Displays the day of the week in header
$("#currentDay").text(moment().format('dddd, MMMM Do'));

$("#presentBar").text(moment().format('h A'));



const hoursInDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

let currentTime = parseInt(moment().format('HH'));


function checkHour() {

  for (let i = 0; i < hoursInDay.length; i++) {
    if (hoursInDay[i] > currentTime) {
      $(`#${hoursInDay[i]}`).addClass("future");
      console.log("Green");
      
    } else if (hoursInDay[i] === currentTime) {
      $(`#${hoursInDay[i]}`).addClass("present");
      console.log("Current");
    } else {
      $(`#${hoursInDay[i]}`).addClass("past");
      console.log("Grey");
    }
  }
return;
};

checkHour();



console.log(hoursInDay);
console.log(currentTime);




// Turns 24 time into 12 hour
currentTime = parseInt(moment().format('h A'));
console.log(currentTime);


