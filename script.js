// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="];

var pool = [];

var completePassword;

random = Math.floor(Math.random() * (10)) + 0;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var button = document.getElementById("generate");
button.addEventListener("click", writePassword);



// Write password to the #password input

function writePassword() {

  var length = prompt("how long do you want your password be?");
  if (length < 8 || length > 128) {
    alert(" sorry must be 8 - 128");
  }


  var upper = confirm("would you like uppercase letters?");
  if (confirm("would you like uppercase letters?") === true) {
    pool.push(upperCase);
  } else {
    console.log("no upperCase");
  }
  // var lower = confirm("would you like lowercase letters?");

  var number = confirm("would you like numbers?");
  if (confirm("would you like numbers?") === true) {
    pool.push(number);
  } else {
    console.log("no numbers");
  }
  // var special = confirm("would you like special charaters?");

  var password = generatePassword();
  for (let i = 0; i < length; i++) {
    var choice = [Math.floor(Math.random() * pool.length)];
    console.log(pool[choice]);
  }
  ;
}


var passwordText = document.querySelector("#password");
passwordText.value = password;
