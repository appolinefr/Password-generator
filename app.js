//button is clickable and needs to execute start of generate function

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//// prompt with password length & validate length >8 & <128
// if the length is outside of this scope the fonction will stop

function generatePassword() {
  const passwordLength = prompt(
    "Please choose a password length of at least 8 characters and maximum 128 characters"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("invalid number of characters, please try again");
    return;
  }

  // array receiving confirms for all types of characters
  selection = [];

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
    selection.push(specialCharsSelection);
  }

  //get numeric characters with confirm
  const numericCharacter = confirm(
    "Would you like to include numeric characters?"
  );
  // arrays with all possible numeric characters
  var numericCharsSelection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // if numeric characters is selected, store in selection array
  if (numericCharacter) {
    selection.push(numericCharsSelection);
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
    selection.push(uppercaseCharsSelection);
  }

  //get lowercase characters with confirm
  const lowercaseCharacter = confirm(
    "Would you like to include lowercase characters?"
  );

  // arrays with all possible ulowercase characters
  const lowercaseCharsSelection = [
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
    selection.push(lowercaseCharsSelection);
  }

  var randomisedPassword = selection.join("");

  for (var i = 0; i < passwordLength; i++) {
    selection[Math.floor(Math.random() * selection.length)];
  }
  return randomisedPassword;
}
generateBtn.addEventListener("click", writePassword);
