const fs = require("fs");
function generatePassword() {
  let password = "1q";
  for (let i = 0; i < 2; i++) {
    password += getRandomCharacter();
  }
  return password;
}
function getRandomCharacter() {
  const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}
if (!fs.existsSync("passwords.txt")) {
    fs.writeFileSync("passwords.txt", "");
}
if (fs.existsSync("passwords.txt")) {
    while (true) {
        let password = generatePassword();
        if (!fs.readFileSync("passwords.txt", "utf8").includes(password)) {
            fs.appendFileSync("passwords.txt", password + "\n");
        }
    }
}
