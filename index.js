// Question #1: Write a js program to find the maximum between two numbers. 
function maxnum(num1,num2) {
       if(num1>num2){
        console.log(num1 + " is greater than " + num2)
       }
       else if(num2>num1){
        console.log(num2 + " is greater than " + num1)
       }    
       else{
        console.log("Both numbers are same")
       }
}

var number1 = prompt("Enter first number");
var number2 = prompt("Enter second number");
maxnum(number1,number2)

// Question #2: . Write a js program to find the maximum between three numbers.
function maxnum2(num1,num2,num3){
       if(num1>num2 && num2>num3){
              console.log(num1 + " is greatest.")
       }
       else if(num2>num1 && num2>num3){
              console.log(num2 + " is greatest.")
       }
       else{
              console.log(num3 + " is greatest")
       }
}
var number1 = prompt("Enter first number");
var number2 = prompt("Enter second number");
var number3 = prompt("Enter third number");
maxnum2(number1,number2,number3)

// Question #3: . Write a js program to check whether a number is negative, positive or
// zero.

function posneg(num1){
       if(num1>0){
              console.log(num1 + " is a positive number.")
       }
       else{
              console.log(num1 + " is a negative number.")
       }
}
var number1 = prompt("Enter a number");
posneg(number1);
// Question #4: Write a js program to check whether a number is divisible by 5 and 11 or
// not.

function divisible(num1){
       if(num1 % 5 === 0 && num1 % 11 ===0){
              console.log(num1 + " is divisible by both 5 and 11.")
       }
       else{
              console.log(num1 + " is not divisible by both 5 and 11.")
       }
}
var number1=prompt("Enter a number.")
divisible(number1)

// Question #5: Write a js program to check whether a number is even or odd.

function evenodd(num1){
       if(num1%2===0){
              console.log(num1 + " is an even number.")
       }
       else{
              console.log(num1 +" is an odd number.")
       }
}
var number1= prompt("Enter a number")
evenodd(number1)

// Question #6:Write a js program to check whether a year is leap year or not

function leapyear(num1){
       if(num1 % 4 === 0 && num1 %100 !==0){
              console.log(num1 + " is a leap year.")
       }
       else{
              console.log(num1 + " is not a leap year.")
       }
}
var number1 = prompt("Enter the year.")
leapyear(number1)

// Question #7: Write a js program to input any alphabet and check whether it is vowel or
// consonant


function alphabet(alpha){
       if(alpha === "a"|| alpha === "e"|| alpha === "i"|| alpha === "o"|| alpha === "u"){
              console.log(alpha + " is a vovel")
       }
       else{
              console.log(alpha + " is a constant.")
       }
}
var alphab = prompt("Enter a alphabet.")
alphabet(alphab)

// Question #8: Write a js program to check whether a character is uppercase or
// lowercase alphabet.

function checkCase(character) {
       if (character === character.toUpperCase()) {
           console.log( character + " is an uppercase alphabet.");
       } else {
           console.log(character + " is a lowercase alphabet.")
       }
   }


const inputCharacter = prompt("Enter a alphabet")
checkCase(inputCharacter)

// Question #9: Write a js program to input the week number and print weekday


function Weekday(weekNumber) {
       if (weekNumber === "!") {
           console.log("Monday");
       } else if (weekNumber === "2") {
              console.log("Tuesday");
       } else if (weekNumber === "3") {
              console.log("Wednesday");
       } else if (weekNumber === "4") {
              console.log("Thursday");
       } else if (weekNumber === "5") {
              console.log("Friday");
       } else if (weekNumber === "6") {
              console.log("Saturday");
       } else if (weekNumber === "7") {
              console.log("Sunday");
       } else {
           console.log( "Invalid week number.");
       }
   }

   var inputWeekNumber = prompt("Enter week number")
   Weekday(inputWeekNumber)
   
//    Question #10: Write a js program to input the month number and print the number of
//    days in that month

function month(monthNumber) {
       if (monthNumber === "!") {
           console.log("January");
       } else if (monthNumber === "2") {
              console.log("February");
       } else if (monthNumber === "3") {
              console.log("March");
       } else if (monthNumber === "4") {
              console.log("April");
       } else if (monthNumber === "5") {
              console.log("May");
       } else if (monthNumber === "6") {
              console.log("June");
       } else if (monthNumber === "7") {
              console.log("July");
       } else if (monthNumber === "8") {
              console.log("August");
       }
       else if (monthNumber === "9") {
              console.log("September");
       }
       else if (monthNumber === "10") {
              console.log("Octuner");
       }
       else if (monthNumber === "11") {
              console.log("November");
       }
       else if (monthNumber === "12") {
              console.log("December");
       }
        else {
           console.log( "Invalid week number.");
       }
   }

   var inputMonthNumber = prompt("Enter Month number")
   month(inputMonthNumber)

//    Question #12: Write a js program to input marks of five subjects Physics, Chemistry,
//    Biology, Mathematics, and Computer. Calculate percentage and grade
//    according to the following:
//    Percentage >= 90% : Grade A
//    Percentage >= 80% : Grade B
//    Percentage >= 70% : Grade C
//    Percentage >= 60% : Grade D
//    Percentage >= 40% : Grade E
//    Percentage < 40% : Grade F

function calculateGrade(physics, chemistry, biology, maths, computer) {

       Physics= Number(physics)
       Chemistry= Number(chemistry)
       Biology= Number(biology)
       Maths= Number(maths)
       Computer= Number(computer)
       
       var totalMarks = Physics + Chemistry + Biology + Maths + Computer;
       var percentage = (totalMarks / 500) * 100;
   
       if (percentage >= 90) {
           console.log("Grade = A");
       } else if (percentage >= 80 && percentage < 90) {
           console.log("Grade = B");
       } else if (percentage >= 70 && percentage < 80) {
           console.log("Grade = C");
       } else if (percentage >= 60 && percentage < 70) {
           console.log("Grade = D");
       } else if (percentage >= 40 && percentage < 60) {
           console.log("Grade = E");
       } else {
           console.log("Grade = F");
       }
   }
   
   var Physics = prompt("Enter marks of Physics");
   var Chemistry = prompt("Enter marks of Chemistry");
   var Biology = prompt("Enter marks of Biology");
   var Maths = prompt("Enter marks of Maths");
   var Computer = prompt("Enter marks of Computer");
   
   calculateGrade(Physics, Chemistry, Biology, Maths, Computer);

// Question #13:Write a js program to input the basic salary of an employee and calculate
// its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

   function calculateGrossSalary(basicSalary) {
       let grossSalary;
       let hra, da;
   
       if (basicSalary <= 10000) {
           hra = basicSalary * 0.2;
           da = basicSalary * 0.8;
       } else if (basicSalary <= 20000) {
           hra = basicSalary * 0.25;
           da = basicSalary * 0.9;
       } else {
           hra = basicSalary * 0.3;
           da = basicSalary * 0.95;
       }
   
       grossSalary = basicSalary + hra + da;
       return grossSalary;
   }
   
   const basicSalary = 15000
   const grossSalary = calculateGrossSalary(basicSalary);
   console.log("Gross Salary:", grossSalary);
   
   
   
