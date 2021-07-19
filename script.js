const pwEL = document.getElementById("pw");
const copyEL = document.getElementById("copy");
const lenEL = document.getElementById("len");
const upperEL = document.getElementById("upper");
const lowerEL = document.getElementById("lower");
const numberEL = document.getElementById("number");
const symbolEL = document.getElementById("symbol");
const generateEL = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-][{}.,/";

function getLowercase() {
return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]; 
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]; 
}


function generatePassword() {
  const len = lenEL.nodeValue;

  let password ='';
  
  for(let i=0; i<len; i++){
      const x = generateX();
    password += x;
  }
  
    pwEL.innerText = password;  
}

function generateX() {
   const xs = [];
   if (upperEl.checked) {
       xs.push(getUppercase());
   }
   
   if (lowerEl.checked) {
    xs.push(getLowercase());
}
if (numberEl.checked) {
    xs.push(getNumber());
}
if (symbolEl.checked) {
    xs.push(getSymbol());
}

return xs[Math.floor(Math.random() * xs.length)];

}

generateEL.addEventListener('click', generatePassword);