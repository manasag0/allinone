//day 17 // day 54 //53 days left
//15.4.2024

// did objects

let input = 'name';

let alien ={
    name:"manasa",
    tech:"Js",
    'work exp':4,
    laptop:{
        cpu:'i3',
        ram:8,
        brand:"ASUS"
    }
}

console.log(alien[input])

//complx object -having object inside opject
//for loop in object

for(let key in alien.laptop){
    console.log(key,alien.laptop[key]);
}


//Functions

// to call multiple time
//break down into small
//Dont Repeat Yourself DRY

function greet(){
    console.log("Hello World")
}
greet();

//function return and passing
// when a return statement is used in a function body, the execution of the function is stopped
function name(namee){
    return `Hello ${namee}`;
}
let namee = "manasa"
let str = name(namee)
console.log(str)

//function expression
//when we declare a function without using var or  let or const keyword then it becomes a function expression
let showName = function (namee){
    return `Show Name ${namee}`;
    }
console.log(showName("Manasa"))

let add = function(num1, num2){
    return num1  + num2
}
console.log(add(5,6))
//call back functions
//A callback function is a function that is passed as an argument to another function and this function is executed inside the parent function. Callback functions are
//A callback function is a function that is passed as an argument to another function and this function is executed inside the parent function. Callback functions
//functions that are passed as arguments to another function so they can be executed later
setTimeout(function() {
   console.log('I am from Callback')
},3000);

//Higher Order Functions
//A function that accepts another function as an argument is known as higher order function
// A function that returns a function is also called Higher Order Function

let multiplyByTwo = function(x) {return x * 2;}
console.log(multiplyByTwo(7));

let double = multiplyByTwo; // assigning the value of multiplyByTwo to double variable
console.log(double(7));

//using arrow functions
let multiplyByFour = num => num *4 ;
console.log(multiplyByFour(8));

//anonymous functions
setTimeout(()=>{
    console.log('I am Anonymous');
});

//recursion