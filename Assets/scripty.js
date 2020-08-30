// Constants
const generateBtn = document.querySelector("#generate");

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let lowerCaseArray = lowerCase.split('');
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let upperCaseArray = upperCase.split('');
let numbers = "0123456789"
let numbersArray = numbers.split('');
let special = "!@#$%^&*()_+=-{}|[]\:;,./~";
let specialArray = special.split('');

let allChars = []
let password = '';

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;
}
let password = "";

function generatePassword() {
    let pwLength = parseInt(prompt("Choose a password length: 8-128 characters."));
    if (pwLength < 8 || pwLength > 128) {
        alert("Please choose a length from 8 - 128 characters.");
        return password;
    }
}

let lowerCase = confirm("Do you want lowercase letters?");
let upperCase = confirm("Do you want uppercase letters?");
let numbers = confirm("Do you want numeric characters in your password?");
let special = confirm("Do you want special characters in your password?");
// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
