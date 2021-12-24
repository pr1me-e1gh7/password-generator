// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length, lower, upper, numeric, special) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numericEl = document.getElementById('numeric');
const specialEl = document.getElementById('special');
const generateEl = document.getElementById('generate');

// Generator Functions
const randomFunc = {
  lower: getRandomLowercase,
  upper: getRandomUppercase,
  numeric: getRandomNumeric,
  special: getRandomSpecial
};

function getRandomLowercase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUppercase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumeric () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSpecial () {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const addUppercase = uppercaseEl.checked;
  const addLowercase = lowercaseEl.checked;
  const addNumeric = numericEl.checked;
  const addSpecial = specialEl.checked;

  resultEl.innerText.generatePassword(
    length,
    addUppercase,
    addLowercase,
    addNumeric,
    addSpecial
  );
});

