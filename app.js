

var generateBtn = document.querySelector("#generate");

//run generate password function and displays randomised password in password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
  // array receiving confirms for all types of characters
  possibleCombo = [];

  //prompt with password length & validattion of length >8 & <128
  // if the length is outside of this scope the fonction will stop
  const passwordLength = prompt(
    "Please choose a password length of at least 8 characters and maximum 128 characters"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("invalid number of characters, please try again");
    return;
  }

  //get special characters with confirm
  const specialCharacter = confirm(
    "Would you like to include special characters?"
  );

  // arrays with all possible special characters
  var specialCharsSelection = [
    "!",
    "”",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    ">",
    "?",
    "@",
    "_",
    "`",
    "^",
    "[",
    "]",
    "{",
    "}",
    "|",
    "~",
  ];

  // if special characters is selected, store in selection array
  if (specialCharacter) {
    possibleCombo.push(specialCharsSelection);
  }

  //get numeric characters with confirm
  const numericCharacter = confirm(
    "Would you like to include numeric characters?"
  );
  // arrays with all possible numeric characters
  var numericCharsSelection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // if numeric characters is selected, store in selection array
  if (numericCharacter) {
    possibleCombo.push(numericCharsSelection);
  }
  //get uppercase characters with confirm
  const uppercaseCharacter = confirm(
    "Would you like to include uppercase characters?"
  );

  // arrays with all possible uppercase characters
  var uppercaseCharsSelection = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // if upppercase characters is selected, store in selection array
  if (uppercaseCharacter) {
    possibleCombo.push(uppercaseCharsSelection);
  }

  //get lowercase characters with confirm
  const lowercaseCharacter = confirm(
    "Would you like to include lowercase characters?"
  );

  // arrays with all possible ulowercase characters
  var lowercaseCharsSelection = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // if lower characters is selected, store in selection array
  if (lowercaseCharacter) {
    possibleCombo.push(lowercaseCharsSelection);
  }

  // password variable is an array placeholder for user generated amount of length

  var randomisedPassword = [];

  //randomising possible combo
  for (var i = 0; i < passwordLength; i++) {
    var randomisedChars =
      possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
  randomisedPassword.push(randomisedChars);

  //final password will display in a single string
  var finalPassword = randomisedPassword.join("");

  return finalPassword;
}

  generateBtn.addEventListener("click", writePassword);
