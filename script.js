// Assignment Code (Variable Set-Up)
var passwordLength = prompt("How many characters would you like your password to be?");

while (plength < 8 || plength > 128) {
  plength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
}

var upperCase = confirm("Would you like to use uppercase letters?");
var lowerCase = comfirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!upperCase && !lowerCase && !numbers && !symbols){
  alert("You must select at least one character type! Do you really not want a password?")
  
  upperCase = confirm("Would you like to use uppercase letters?");
  lowerCase = comfirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
