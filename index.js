const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl1 = document.getElementById("password-el1");
let passwordEl2 = document.getElementById("password-el2");
let passwordLimit = 6;
let str = "";
let str2 = "";

const generatePassword = () => {
    //get value of textbox. And then remove spaces inbetween words (if there are any)
    //split the keyword into array of strings without spaces. Then join them together again. It wont have spaces.
    let textEl = document.getElementById("text-el").value.split(" ").join("");
    str = textEl;
    str2 = textEl;
    
  for (let i = 0; i < passwordLimit; i++){
      str += getRandomCharacter();
      str2 += getRandomCharacter();
  }
  passwordEl1.textContent = str;
  passwordEl2.textContent = str2;
}

window.generatePassword = generatePassword

const getRandomCharacter = () => {
    let random = Math.floor(Math.random() * characters.length)
        let randomCharacter = characters[random];
        return randomCharacter;
}

window.getRandomCharacter = getRandomCharacter;
