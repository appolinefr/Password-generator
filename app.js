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

// create a generatedList variable that will receive all the info on characters
generatedlist = []; // look into .push 
// create a second bucket where all the randomised characters will be 

// for in loop so that the numbers of characters are matching the desired length

  // prompt 1 about password lenght // How do you make it go back to the prompt?
  let passwordLength = prompt("Please choose a password length between between 8 and 128 characters");
  if (passwordLength < 8) {alert("You need at least 8 characters"); 
} else if (passwordLength > 128) {alert("The maximum length is 128 characters")}; 

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
specialCharacterSelected = ["!", "”", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "_", "`", "^", "[", "]", "{", "}", "|", "~"];
numericCharacterSelected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
uppercaseCharacterSelected = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowercaseCharacterSelected = ["a", "b", "c", "d", "e", "f", "g", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// randomisation : this should only happen if one is selected and I have to move that in the if of each one
index = Math.floor(Math.random() * specialCharacterSelected.length);
specialCharacterChoice = specialCharacter[index];

index = Math.floor(Math.random() * numericCharacterSelected.length);
numericCharacterChoice = numericCharacter[index];

index = Math.floor(Math.random() * uppercaseCharacterSelected.length);
upperCharacterChoice = uppercaseCharacter[index];

index = Math.floor(Math.random() * lowercaseCharacterSelected.length);
lowerCharacterChoice = lowercaseCharacter[index];




