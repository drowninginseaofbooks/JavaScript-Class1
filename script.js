// Printing on Terminal
console.log("Hello World");


// Assigning value to the variables
let x = 0;
let y = 0;


// Three Data Types in Js: Numbers, String and Boolean
x = 10;

console.log(x/y);

// Calculating Two Numbers
let a = 10;
let b = 10;
console.log("Addition: ", a+b);
console.log("Subtraction: ", a-b);
console.log("Multiplication: ", a*b);
console.log("Division: ", a/b);

// Typeof shows the type of a variable data
let z = true;
console.log(typeof z);

function testFunc(){
    console.log("Hello World");
}

function addFunc(num1, num2){
    console.log("Addition: ", num1+num2);
}

function subFunc(num1, num2){
    console.log("Subtraction: ", num1-num2);
}


function passStringPara(){   
    let yourName = document.getElementById("yourName").value;
    console.log("Your Name: ", yourName);
    changeText(yourName);
}

function changeText(){
    h1.innerHTML = "Welcome Back "+ yourName.value;
}