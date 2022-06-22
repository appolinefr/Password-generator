// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code : When you click on that button it should start with the prompt with the event listener 
var generateBtn = document.querySelector("#generate"); 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //shouldn't we call the generate function instead?

// Write password to the #password input
function writePassword() {}
  

var passwordText = document.querySelector("#password");
var password = generatePassword(); // Is that meant to be the function expression where all the prompt and confirm are coming from? 
passwordText.value = password;

writePassword();




  // prompt 1 about password lenght // How do you make it go back to the prompt?
  let passwordLength = prompt("Please choose a password length between between 8 and 128 characters");
  if (passwordLength < 8) {alert("You need at least 8 characters"); // then goes back to the prompt 
} else if (passwordLength > 128) {alert("The maximum length is 128 characters")}; // then goes back to the prompt 

// confirm about special characters  
specialCharacter = confirm("Would you like to include special characters?"); 
if (specialCharacter) {}

// confirm about numeric character 
numericCharacter = confirm("Would you like to include numeric characters?"); 
if (numericCharacter) {}
// confirm about uppercase Character 
uppercaseCharacter = confirm("Would you like to include uppercase characters?"); 
if (uppercaseCharacter) {}
// confirm about lowercase Character 
lowercaseCharacter = confirm("Would you like to include lowercase characters?"); 
if (lowercaseCharacter) {}

// array with all possible options ?
specialCharacterSelected = [];
numericCharacterSelected = [];
uppercaseCharacterSelected = [];
lowercaseCharacterSelected = [];

// randomisation
index = Math.floor(Math.random() * specialCharacter.length);
specialCharacterChoice = specialCharacter[index];

index = Math.floor(Math.random() * numericCharacter.length);
numericCharacterChoice = numericCharacter[index];

index = Math.floor(Math.random() * uppercaseCharacter.length);
upperCharacterChoice = uppercaseCharacter[index];

index = Math.floor(Math.random() * lowercaseCharacter.length);
lowerCharacterChoice = lowercaseCharacter[index];




