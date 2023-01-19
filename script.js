// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="];

var completePassword;

random = Math.floor(Math.random() * (10)) + 0;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var button = document.getElementById("generate");
button.addEventListener("click", writePassword);



// Write password to the #password input

function writePassword() {
  var pool = [];
  var length = prompt("how long do you want your password be? Please choose something between 8 and 128.");
  if (length < 8 || length > 128) {
    return " sorry must be 8 - 128";
  }


  //var upper = confirm("would you like uppercase letters?");

  if (confirm("would you like uppercase letters?") === true) {
    pool = pool.concat(upperCase);
    console.log("confirm")
  } else {
    console.log("no upperCase");
  }
  // var lower = confirm("would you like lowercase letters?");
  if (confirm("would you like lowercase letters?") === true) {
    pool = pool.concat(lowerCase);
  } else {
    console.log("no lowecase");
  }

  // var number = confirm("would you like numbers?");
  if (confirm("would you like numbers?") === true) {
    pool = pool.concat(number);
  } else {
    console.log("no numbers");
  }
  // var special = confirm("would you like special charaters?");
  if (confirm("would you like special character?") === true) {
    pool = pool.concat(special);
  } else {
    console.log("no special");
  }

  console.log(pool)
  var password = "";
  for (let i = 0; i < length; i++) {
    var choice = Math.floor(Math.random() * pool.length);
    password += pool[choice];
  }
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}