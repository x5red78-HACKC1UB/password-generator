let passwordlength;
let lowercase;
let uppercase;
let numbers;
let symbols;
let ans1;
let ans2;
let ans3;
let ans4;
passwordlength=Number(window.prompt("How long do u want your password(Type a positive number)"));
ans1=window.prompt("Do u want your password to include lowercase?(Type Y or N)");
if (ans1==="Y") {
    lowercase=true;
} else {
    lowercase=false;
}