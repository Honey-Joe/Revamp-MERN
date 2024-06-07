// Javascript Definition

/*
    Javascript is programming language widely used for web development. It is interpreter language. It executes the code line by line.
    Javascript is synchronous and unblocking. It is single threaded language.
*/

// Variables
/* 
    1.let -used for local scope
    2.var -used for global scope
    3.const - used to declare a constant
*/
    let userAge=15
    let userName='Honey Joe'
    console.log(userAge,userName)

// Comments in javascript

/* 
    There are two types of comments 
    1.Single line comment- Used to comment single line - //

    2.Multi line comment - used to comment more than one line- 
*/

/* 
    Hello this is a 
    multi line comment
*/

// Opretaions in JS

/* 
    1.Addition
    2.Subraction
    3.Multiplication
    4.Division
*/

let a=10
let b=5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

//Data types in JS

/*
    1)Primitives

        1.number
        2.string
        3.boolean
        4.undefined
        5.null
    2)Non Primitives

        1.Array
        2.Object
*/

let num=10
let str="HEllo"
let bool=true
let n=null

let arr=[1,2,3.4,'hello']
let obj={
    name:'honey',
    age:19  
};

console.log(typeof(num))
console.log(typeof(str),typeof(bool),typeof(u),typeof(n),typeof(arr),typeof(obj))

// Functions in JS

function greetUser(name){
    return name
}

const func=greetUser('joe')

console.log(func)

// if else( in JS

let temperature =45

if(temperature>30){
    console.log(temperature)
}
else{
    console.log("temperature is not greater than 30")
}

// for loop

for(var i=1 ; i<=5 ; i++){
    console.log(i)
}

// loose equality strict equality

a='5'

b=5

console.log(a==b)
console.log(a===b)



