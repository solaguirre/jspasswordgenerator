// Constants

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const lowerCaseArray = lowercase.split('');
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const upperCaseArray = upperCaseArray.split('');

let possibleChars = [];

console.log(lowerCaseArray;)
console.log(upperCaseArray);


// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword() {

  // Password is currently blank! We need to make a better one
  let password = "";

  let pwLength = prompt("Choose passwrod legth: 8-128 characters.");
  if (length < || > length > 128) {
    alert("Password must be between 8 and 128 characters.")

    generatePassword();
  }


  let = confirm();


  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const allChars = []

let pwLength = prompt("How many characters do you want your password to be?");


conf


alert
no less than 8 no more than 128


toUppperCase 