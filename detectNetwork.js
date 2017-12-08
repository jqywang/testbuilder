// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	
  if (cardNumber === null || cardNumber === undefined){
  	return "null";
  	}
	var firstTwo = cardNumber.slice(0,2);
	var cardLength = cardNumber.length;
	var firstOne = cardNumber.slice(0,1);

  if ((firstTwo === "38" || firstTwo === "39") && cardLength === 14) {
  	return "Diner\'s Club";
  }
  if ((firstTwo === "34" || firstTwo === "37") && cardLength === 15) {
  	return "American Express";
  }
  if((parseInt(firstTwo)<56 && parseInt(firstTwo)>50) && cardLength===16){
  	return "MasterCard";
  }
  if(firstOne === '4' && (cardLength === 13 || cardLength === 16 || cardLength === 19)){
  	return "Visa";
  }

	/*var numberLength = cardNumber.length;
	var firstTwoDigits= cardNumber.slice(0,2);
	if(numberLength===14 && (firstTwoDigits==='38' || firstTwoDigits==='39')){
		console.log('Diner\'s Club');
		return ('Diner\'s Club');
	} 
	if (numberLength===15 && (firstTwoDigits==='34' || firstTwoDigits==='37')){
		console.log("American Express");
	} 


	else if (firstTwoDigits[0]==='4' &&(numberLength===13||numberLength===16||numberLength===19)){
		console.log("Visa");
	} 
	*/
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


