// let message = "Hello World!";
// let hello = message;
// alert(hello);

// let admin, name;
// name = "David";
// admin = name;
// alert(admin);


// let message = "Hello World!";
// let newMessage = message;
// alert(newMessage);

// let message = "Hello World!";
// message = 12345;
// alert(message);

// alert(NaN**0);

// let message = "World";
// alert(`Hello ${message}!`);

// let number = 4>1;
// alert(number);

// let age;
// alert(age);

// alert( `hello ${1}` ); 
// alert( `hello ${"name"}` );

// let age = prompt("How old are you?", 18);
// alert(`Your age is: ${age}`);

// let age = prompt("How old are you: ", 18);
// alert(`Your age is ${age}`);

// let value = 18;
// alert(typeof value);
// value = String(value);
// alert(typeof value);

// let str = "123";
// alert(typeof str);
// let num = Number(str);
// alert(typeof num);

// let a = 1;
// let b = 2;
// let c = b + (a - 1);
// alert (c);

// let a = b = c = 4;
// alert(a - 1);
// alert(b - 2);>
// alert(c - 4);

// let year = prompt("How old are you");
// if(year >= "18"){
//     alert("Access Granted")
// }else{
//     alert("Access Denied")
// }

// let score = prompt("Enter your Score: ");
// if(score>=90){
//     alert("Your Grade is A+");
// }else if(score>=80){
//     alert("Your Grade is A");
// }else if(score>=70){
//     alert("Your Grade is B");
// }else if(score>=60){
//     alert("Your Grade is C");
// }else if(score>=50){
//     alert("Your Grade is D");
// }else{
//     alert("Your Grade is F")
// }

// let score = prompt("Enter your score: ");
// if (score >= 80) {
//     alert("Your grade is A");
//     if(score >=90){
//         alert("Your grade is A+");
//     }
// }else if(score>=70){
//     alert("Your Grade is B");
// }else if(score>=60){
//     alert("Your Grade is C");
// }else if(score>=50){
//     alert("Your Grade is D");
// }else{
//     alert("Your Grade is F")
// }

// for(var i=0; i<3; i++){
//     console.log(i);
// }

// for (var i = 10; i > 0; i--) {
//     console.log(i);
// }

// let num = prompt("Enter Number for Table: ");
// for (let i = 1; i <= 10; i++) {
//     if(i == "5"){
//         continue;
//     }
//     console.log(num + " x " + i + " = " + (num * i));
// }

// let num = prompt("Enter a Number: ");
// let isPrime = true;
// for(let i = 2; i<num; i++){
//     let result = num % i;
//     if(result == 0){
//         console.log(num+ " is not a Prime Number");
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime){
//     console.log(num+ " is a Prime Number")
// }

// let food = ["Pizza", "Burger", "Sandwich"];
// console.log(food);
// console.log(food[1]); //Burger
// console.log(food[4]); //undefined

// let arr = [];
// arr[0]="Bag";
// arr[1]="Pencil";
// arr[2]="Copy";
// console.log(arr);

// let arr = ["Bag", "Pencil", "Copy"];
// console.log(arr);
// arr[2] = "Pen";
// console.log(arr[2]);
// console.log(arr.length)
// arr.push("Burger, Pizza", "Sandwich");
// console.log(arr);

// for(let i = 0; i<5; i++){
//     for(let j = 0; j<3; j++){
//         console.log("I = "+i+" - J = "+j);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log("I "+i+" , J "+j);
//     }
// }

// let arr = [];
// arr.push("Candy"); 
// arr.push("Cake"); 
// arr.push("Chocolate");
// console.log(arr); 
// arr.pop(); //Stack Function (LIFO)
// console.log(arr); 
// arr.shift(); // Qeue Function (FIFO)
// console.log(arr);
// arr.push("Toffee");
// console.log(arr);
// arr.unshift("Sandwich");
// console.log(arr);

// let arr = ['Chocolate', 'Cake', 'Candy', 'Tofee', 'Sandwich'];
// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
// }

// let arr = [];
// for (let i = 0; i <= 5; i++) {
//     arr[i] = i * 2;
//     console.log(arr[i]);
// }

// let arr = ['11', '22', '33', '44', '55', '66', '77', '88', '99'];
// let find = prompt("Enter a Number: ");
// let found = false;
// console.log("You Enter "+find)
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] === find){
//         console.log(find+" is Found at index "+i);
//         found = true;
//     }
// }
// if(!found){
//     console.log("Not Found!");
// }

// let food = ['Pizza', 'Burger', 'Nugets', "Fries"];
// console.log(food);
// var arr = food.splice(1,2,'Sandwich');
// console.log(food);
// console.log(arr);

// let food = ['Pizza', 'Burger', 'Nugets', "Fries"];
// console.log(food);
// let reversArr = food.reverse();
// console.log(reversArr);

// let arr = food.slice(1,3);
// console.log(arr);


// // *****************************************
// // Assignment

// // Declare and Initialize an array and store available education
// // qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M.
// // Phil., PhD). Show the listed qualifications in your browser like:

// let educationQualification = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];
// console.log("Education Qualifications in Pakistan: ")
// for (let i = 0; i < educationQualification.length; i++) {
//     console.log(i+1 + ") " + educationQualification[i]);
// }

// // ------------------------


// // Write a program to store 3 student names in an array.Take another
// // array to store score of these three students. Assume that total marks
// // are 500 for each student, display the scores & percentages of
// // students like:

// let studentsName = ['Michael', 'Jhon', 'Tony', 'Luke'];
// let studentsScore = [320, 230, 480, 221];
// let totalScore = 500;
// for (let i = 0; i<studentsName.length; i++){
//     let totalPerc = ((studentsScore[i]/totalScore) * 100);
//     console.log(studentsName[i]+" has scored "+studentsScore[i]+" with percentage of "+totalPerc+"%");
// }

// // ...............................

// // Escape Characters
// var a = "Hello\" World";
// alert(a);
// var b = "Hello\' World";
// alert(b);
// var c = "Hello\n World";
// alert(c);
// var d = "Hello\t World";
// alert(d);