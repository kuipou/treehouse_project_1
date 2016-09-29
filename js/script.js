// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// getRandom generates a random number from [arg] and floors it then
// returns it
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + 0;
}

function printQuote() {}
console.log("You currently have " + quotes.length + " quotes");
// DEBUG REMOVE WHEN DONE 
for ( var i = 0; i <= 100; i += 1){
  console.log(getRandom(i, quotes.length));
}

