
//defines variables

var len = name.length; // sets length of the name Constant as a variable
var len2 = number.length; // sets length of the number Constant as a number

//defines function
function entername() {
	// prompts user to enter name, then sets name as a constant
    const name = prompt('Enter First and Last Name');


// checks if the length of the name is 21 characters or higher
  if (name.length >= +21){
//prompts user to try again
	alert(`Name is longer than 20 characters, please try again!`);
	entername();

}
else {
	//prompts user to enter numbers, then sets numbers as a constant
	const number = prompt('Enter Badge ID');
	// checks if number is 3 digits
	if (number.length > 3 && number >= 1000){

		alert(`ID needs to be 3 numbers, please try again!`);
		entername();
	}
	// checks if number is 3 digits
	else if (number.length < 3){

		alert(`ID needs to be 3 numbers, please try again!`);
		entername();
	}// checks if number is 3 digits
			else if (number.length <= 3 && number <= 999) {
				//logs constants to console
		console.log(name);
		console.log(number);
		// alerts the user with their name they entered and number they entered
		alert('Your name is ' + name + ', and your ID is' + number + '.');
			}
			//displays information on webpage
			document.getElementById('output1').innerHTML = "Your name is: " + name;
			document.getElementById('output2').innerHTML = "Your ID is: " + number;



}

}
