// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generator Functions
function getRandomLowercase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLowercase());

function getRandomUppercase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUppercase());

function getRandomNumeric () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumeric());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
