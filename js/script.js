// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// getRandom generates a random number from [arg] and floors it then
// returns it
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRandomRGB() {
  // The rgb value is randomized to be sure that when called the color woudn't be repeated
  // how ever the random is up to 200 because upon testing the colors would end up too bright 
  return "rgb(" + getRandom(0, 200) + "," + getRandom(0, 200) + "," + getRandom(0, 200) + ")";
}


// selects a random quote object from the quotes array
// returns the randomly selected quote object
function getRandomQuote() {
 return query = quotes[Math.floor(Math.random() * quotes.length)];

}

function printQuote() {
  // The query var stores the Random quote
  var query = getRandomQuote();

  // the var html starts the construct of the string
  var html =  '<p class="quote">' + query.quote + '</p> <p class="source">' + query.author;

  // we check if both citation and year separatly aren't empty if they aren't display span
  if (typeof query.citation !== "undefined" ){
      html += '<span class="citation">' + query.citation + '</span>';
  }
  if (typeof query.year !== "undefined" ) {
      html += '<span class="year">' + query.year + '</span>';
  }
  // close the string
      html += '</p>';

      // randomize the BG color via the getRandomRGB function
      // if the quote has a specific color grab it
      if (typeof query.bgc !== "undefined" ){
        document.body.style.backgroundColor = query.bgc;
      } else {
      document.body.style.backgroundColor = getRandomRGB();
        }
     // modify the quote box div with our string
     document.getElementById('quote-box').innerHTML = html ;
}

//end
console.log(0);

