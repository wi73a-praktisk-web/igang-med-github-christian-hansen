// Eksempel 1
hello(); // Udskriver "hello......."

function hello() {
    console.log('HELLO.......');
}

// Eksempel 2
sayHello('hoisting'); // Udskriver "Hello hoisting"
sayHello('me'); // Uskriver "Hello me"

function sayHello(who) {
    console.log('hello', who);
}

// Eksempel 3
var sayHey = function sayHey(value) {
    console.log(value);
}

sayHey('test for hoisting'); // flyt ned under funktionen