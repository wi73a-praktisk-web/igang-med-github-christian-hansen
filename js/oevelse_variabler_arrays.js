//Øvelse Variabler 1
var navn = "Karlle";
var alder = 57;

var tekst = `Mit navn er ${navn} og jeg er ${alder}år gammel.`;

console.log(tekst);

//Øvelse Variabler 2
var moms = 1.25;
var pris_uden_moms = 400;

var pris_med_moms = pris_uden_moms * moms;
var pris_uden_moms_02 = pris_med_moms / moms;

console.log(pris_med_moms);
console.log(pris_uden_moms_02);

//Øvelse Variabler 3
var forste = 10;
var anden = 20;

anden = anden - forste;
forste = forste + forste;

console.log(forste + " første");
console.log(anden + " anden");

//Øvelse Variabler 4.1
var carName = "Volvo";

console.log(carName);

//Øvelse Variabler 4.2
var number = 50;

console.log(number);

//Øvelse Variabler 4.3
var carName = "Volvo";

console.log(carName);

//Øvelse Variabler 4.4
var x = 5;
var y = 10;

console.log(x + y);

//Øvelse Variabler 4.5
var x = 5;
var y = 10;

var z = x + y;

console.log(z);

//Øvelse Variabler 4.6
var firstName = "John", lastName = "Doe", age = "45";

console.log(firstName, lastName, age);

//Øvelse Arrays 1.1
var cars = ["Saab", "Volvo", "BMW"];

console.log(cars);

//Øvelse Arrays 1.2
var cars = ["Saab", "Volvo", "BMW"];

console.log(cars[1]);

//Øvelse Arrays 1.3
var cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Opel";

console.log(cars);

//Øvelse Arrays 1.4
var cars = ["Saab", "Volvo", "BMW"];

console.log(cars.length);

//Øvelse Arrays 1.5
var cars = ["Saab", "Volvo", "BMW"];

cars[cars.length] = "Mercedes";

console.log(cars);

//Øvelse Arrays 2
var personer = [
    [hold_a = "Lotte", "Tenna"],
    [hold_b = "Timm", "Tue"],
    [hold_c = "Jake", "Maiken"]
];

console.log(personer);

for (var i = 1; i < 31; i++) {
    console.log(i);
    
}

var tekst = "hans bob har en cykel som er blå";
console.log(tekst.slice(0,8));
console.log(tekst.toUpperCase());