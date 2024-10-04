//Ch # 1: Alert
//Q # 1.
alert("Welcome to my website!");

//Q # 2. 
alert("Hello World!");


//Ch # 2: Variables for strings.
//Q # 1. Message:
var message = 'Hello world!';
alert(message);

//Q # 2. Age:
var age = 25;
alert("age");

//Q # 3. Greeting:
var greeting = "Good morning!";
alert(greeting);

var greeting = "Good evening!";
alert(greeting);

//Q # 4. Favourit color:
var Favouritcolor = "Green";
alert("Favourit color is" + Favouritcolor);

//Q # 5 is same as Q2

//Q # 1 Ch: 3.Variables for Numbers
var height = 170;
var newheight = height + 10;
alert(newheight);

//Q # 2
var num1 = 50;
var num2 = 30;
var sum = num1 + num2;
alert(sum);

//Q # 3 
var numToBeAdded = 20;
var num = 300;
var total = 320;
alert(total);

//Q # 4
var price = 120;
var tax = price * 0.10;
var totalprice = price + tax;
alert(totalprice);

//Creat variable myAddress with camelCase naming convention
let myAddress = "Karachi City";
alert(myAddress);

//Declare variable using camelCase
let userName = "Naz";
let userEmail = "naz@example.com";
let userPassword = "passwordabcd";
alert("Name:" + userName + ",Email:" + userEmail + ",Password:" + userPassword);

//Declare varibale with spaces (incorrect)
//let user address = "123 Main St";// SyntaxError

// Correct variable name using camelCase
let userAddress = "123 Main St";
alert(userAddress);

//Variable sensitivity(case sensitive)
let rose = "Floribundas";
//alert(Rose);//ReferenceError:Rose is not defined

// Ch:5.Math expressions: Familiar operators

//Q # 1.Basic artithmetic operators

// Q.1: Add 25 and 30, store in sum, and display in alert
var sum = "25 + 30";
alert("The sum is: " + sum);

// Q.2: Add num1 and num2, store in sum, and display in alert
var num1 = 25;
var num2 = 5;
var sum2 = num1 + num2;
alert("The sum of num1 and num2 is: " + sum2);

// Q. 3: Calculate remainder of 27 divided by 4, store in modulusResult, and display in alert
let modulusResult = 27 % 4;
alert("The remainder of 27 divided by 4 is: " + modulusResult);

// Ch: 6.Math expressions: Unfamiliar operators

// Q.1: Post-increment operator
var num = 3;
var newNum = num++;
alert("num: " + num);  // Displays 4
alert("newNum: " + newNum);  // Displays 3

// Q.2: Using counter++ twice
let counter = 10;
counter++;
counter++;
alert("Final counter value: " + counter);  // Displays 12

// Q.3: Post-decrement and pre-increment operators
let points = 20;
points--;
++points;
alert("Final points value: " + points);  // Displays 20

// Q. 4: Pre-increment operator used three times
let number = 0;
++number;
++number;
++number;
alert("Final number value: " + number);  // Displays 3

//1. Calculation with modulus and parentheses:

let calculation = (20 % 6) + 4 * 2;
alert(calculation);

//To solve this, follow the order of operations (PEMDAS):

//- Calculate 20 % 6 = 2
//- Add 4 * 2 = 8
//- Add 2 + 8 = 10

//The value of calculation is 10.

//1. Expression with parentheses:

let expressionValue = (6 + 2) * (5 - 3);
alert(expressionValue);

//To solve this:

//- Calculate expressions inside parentheses first:
//6 + 2) = 8
//(5 - 3) = 2
//- Multiplyresults: 8 * 2 = 16

//The value of expressionValue is 16.

//1. FinalTotal with operator precedence:

let finalTotal = 3 + 4 * 2 - 1;
alert(finalTotal);

//To solve this, follow PEMDAS:

//- Multiply 4 * 2 = 8
//- Add 3 + 8 = 11
//- Subtract 1 from 11 = 10

//The value of finalTotal is 10.

//1. Evaluating answer:

let answer = 2 + 3 * 4 % 5;
alert(answer);

//To solve this:

//- Multiply 3 * 4 = 12
//- Calculate modulus 12 % 5 = 2
//- Add 2 + 2 = 4

//The value of answer is 4.

// Q.1: for user's name
var userNam = prompt("What is your name?");
alert("Hello, " + userName + "!");

// Q.2: for user's age
var age = prompt("How old are you?");
if (age === null) {
    alert("No age provided");
} else {
    alert("You are " + age + " years old.");
}

// Q.3: for number of pets
var pets = prompt("How many pets do you have?");
if (pets === "") {
    alert("You didn't enter anything.");
} else {
    alert("You have " + pets + " pets.");
}

// Q.4: for a number between 1 and 10
var num = prompt("Enter a number between 1 and 10");
var numInt = parseInt(num);
if (isNaN(numInt) || numInt < 1 || numInt > 10) {
    alert("Invalid input. Please enter a number between 1 and 10.");
} else {
    var result = numInt * 2;
    alert("The result is: " + result);
}

// Q.5: for favorite number with default value
var favNum = prompt("What is your favorite number?");
if (favNum === "") {
    favNum = 7; // default value
}
alert("Your favorite number is: " + favNum);


//This script uses


//Q:1. Prompt and If Statement.
var userAnswer = prompt("What is the capital of France?");
if (userAnswer === "Paris") {
    alert("Correct!");
} else {
    alert("Try again!");
}

//let answer = prompt("What is the capital of France?");
//if (answerz . toLowerCase() === "paris") {
// alert("Correct!");
//} else {
//alert("Try again!");
//}


//Q:2. If-Else Statement
var userAnswer = prompt("What is the capital of France?");
if (userAnswer === "Paris") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is Paris.");
}

//Q:3. Multiple Correct Answers
var userAnswer = prompt("What is the capital of the United Kingdom?");
if (userAnswer === "London" || userAnswer === "The United Kingdom") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is London.");
}

//Q:4. Incrementing a Score
var score = 0;
function askQuestion() {
    var userAnswer = prompt("What is the capital of the United Kingdom?");
    if (userAnswer === "London" || userAnswer === "The United Kingdom") {
        score++;
        alert("Correct! Your score is now: " + score);
    } else {
        alert("Incorrect, the correct answer is London. Your score is: " + score);
    }
}
askQuestion();

//Q:5. Testing Multiple Variables
var capitalAnswer = prompt("What is the capital of Germany?");
var mathAnswer = prompt("What is 10 + 10?");
var isCapitalCorrect = (capitalAnswer === "Berlin");
var isMathCorrect = (mathAnswer == 20);
if (isCapitalCorrect && isMathCorrect) {
    alert("You got both right!");
} else if (isCapitalCorrect || isMathCorrect) {
    alert("You got one correct!");
} else {
    alert("You got both wrong.");
}
