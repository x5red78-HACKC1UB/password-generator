let passwordlength;
let lowercaseallowed;
let uppercaseallowed;
let numbersallowed;
let symbolsallowed;

function makepasswurd(length,lowercase,uppercase,numbers,symbols) {
    
const lowercaseletters ="abcdefghijklmnopqrstuvwxyz"
const uppercaseletters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberslist="0123456789"
const symbolslist="!@#$%^&*()"
let allowedcharacters="";
let password="";

allowedcharacters+= lowercase? lowercaseletters:"";
allowedcharacters+= uppercase ?uppercaseletters:"";
allowedcharacters+= numbers?  numberslist:"";
allowedcharacters+= symbols ? symbolslist:"";
console.log(allowedcharacters);

if(length<=0){
    window.alert("PASSWORD LEGTH MUST BE OVER 0");
    passwordlength=Number(window.prompt("How long do u want your password(Type a positive number)"));
}

if (allowedcharacters.length ===0) {
    window.alert("SELECT ONE OR MORE SETTINGS");
    ans1=window.prompt("Do u want your password to include lowercase?(Type Y or N)");
if (ans1==="Y") {
    lowercaseallowed=true;
} else {
    lowercaseallowed=false;
}
ans2=window.prompt("Do u want your password to include uppercase?(Type Y or N)");
if (ans2==="Y") {
    uppercaseallowed=true;
} else {
    uppercaseallowed=false;
}
ans3=window.prompt("Do u want your password to include numbers?(Type Y or N)");
if (ans3==="Y") {
    numbersallowed=true;
} else {
   numbersallowed=false;
}
ans4=window.prompt("Do u want your password to include symbols?(Type Y or N)");
if (ans4==="Y") {
    symbolsallowed=true;
} else {
   symbolsallowed=false;
}
}


for (let i = 0; i < length; i++) {
    const randomchar = Math.floor(Math.random() * allowedcharacters.length);
    password+=allowedcharacters[randomchar];
    
}
return password;
}

let ans1;
let ans2;
let ans3;
let ans4;





passwordlength=Number(window.prompt("How long do u want your password(Type a positive number)"));


ans1=window.prompt("Do u want your password to include lowercase?(Type Y or N)");
if (ans1==="Y") {
    lowercaseallowed=true;
} else {
    lowercaseallowed=false;
}
ans2=window.prompt("Do u want your password to include uppercase?(Type Y or N)");
if (ans2==="Y") {
    uppercaseallowed=true;
} else {
    uppercaseallowed=false;
}
ans3=window.prompt("Do u want your password to include numbers?(Type Y or N)");
if (ans3==="Y") {
    numbersallowed=true;
} else {
   numbersallowed=false;
}
ans4=window.prompt("Do u want your password to include symbols?(Type Y or N)");
if (ans4==="Y") {
    symbolsallowed=true;
} else {
   symbolsallowed=false;
}

console.log("Lowercase: ",lowercaseallowed);
console.log("Uppercase: ",uppercaseallowed);
console.log("Numbers: ",numbersallowed);
console.log("Symbols: ",symbolsallowed);
console.log(passwordlength,"characters");

const password= makepasswurd(passwordlength,
    lowercaseallowed,
    uppercaseallowed,
    numbersallowed,
    symbolsallowed,
);
console.log(`Generated password: ${password}`);
document.getElementById("password").value = password;

let createpassword=document.getElementById("generate");
createpassword.addEventListener("click", function () {
    let newpassword = makepasswurd(
        passwordlength,
        lowercaseallowed,
        uppercaseallowed,
        numbersallowed,
        symbolsallowed
    );

    
    document.getElementById("password").value = newpassword;
    console.log(`Generated password: ${newpassword}`);
});

