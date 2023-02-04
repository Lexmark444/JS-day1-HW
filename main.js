// Basics of JavaScript

/*
    Hey mom, look at my multi-line comment!
    Let's put it on the fridge
    Primitive data types in JS: strigns, integers, Booleans, floats, arrays, objects(similar to python dictionaries)
    Functions in JS
    Loops
    Scripting vs programming language
*/

var first_name = 'Zack';

// Display the value in JS

console.log(first_name);

// Assign an integer
var some_number = 32;
console.log(some_number);

// show all attributes of a document or id
console.log(document);

// Floats
var some_float = 3.141592;
console.log(some_float);

// Array
var some_array = [1,2,3,4];
console.log(some_array);

// Object
var some_object = {'Yee': 'haw'};
console.log(some_object);

// JavaScript Hoisting
a_num = 10;
console.log(a_num);
var a_num = 10;
console.log(a_num);

console.log(some_random_variable) // still runs but returns undefined which is basically a None type; not good practice
var some_random_variable = 'This is a random variable'
console.log(some_random_variable)

// A better way of declaring a variable is by using 'let' or 'const' keywords

let x = 5;
console.log(x);
x = 3;
console.log(x);

const y = 5;
console.log(y);

// Basic Math operations
// Additons
let sum = 5 + 5;
console.log(sum);

let diff = 5 - 4;
console.log(diff);

// mult, div, and exponenets same as python
// some other math operations
// Finding the floor of a decimal
let find_floor = Math.floor(5.8)
console.log(find_floor)
// Alternatively, Math.ceil(n) brings back the ceiling (6 in the above 5.8)

// Mind bender
let crazy_stuff = some_float + '4'
console.log(crazy_stuff)

// Mind bender 2
let crazy_stuff_2 = some_float + parseFloat('4')
console.log(crazy_stuff_2)

// Redeclaration of variables
var red_ranger ='Jason'
var red_ranger = "Tommy"
console.log(red_ranger)

let nba_goat = 'Michael Jordan'
console.log(nba_goat)

nba_goat = 'Kobe'
console.log(nba_goat)

// Don't re-write let on later variable changes

// Regular named functions
function addNums() {
    let num = 4;
    let num2 = 5;
    return num + num2
}
console.log(addNums())

let addNum2 = function(num, num2){
    return num + num2
}

console.log(addNum2(6,7))

// ES6+ Arrow function in Javascript
// Our first example shows how to use a single paramete in an arrow function without parenthesis
// This can only be done with one parameter if you don't want to use parenthesis

let cubed = num => {
    return num**3
}

console.log(cubed(4));

// with parenthesis
let cubed2 = (num) => {
    return num**3
}

console.log(cubed2(4))

// if you have multiple parameters, you must have parenthesis around them

let toThePower = (num,power) => {
    return num ** power
}

console.log(toThePower(4,3))

console.log(
    (function(name){
    let hello = 'Hello ' + name;
    return hello
})('Krishna'))

// Control Flow
// if statements
function determinAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age < 65){
        return 'Adult'
    } else { return 'Senior'}
}
console.log(determinAge(5))

// Ternary Operators
function determineAge2(age){
    return (age < 18) ? 'minor' : (age >= 18 && age <= 65) ? 'Adult not retired' : 'Retired Senior'
}
console.log(determineAge2(66))

// LOOOOOOOPS
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}
console.log(countByOne())

// def count_by_one():
//     for i in Range(0, 20, 1):
//         print(i)
//     return 'Counting has stopped'

function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Counting has stopped'
}
console.log(decreaseByOne())

function count_with_while(){
    let i = 0;
    let text = '';
    while(i<10){
        text += `This number is..... ${i} \n`;
        i++;
    };
    return text;
}
console.log(count_with_while())

// Do While loop
// will happen atleast one time

function countWithDoWhile(){
    let i = 0;
    let text = '';

    do{
        text += `this number is... ${i} \n`;
        i++;
    }

    while(i < 10){
        return text;
    }
}
console.log(countWithDoWhile())

// create an array
let group_of_names = ['jerry','ben', 'bAsh', 'Brock', 'Misty']

// Index the first position

console.log(group_of_names[0])

let terry, ben, misty;
[terry, misty, ben] = group_of_names
console.log(terry, ben, misty)
console.log(ben)

// Method 1 for looping through and array
function showAllNames(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'done'
}

console.log(showAllNames())

// Method 2

console.log(group_of_names.forEach(i => console.log(i)))

// JS Array method: array.toString()
console.log(group_of_names.toString())
console.log(typeof(group_of_names))
console.log(typeof(group_of_names.toString()))

// more methods: map, filter, and reduce

// .map()
let b_names = group_of_names.map(i =>{
    if (i[0] == 'B'){
        return i
    } else {
        return false
    }
})
console.log(b_names)

// long form of .map()

let b_names_test = function (){
    let test_array = [];
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i])
        }
    }
    return test_array
}

console.log(b_names_test())

// .filter()

let long_names = group_of_names.filter( i => i.length > 4)
console.log(long_names)

// .reduce()

const nums = [2,4,6,8,10]

let nums_reduced = nums.reduce( ( accumulator, current_num) => {
    return accumulator + current_num
})
console.log(nums_reduced)

// You can also use methods like .join, .slice, .search, .splice