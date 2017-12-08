// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

function viablePrefix(prefix, listOfPrefix){
//Switch Prefixes: 4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759
	for (i=0; i<listOfPrefix.length; i++){
		if(prefix===listOfPrefix[i]){
			return true;
		}
	}
	return false;
}

var detectNetwork = function(cardNumber) {
	
  if (cardNumber === null || cardNumber === undefined){
  	return "null";
  	}
	var firstTwo = cardNumber.slice(0,2);
	var cardLength = cardNumber.length;
	var firstOne = cardNumber.slice(0,1);
	var firstThree = cardNumber.slice(0,3);
	var firstFour = cardNumber.slice(0,4);
	var firstSix = cardNumber.slice(0,6);
	var switchPrefixes=['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];

  if ((firstTwo === "38" || firstTwo === "39") && cardLength === 14) {
  	return "Diner\'s Club";
  }
  if ((firstTwo === "34" || firstTwo === "37") && cardLength === 15) {
  	return "American Express";
  }
  if((parseInt(firstTwo)<56 && parseInt(firstTwo)>50) && cardLength===16){
  	return "MasterCard";
  }
  if((viablePrefix(firstFour, switchPrefixes) || viablePrefix(firstSix, switchPrefixes)) && 
  	(cardLength===16 || cardLength === 18 || cardLength === 19)){
  	return "Switch";
  } else if (firstOne === '4' && (cardLength === 13 || cardLength === 16 || cardLength === 19)){
  	return "Visa";
  } 
  if ((firstTwo === '65' || (parseInt(firstThree) < 650 && parseInt(firstThree) > 643) || firstFour === '6011')
  	&& (cardLength === 16 || cardLength === 19)){
  	return "Discover";
  } 
  if ((firstFour === '5018' || firstFour === '5020' || firstFour === '5038' || firstFour === '6304') && 
  	(cardLength < 20 && cardLength > 11)){
  	return "Maestro";
  }
 
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


