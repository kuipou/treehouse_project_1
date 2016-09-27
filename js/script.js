// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// getRandom generates a random number from [arg] and floor it then
// returns it
function getRandom(arg) {
  return Math.floor(Math.random() * arg ) + 1
}

function printQuote() {}
console.log(getRandom(quotes.length));
