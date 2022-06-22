// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

  var generateBtn = document.querySelector("#generate"); 
  
  generateBtn.addEventListener("click", generatePassword);
  
specialCharacterSelected = ["!", "”", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "_", "`", "^", "[", "]", "{", "}", "|", "~"];
numericCharacterSelected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
uppercaseCharacterSelected = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowercaseCharacterSelected = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

generatedList = []; 

var generatedPassword = (generatedList.join(''));

// look into for in loop so that the numbers of characters are matching the desired length

function generatePassword() {

  let passwordLength = prompt("Please choose a password length between between 8 and 128 characters");
  
  if (passwordLength < 8 ) {alert("You need at least 8 characters");
} else if (passwordLength > 128) {alert("The maximum length is 128 characters")
} else {generateSpecialCharacter()}; 
}


function generateSpecialCharacter (){
  
  specialCharacter = confirm("Would you like to include special characters?"); 
  
  index = Math.floor(Math.random() * specialCharacterSelected.length);
  var specialCharacterChoice = specialCharacterSelected[index];
  
  if (specialCharacter) {generatedList.push(specialCharacterChoice)};
};


function generateNumericCharacter () {
  
  numericCharacter = confirm("Would you like to include numeric characters?"); 
  
  index = Math.floor(Math.random() * numericCharacterSelected.length);
  numericCharacterChoice = numericCharacterSelected[index];
  
  if (numericCharacter) {generatedList.push(numericCharacterChoice)} 
};


function generateUppercaseCharacter () {
  
  uppercaseCharacter = confirm("Would you like to include uppercase characters?"); 
  
  index = Math.floor(Math.random() * uppercaseCharacterSelected.length);
  upperCharacterChoice = uppercaseCharacterSelected[index];
  
  if (uppercaseCharacter) {generatedList.push(upperCharacterChoice)};
};


function generateLowercaseCharacter (){
  
  lowercaseCharacter = confirm("Would you like to include lowercase characters?"); 
  
  index = Math.floor(Math.random() * lowercaseCharacterSelected.length);
  lowerCharacterChoice = lowercaseCharacterSelected[index];
  
  if (lowercaseCharacter) {generatedList.push(lowerCharacterChoice)} ;
}








