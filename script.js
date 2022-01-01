// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate PW Function
function generatePassword() {
    
    // PW Conditions
    var pwLength = document.getElementById("length").value;
    var hasLower = document.getElementById("lowercase").checked;
    var hasUpper = document.getElementById("uppercase").checked;
    var hasNumeric = document.getElementById("numeric").checked;
    var hasSpecial = document.getElementById("special").checked;

    // PW Values
    var valuesLower = [
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var valuesUpper = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var valuesNumeric = [
        "1","2","3","4","5","6","7","8","9","0"];
    var valuesSpecial = [
        "!","@","#","$","%","^","&","*","(",")","[","]","{","}","-","_","=","+","<",">",",",".","?","~","`"];
    
    // Bringing it all together
    let pass = [];
        if (hasLower) pass = pass.concat(valuesLower);
        if (hasUpper) pass = pass.concat(valuesUpper);
        if (hasNumeric) pass = pass.concat(valuesNumeric);
        if (hasSpecial) pass = pass.concat(valuesSpecial);
    var passwordInfo = [];
        for (let i = 0; i < pwLength; i++) {
            passwordInfo.push(pass[Math.floor(Math.random() * pass.length)]);
    }
    return passwordInfo.join("");
}

// Button event
generateBtn.addEventListener("click", writePassword);