// Constants
const generateBtn = document.querySelector("#generate");

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let lowerCaseArray = lowerCase.split("");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let upperCaseArray = upperCase.split("");
let number = "0123456789";
let numberArray = number.split("");
let special = "`~!@#$%^&*()_+{}:<>?/.,';][\||";
let specialArray = special.split("");

let password = "";
let allChars = [];

// Functions

/*** writes a generated password to the #password*/
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*** generate a password based on certain criteria*/
function generatePassword() {
  let pwLength = prompt("Please enter the numnber of characters you want for your password. It must be between 8 and 128 characters.");

  if (pwLength < 8 || pwLength > 128) {
    alert("Please choose a length between 8 and 128 characters.");
  }
  if (confirm("Do you want lowercase characters?")) {
    Array.prototype.apply(allChars, lowerCaseArray);
  }

  if (confirm("Do you want uppercase characters?")) {
    Array.prototype.apply(allChars, upperCaseArray);
  }

  if (confirm("Do you want numeric characters?")) {
    Array.prototype.apply(allChars, numberArray);
  }

  if (confirm("Do you want special characters?")) {
    Array.prototype.apply(allChars, specialArray);
  }

  if (allChars.length === 0) {
    alert("Minimum one type of character must be selected.");
  };
  return password;
}
