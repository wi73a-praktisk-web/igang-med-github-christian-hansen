// // Eksempel 1
// hello(); // Udskriver "hello......."

// function hello() {
//     console.log('HELLO.......');
// }

// // Eksempel 2
// sayHello('hoisting'); // Udskriver "Hello hoisting"
// sayHello('me'); // Uskriver "Hello me"

// function sayHello(who) {
//     console.log('hello', who);
// }

// // Eksempel 3
// var sayHey = function sayHey(value) {
//     console.log(value);
// }

// sayHey('test for hoisting'); // flyt ned under funktionen

// // Øvelse A
// printNavn("Gandi");
// printNavn("Hugo Jensen");
// printNavn("28/9-2000");

// function printNavn(who) {
//     console.log(who);
// }

// function udskriv(fornavn, efternavn, fodselsdag) {
//     console.log(fornavn, efternavn, fodselsdag);
// }
// udskriv('Gandi', 'Jensen', 2000);

// // Øvelse B
// printTal();

// function printTal() {
//     console.log(8 + 8);
//     console.log(8 - 8);
//     console.log(8 * 8);
//     console.log(8 / 8);
//     console.log(8 % 8);
// }

// function add(tal1, tal2) {
//     console.log(tal1 + tal2);
//     console.log(tal1 - tal2);
//     console.log(tal1 * tal2);
//     console.log(tal1 / tal2);
//     console.log(tal1 % tal2);
// }

// var result = 0;
// function add(tal) {
//     // result = result + tal;
//     result += tal;
// }

// function sub(tal) {
//     result -= tal;
// }

// add(5);
// add(8);
// sub(4);

// console.log(result);

// // Anonyme funktioner
// // Gammel Metode
// var sayHeyAnonym = function (value) {
//     console.log(value); // Udskriver "test af anonym function"
// }

// sayHeyAnonym('test af anonym funktion');

// // Nyere Metode
// var sayHeyAnonym = value => console.log(value);

// sayHeyAnonym('test af anonym funktion');

// // Arguments og default-values
// function add(x = 0, y = 0) {
//     console.log('x er lig med &{x} og y af lig med &{y}. Sum: ', x + y);
// }

// add(); //Udskriver "x er lig med 0 og y=0. Sum:  0"
// add(3, 8); //Udskriver "x er lig med 3 og y=8. Sum:  11"

// Øvelse 2
// var langTekst = "Der var engang en lille mutant som troede på den store mutant";

// function afkortstreng(tekst) {
//     // return tekst.substr(0, 30); // 0 er start punktet efterfulgt af hvor manger tegn den tæller frem.
//     return tekst.substring(0, 30); // .substr er det samme som .substring
// }
// console.log(afkortstreng(langTekst));

// Øvelse 3
var dato = new Date();
var birthday = new Date("07/09/93"); // Dato skrives i amerikansk format Måned - Dag - År
var idol = ["Christian", "Hansen", 1993];
var profil = function (p) {
    return p[0] + " " + p[1] + ": Født " + p[2]; // Returnerer tekst-strengen "Peter Pedal: Født 1941"
}

console.log(profil(idol)); // Udskriver "Christian Hansen: Født 1993"
console.log(dato.getFullYear() - birthday.getFullYear()); // Udskriver alder (fra 1993 til nuværende år)

// Lommeregner 
function calculator() {
    var result = 0;
    return {
        add: function (x) {
            result += x;
        },
        sub: function (x) {
            result -= x;
        },
        result: function () {
            return result;
        }
    }
}

var calc = calculator();
calc.add(2);
calc.add(5);
calc.add(3);
calc.sub(4);

console.log(calc.result());