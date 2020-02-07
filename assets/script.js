// Displays the day of the week in header
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Dynamically changing live time at top of page
var updateTime = function () {
  $("#currentClock").text(moment().format('hh:mm:ss A'));
}
setInterval(updateTime, 1000);
updateTime();

// Assigning hours 9am-5pm in 24hr format
const hoursInDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Formats time into 24hr and into a number vs string
let currentTime = parseInt(moment().format('HH'));

// Determines color of timeslot based on the time of day
function timeSlot() {
  for (let i = 0; i < hoursInDay.length; i++) {
    if (hoursInDay[i] > currentTime) {
      $(`#${hoursInDay[i]}`).addClass("future");
    } else if (hoursInDay[i] === currentTime) {
      $(`#${hoursInDay[i]}`).addClass("present");
    } else {
      $(`#${hoursInDay[i]}`).addClass("past");
    }
  }
  return;
};
timeSlot();

// Saves current task inside the text box
$(this).on("click", function (event) {
  event.preventDefault();
  for (let i = 0; i < hoursInDay.length; i++) {
    let currentTask = $(`#task${hoursInDay[i]}`).val();
    localStorage.setItem(`save${hoursInDay[i]}`, currentTask);
  }
});

// Shows previously saved tasks in the task input box
function showTasks() {
  for (let i = 0; i < hoursInDay.length; i++) {
    let displayTask = localStorage.getItem(`save${hoursInDay[i]}`);
    $(`#task${hoursInDay[i]}`).val(displayTask);
  }
};
showTasks();