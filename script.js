


// Shows the day of the week
console.log(moment().format('dddd, MMMM Do YYYY'));

// Shows hour and minute in American formatting
console.log(moment().format('h A'));

// Displays the day of the week in header
$("#currentDay").text(moment().format('dddd, MMMM Do'));

$("#presentBar").text(moment().format('h A'));

