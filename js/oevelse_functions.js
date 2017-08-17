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

// Øvelse A
printNavn("Gandi");
printNavn("Hugo Jensen");
printNavn("28/9-2000");

function printNavn(who) {
    console.log(who);
}

function udskriv(fornavn, efternavn, fodselsdag) {
    console.log(fornavn, efternavn, fodselsdag);
}
udskriv('Gandi', 'Jensen', 2000);

// Øvelse B
printTal();

function printTal() {
    console.log(8 + 8);
    console.log(8 - 8);
    console.log(8 * 8);
    console.log(8 / 8);
    console.log(8 % 8);
}

function add(tal1, tal2) {
    console.log(tal1 + tal2);
    console.log(tal1 - tal2);
    console.log(tal1 * tal2);
    console.log(tal1 / tal2);
    console.log(tal1 % tal2);
}

var result = 0;
function add(tal) {
    // result = result + tal;
    result += tal;
}

function sub(tal) {
    result -= tal;
}

add(5);
add(8);
sub(4);

console.log(result);