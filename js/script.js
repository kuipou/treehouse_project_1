// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// getRandom generates a random number from [arg] and floors it then
// returns it
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRandomRGB() {
  return "rgb(" + getRandom(0, 255) + "," + getRandom(0, 255) + "," + getRandom(0, 255) + ")";
}
// selects a random quote object from the quotes array
// returns the randomly selected quote object
function getRandomQuote() {
 return query = quotes[Math.floor(Math.random() * quotes.length)];

}

function printQuote() {
  var query = getRandomQuote();
  var html =  '<p class="quote">' + query.quote + '</p> <p class="source">' + query.author;
  if (typeof query.citation !== "undefined" ){
      html += '<span class="citation">' + query.citation + '</span>';
  }
  if (typeof query.year !== "undefined" ) {
      html += '<span class="year">' + query.year + '</span>';
  }
      html += '</p>';
      document.body.style.backgroundColor = getRandomRGB();
     document.getElementById('quote-box').innerHTML = html ;
}
var returnquote = getRandomQuote();
console.log("You currently have " + quotes.length + " quotes" + "query object:"  );
console.log("current quote from author " + returnquote.year + ": " + returnquote.quote );// DEBUG REMOVE WHEN DONE 
// for ( var i = 0; i <= 10; i += 1){
//   console.log(getRandom(i, quotes.length));
// }

