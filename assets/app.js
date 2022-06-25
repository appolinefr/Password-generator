var generateBtn = document.querySelector("#generate");

//run generate password function and displays randomised password in password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// arrays with all possible special characters
const specialCharsSelection = [
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
// arrays with all possible numeric characters
const numericCharsSelection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// arrays with all possible uppercase characters
const uppercaseCharsSelection = [
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

// array receiving confirms for all types of characters
passwordPool = [];

// var receiving final password
randomisedPassword = "";

function generatePassword() {
  //prompt with password length & validattion of length >8 & <128
  // if the length is outside of this scope the fonction will stop
  const passwordLength = prompt(
    "Please choose a password length of at least 8 characters and maximum 128 characters"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("invalid number of characters, please try again");
    return;
  } else {
    //confirm to check what type of characters should be included
    if (
      (specChars = confirm("Would you like to include special characters?"))
    ) {
      passwordPool = passwordPool.concat(specialCharsSelection);
    }

    if (
      (numericChars = confirm("Would you like to include numeric characters?"))
    ) {
      passwordPool = passwordPool.concat(numericCharsSelection);
    }

    if (
      (upperChars = confirm("Would you like to include uppercase characters?"))
    ) {
      passwordPool = passwordPool.concat(uppercaseCharsSelection);
    }

    if (
      (lowerChars = confirm("Would you like to include lowercase characters?"))
    ) {
      passwordPool = passwordPool.concat(lowercaseCharsSelection);
    }
    // if no characters is selected the function stops and the user is alerted 
    if (
      specChars === false &&
      numericChars === false &&
      upperChars === false &&
      lowerChars === false
    ) {
      alert("you must choose at least one type of characters!");
    } else {
      //randomising the password and getting the selected length
      for (var i = 0; i < passwordLength; i++) {
        var random = [Math.floor(Math.random() * passwordPool.length)];
        randomisedPassword = randomisedPassword + passwordPool[random];
      }
    }
  }

  return randomisedPassword;
}

generateBtn.addEventListener("click", writePassword);
