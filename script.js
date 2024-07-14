x = 10;

var y = 15;

let course = "Web Development"
// Variabl name = variable value

// const pi = 3.1452;



console.log(x);

///assignment operator = declaring the value for pi. denoted by the = sign
const pi = 3.1452;

// addition operator denoted by +
console.log(x+y);

//Subtraction Operator denoted by -
console.log(x-y);

// Multiplication operator denoted by * (conditional statements and loops)
console.log(x*y);

//Comparison operator denoted by >< symbols. They return either true or false
// greater than (>)
console.log(x>y);

// less than (<)
console.log(x<y);

// equal to (==)
console.log(x==y);

//equal value and equal data type (===)
console.log(x===y);

// greater than or equal to (>=)
//less than or equal to (<=)

// Division operators
console.log(x/y);

//Modulus % - gives us the remainder after dividing
console.log(x%y);

// Increment (++) and decrement (--) operators. Increment a value by one or decrement the value by one. 
console.log(++x);
console.log(--x);

// tenary operator. a conditional operator. denoted by ? condition, ?, and the expression to be executed if the condition is true.
// condition ? expression 1 : expression 2
console.log(x > y ? 'Yes' : 'No');

// numbers : whole intergers or decimals
// strings : characters
// boolean : takes two types of values that is true or false
// array : a collection/list of related items. to define an array we use the following syntax
let fruits = ["Apples", "Oranges", "Berries"];
console.log(fruits);

// Objects : takes the value of name value pairs
let person = { Name: "Gemma", Course: "Web Development", Organisation: "PLP" };
// Undefined data type
let subject;
console.log(subject);
// null refers to an empty value
let car = null;

// function : a block of code designed to perform a particular task.

function addition(a, b) { 
    // define instructions to be executed.
    return a + b;
}

console.log(addition(100, 200));

// arrow syntax
() => {
    // instructions to be executed.
}