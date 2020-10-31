// Password Parameters
var passwordLength = prompt("How many characters would you like your password to be?");

while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
}

var upperCase = confirm("Would you like to use uppercase letters?");
var lowerCase = comfirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!upperCase && !lowerCase && !numbers && !symbols) {
  alert("You must select at least one character type! Do you really not want a password?")
  
  upperCase = confirm("Would you like to use uppercase letters?");
  lowerCase = comfirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

//DOM elements
const resultEl = document.getElementById('password');

document.getElementById('generate').addEventListener('click', () => {
  resultEl.value = generatePassword(lowerCase, upperCase, numbers, symbols, passwordLength);
});

document.getElementById('clipboard').addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.value;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
});
});


const randomFunc = {
lower: getRandomLower,
upper: getRandomUpper,
number: getRandomNumber,
symbol: getRandomSymbol
};

function generatePassword(lower, upper, number, symbol, length) {
let generatedPassword = '';
const typesCount = lower + upper + number + symbol;
const typesArr = [{
  lower
}, {
  upper
}, {
  number
}, {
  symbol
}].filter(item => Object.values(item)[0]);


// Password Generator Functions
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
